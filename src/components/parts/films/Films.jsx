import React, {useEffect, useState} from 'react';
import {Loader} from "../../loader";
import {NavLink} from "react-router-dom";

export const Films = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        let isMounted = true;

        fetch('https://swapi.dev/api/films/')
            .then((res) => res.json())
            .then(({results}) => {

                if (isMounted) setData(results);
            })

        return () => {
            isMounted = false;
        };
    }, []);
    if (!data) return <Loader/>;

    return (
        <div>
            {data.map((item, id) => {
                    const idPart = '/films/' + item.url.split('/')[5];
                    return <NavLink key={id} to={idPart}><p>{item.title}</p></NavLink>
                }
            )}
        </div>
    );
};