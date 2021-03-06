import './stylesheets/base.scss';
import Home from './pages/home/home';
import ProductList from './pages/product-list/product-list';
import ProductDetail from './pages/product-detail/product-detail';
import Cart from './pages/cart/cart';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import DashboardAdmin from './components/dashboard-admin/dashboard-admin';
import ProductAdmin from './pages/product-admin/product-admin';
import CategoryAdmin from './pages/category-admin/category-admin';
import DiscountAdmin from './pages/discount-admin/discount-admin';
import LoginAdmin from './pages/login-admin/login-admin';
import OrderAdmin from './pages/order-admin/order-admin';
import Page404 from './pages/page404/page404';
import AuthContextProvider from './contexts/authContext';
import ProtectedRoute from './components/routing/protectedRoute';
import CateContextProvider from './contexts/categoryContext';
import ProductContextProvider from './contexts/productContext';
import CartContextProvider from './contexts/cartContext';
import ReviewContextProvider from './contexts/reviewContext';
import HistoryContextProvider from './contexts/historyContext';
import OrderContextProvider from './contexts/orderContext';

function App() {console.log("App")
    return (
        <AuthContextProvider>
        <CateContextProvider>
        <ProductContextProvider>
        <ReviewContextProvider>
        <CartContextProvider>
        <HistoryContextProvider>
        <OrderContextProvider>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/product-list" component={ProductList}/>
                    <Route path="/product-detail/:id" component={ProductDetail}/>
                    <Route path="/cart" component={Cart}/>

                    <Route path="/admin/login" component={LoginAdmin}/>
                    <Route path="/admin/404" component={Page404}/>

                    <ProtectedRoute path="/admin" exact render={(props)=>{
                        return <DashboardAdmin {...props}/>
                    }}/>
                    <ProtectedRoute path="/admin/product" exact render={(props)=>{
                        return <ProductAdmin {...props}/>
                    }}/>
                    <ProtectedRoute path="/admin/category" exact render={(props)=>{
                        return <CategoryAdmin {...props}/>
                    }}/>
                    <ProtectedRoute path="/admin/discount" exact render={(props)=>{
                        return <DiscountAdmin {...props}/>
                    }}/>
                    <ProtectedRoute path="/admin/order" exact render={(props)=>{
                        return <OrderAdmin {...props}/>
                    }}/>
                    {/* <Route path="/admin/product" component={ProductAdmin}/> */}
                    
                    <Route path="*" exact component={Page404} />
                </Switch>
            </BrowserRouter>
        </OrderContextProvider>
        </HistoryContextProvider>
        </CartContextProvider>
        </ReviewContextProvider>
        </ProductContextProvider>
        </CateContextProvider>
        </AuthContextProvider>
    );
}

export default App;
