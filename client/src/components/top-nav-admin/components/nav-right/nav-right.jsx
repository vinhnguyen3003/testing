import React from 'react';
import NavRightNoti from './nav-right-noti';
import NavRightAvt from './nav-right-avt';
// import PropTypes from 'prop-types';

NavRight.propTypes = {
    
};

function NavRight(props) {
    return (
        <div className="navbar-nav nav-right">
            <NavRightNoti />
            <NavRightAvt />
        </div>
    );
}

export default NavRight;