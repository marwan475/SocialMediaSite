import React, {useState, useEffect} from "react";
import styled  from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Channels from "../components/Channels";


function Main() {

    const [channels, setChannels] = useState([]);

    const [curChannel,setcurChannel] = useState(undefined);

    const navigate = useNavigate();

    useEffect(()=>{
        if (!localStorage.getItem("user")){
            navigate("/login");
        }
    });

    const getChannels = async()=>{
        const data = await axios.get('http://localhost:8080/api/db/channels');
        setChannels(data.data);
    };

    useEffect(()=>{
        getChannels();
    },[]);

    const handleChannelchange = (index) => {
        setcurChannel(index);
    }

    return (
    <Container>
        <div className="container">
        <Channels channels={ channels} changeChannel={handleChannelchange}/>
        </div>
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
span {
    text-align: center;
}
`;

export default Main;