// Write your Character component here
import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Accordion from 'react-bootstrap/Accordion'
import styled from 'styled-components';

export default function Character(props){
    const { char, eKey } = props;
    console.log(char.starships)
    const ships = useState([])
    const StarP = styled.p`
    font-family: 'Geostar', cursive;
    `
    const AcoBod = styled.div`
    background-color: lightgrey;
    opacity: .99;
    `
    return (
        
        <Accordion.Item eventKey={eKey}>
            <AcoBod>
        <Accordion.Header>{char.name}</Accordion.Header>
        <Accordion.Body>
            
        <StarP>Gender: {char.gender === 'n/a' ? 'Robot': char.gender}</StarP>
        <StarP>Height: {char.height}</StarP>
        <StarP>Featured in: {char.films.join(', ')} </StarP>
        

        


        </Accordion.Body>
        </AcoBod>
      </Accordion.Item>
      
    )
}