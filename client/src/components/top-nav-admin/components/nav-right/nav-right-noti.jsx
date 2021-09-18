import React from 'react';
// import PropTypes from 'prop-types';

NavRightNoti.propTypes = {
    
};

function NavRightNoti(props) {
    return (
        <li className="nav-item dropdown">
            <span className="nav-link">
                <i
                className="fas fa-bell dropdown-toggle"
                data-toggle="notification-menu"
                />
                <span className="navbar-badge">15</span>
            </span>
            <ul id="notification-menu" className="dropdown-menu notification-menu">
                <div className="dropdown-menu-header">
                    <span>Notifications</span>
                </div>
                <div className="dropdown-menu-content overlay-scrollbar scrollbar-hover">
                    <li className="dropdown-menu-item">
                        <a href="#vv" className="dropdown-menu-link">
                            <div>
                                <i className="fas fa-gift" />
                            </div>
                            <span>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                <br />
                                <span>15/07/2020</span>
                            </span>
                        </a>
                    </li>
                    <li className="dropdown-menu-item">
                        <a href="#vv" className="dropdown-menu-link">
                            <div>
                                <i className="fas fa-tasks" />
                            </div>
                            <span>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                <br />
                                <span>15/07/2020</span>
                            </span>
                        </a>
                    </li>
                </div>
                <div className="dropdown-menu-footer">
                    <span>View all notifications</span>
                </div>
            </ul>
        </li>
    );
}

export default NavRightNoti;