import React, {useEffect} from 'react';


export default function Ship(props){
    const { ship } = props

    
    return (
        <img src={ship.url}/>
    )
}