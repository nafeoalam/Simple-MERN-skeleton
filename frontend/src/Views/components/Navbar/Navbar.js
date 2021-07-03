import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import decode from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';

import * as actionType from '../../../Store/store-constants';


const Navbar = () => {

    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));


    const logout = () => {
        dispatch({ type: actionType.LOGOUT });

        history.push('/auth');

        setUser(null);
    };

    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);


    return (
        <>
            {user?.token ? (<div>
                <Link to="/">
                    <h2>Dashboard</h2>
                </Link>

                <Button variant="contained" color="secondary" onClick={logout}>Logout</Button>
            </div>) : <div></div>}
        </>
    );
};


export default Navbar;