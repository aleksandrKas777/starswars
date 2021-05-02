import React from 'react';
import {NavLink} from 'react-router-dom';

export const Nav = () => (
    <div className='nav'>
        <NavLink exact activeStyle={{backgroundColor: '#383BF0'}} to='/'> главная </NavLink>
        <NavLink activeStyle={{backgroundColor: '#383BF0'}} to='/planets'> planets</NavLink>
        <NavLink activeStyle={{backgroundColor: '#383BF0'}} to='/films'> films</NavLink>
        <NavLink activeStyle={{backgroundColor: '#383BF0'}} to='/people'> people</NavLink>
        <NavLink activeStyle={{backgroundColor: '#383BF0'}} to='starships'> starships</NavLink>
    </div>
);