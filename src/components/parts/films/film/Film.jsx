import React, {useEffect, useState} from 'react';
import {Loader} from "../../../loader";


export const Film = (props) => {
        const [data, setData] = useState(null);
        const {id} = props.match.params;
    console.log(id);



        useEffect(() => {
            let isMounted = true;

            fetch('https://swapi.dev/api/films/' + id + '/')
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
        const info = keys.filter((item) =>item !== 'characters' && item !== 'url' && item !== 'planets'
            && item !== 'vehicles' && item !== 'starships' && item !=='species');


        return (
            <div>
                {info.map((item, index) => {
                    return <p key={index}><span className={'title'}>{item} :</span> <span>{data[item]} </span></p>
                })}
            </div>
        );
    }
;