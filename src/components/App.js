import React from "react";
import {BrowserRouter} from 'react-router-dom';
import {Nav} from "./nav/Nav";
import {Routes} from "./parts/Routes";


export const App = () => (

    <div className="wrapper">
        <BrowserRouter>
            <Nav />
            <div className='block'>
                <div>
                    <Routes />
                </div>
            </div>
        </BrowserRouter>
    </div>
);



