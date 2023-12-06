import React, {useState, useEffect} from "react";
import styled  from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg";

export default function Channels({ channels, changeChannel }){

    const [curSelected, setcurSelected] = useState(undefined);

    const navigate = useNavigate();

    const changecurrChannel = (index)=> {
        setcurSelected(index);
        changeChannel(index);
    };

    const handleSubmit = (event)=>{
        localStorage.clear();
        alert("User Logged out");
        navigate("/login");
        
    };

    const handleChan = (event)=>{
        navigate("/createchannel");
    };



    return (
    <Container1>
        <div className="webName">
            <img src={Logo} alt="Logo" />
            <h4>Twisted Tech</h4>
        </div>
        <div className="channels">
            {
                channels.map((channel)=>{
                    var question = channel.question;
                    var index = channel.id;
                    return (
                        <div className={`channel ${
                            index === curSelected ? "selected" : ""
                          }`} key={index} onClick={()=>changecurrChannel(index)}>
                            {question}
                        </div>
                    );
                })
            }
        </div>
        <div className="but">
        <form className="submitForm" onSubmit={(event)=>handleChan(event)}> 
            <button type="submit">Create your own channel</button> 
        </form>
        <form className="submitForm" onSubmit={(event)=>handleSubmit(event)}> 
            <button type="submit">Logout</button> 
        </form>
        </div>
    </Container1>
    );
}

const Container1 =styled.div`
    display: grid;
    grid-template-rows: 10% 75% 15%;
    overflow: hidden;
    background-color: #00000078;
    .channels {
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: auto;
        gap: 0.8rem;
        &::-webkit-scrollbar {
            width: 0.2rem;
            &-thumb {
                background-color: #ffffff39;
                width: 0.1rem;
                border-radius: 1rem;
            }
        }
        .channel {
            background-color: #ffffff39;
            min-height 5rem;
            width: 90%;
            cursor: pointer;
            border-radius: 0.2rem;
            padding: 0.4rem;
            gap: 1rem;
            align-items: center;
            display: flex;
            transition: 0.5s ease-in-out;
        }
        .selected {
            background-color: #9186f3;
        }
        span {
            background-color: #ffffff39;
            min-height 5rem;
            width: 90%;
            cursor: pointer;
            border-radius: 0.2rem;
            padding: 0.4rem;
            gap: 1rem;
            align-items: center;
            
        }
    }
    .but {
        align-items: center;
        display: flex;
        justify-content: space-between;
        button {
            margin: 0.5rem;
            padding: 0.2rem;
            border: none;
            cursor: pointer;
            border-radius: 0.01rem;
        }
    }
    .webName{
        display: flex;
        align-items: center;
        gap: 1rem;
        justify-content: center;
        color: #A1A1A1;
        img {
            height: 2.5rem;
        }
    }

`;