import React, {useState, useEffect} from "react";
import styled  from "styled-components";
import { Link, useNavigate } from "react-router-dom";

export default function Channels({ channels, changeChannel }){

    const [curSelected, setcurSelected] = useState(undefined);

    const changecurrChannel = (index)=> {
        setcurSelected(index);
        changeChannel(index);
    };


    return (
    <Container1>
        <div className="channels">
        <span>create your own channel<br></br><Link to="/createchannel">Here</Link></span>
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
    </Container1>
    );
}

const Container1 =styled.div`
    display: grid;
    grid-template-rows: 95%;
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
    }

`;