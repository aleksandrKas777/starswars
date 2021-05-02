import React from "react";
import {Switch, Route} from 'react-router-dom';
import {Planets} from "./planets/Planets";
import {Films} from "./films/Films";
import {People} from "./people/People";
import {Starships} from "./starships/Starships";
import {Planet} from "./planets/planet/Planet";
import {Starship} from "./starships/starship/Starship";
import {Man} from "./people/man/Man";
import {Film} from "./films/film/Film";


export const Routes = () => (
    <Switch>
        <Route exact path='/' component={Planets}/>
        <Route exact path='/planets' component={Planets}/>
        <Route path='/planets/:id' component={Planet}/>

        <Route exact path='/films' component={Films}/>
        <Route path='/films/:id' component={Film}/>

        <Route exact path='/people' component={People}/>
        <Route path='/people/:id' component={Man}/>

        <Route exact path='/starships' component={Starships}/>
        <Route path='/starships/:id' component={Starship}/>

        <Route component={() => <div>404</div>}/>
    </Switch>
);