import axios from 'axios';
import {useContext, useEffect} from 'react';
import {Route, Redirect } from 'react-router-dom'
import { AuthContext } from '../../contexts/authContext';
import { apiUrl, LOCAL_STORAGE_ACCESS_TOKEN_NAME, LOCAL_STORAGE_REFRESH_TOKEN_NAME } from '../../contexts/constants';

const ProtectedRoute = ({render: Component, ...rest}) => {
    const {authState: { isWaiting, isAuthenticated }, loadUser} = useContext(AuthContext);
    console.log("protected route")
    
    //Refresh token
    useEffect(()=>{
        if(localStorage[LOCAL_STORAGE_REFRESH_TOKEN_NAME]){
            const refreshToken = async () => {
                const res = await axios.put(`${apiUrl}/admin/refreshToken`, {refreshToken : localStorage[LOCAL_STORAGE_REFRESH_TOKEN_NAME]});
                if(res.data.success){console.log("tt")

                    localStorage.setItem(LOCAL_STORAGE_REFRESH_TOKEN_NAME, res.data.tokens.refreshToken);
                    localStorage.setItem(LOCAL_STORAGE_ACCESS_TOKEN_NAME, res.data.tokens.accessToken);
                    await loadUser(); console.log(res.data.tokens.accessToken)
                    
                    setTimeout(()=>{
                        refreshToken();
                    }, 12 * 60 * 1000)
                }
            }
            refreshToken();
        }
    },[])
    
    if(isWaiting)
    return (
        <Route 
            {...rest}
            render = {props => 
                isAuthenticated ? (
                   (<Component {...rest} {...props}/>)
                ) :
                (
                    <Redirect to='/admin/404'/>
                )
            }
        />
    )
    else return null
}

export default ProtectedRoute;