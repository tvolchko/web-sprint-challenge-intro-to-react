import React, {useEffect} from 'react';


export default function Ship(props){
    const { ship } = props
    useEffect(()=>{
        char.starships.map(ship =>{
            axios.get(ship).then((resp)=>{
                ships.push(resp.data)
                console.log(resp.data)
            })
        })
}, [])
    
    return (
        <img src={ship.url}/>
    )
}