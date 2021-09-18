import React from 'react';
import SidebarAdmin from '../sidebar-admin/sidebar-admin';
import TopNavAdmin from '../top-nav-admin/top-nav-admin';
// import PropTypes from 'prop-types';

// DashboardAdmin.propTypes = {
    
// };

function DashboardAdmin(props) {
    return (
        <div className="app">
            <TopNavAdmin />
            <SidebarAdmin {...props}/>
            <div className="wrapper"></div>
        </div>
    );
}

export default DashboardAdmin;