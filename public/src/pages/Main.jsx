import React, {useState, useEffect} from "react";
import styled  from "styled-components";
import { Link, useNavigate } from "react-router-dom";


function Main() {

    const navigate = useNavigate();

    useEffect(()=>{
        if (!localStorage.getItem("user")){
            navigate("/login");
        }
    })

    return (
    <Container>
        <div className="container"></div>
    </Container>);
   
}

const Container =styled.div`
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
gap: 1rem;
align-items; center;
background-color: #A1A1A1;
padding: 8%;
.container{
    height: 85vh;
    width: 85vw;
    background-color: #00000078;
    display: grid;
    grid-template-columns: 25% 75%;

}
`;

export default Main;