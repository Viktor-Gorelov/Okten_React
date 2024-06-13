import React from 'react';
import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <ul>
                <li><Link to={''}>Home Page</Link></li>
                <li><Link to={'users'}>Users Page</Link></li>
                <li><Link to={'posts'}>Posts Page</Link></li>
            </ul>
        </div>
    );
};

export default HeaderComponent;