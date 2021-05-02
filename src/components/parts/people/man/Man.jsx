import React, {useEffect, useState} from 'react';
import {Loader} from "../../../loader";


export const Man = (props) => {
        const [data, setData] = useState(null);
        const {id} = props.match.params;


        useEffect(() => {
            let isMounted = true;

            fetch('https://swapi.dev/api/people/' + id + '/')
                .then((res) => res.json())
                .then((results) => {

                    if (isMounted) setData(results);
                })


            return () => {
                isMounted = false;
            };
        }, [id]);

        if (!data) return <Loader/>;
        const keys = Object.keys(data);
        const info = keys.filter((item) =>item !== 'vehicles' && item !== 'url' && item !== 'films'
        && item !== 'species' && item !== 'homeworld' && item !=='starships');


        return (
            <div>
                {info.map((item, index) => {
                    return <p key={index}><span className={'title'}>{item} :</span> <span>{data[item]} </span></p>
                })}
            </div>
        );
    }
;