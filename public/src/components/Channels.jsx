import React, {useState, useEffect} from "react";
import styled  from "styled-components";
import { Link, useNavigate } from "react-router-dom";

export default function Channels({ channels }){

    const changeChannel = (index,channel)=> {};

    return (
    <Container>
        <div className="channels">
        <span>create your own channel<br></br><Link to="/createchannel">Here</Link></span>
            {
                channels.map((channel)=>{
                    var question = channel.question;
                    return (
                        <div className="channel">
                            {question}
                        </div>
                    );
                })
            }
        </div>
    </Container>
    );
}

const Container =styled.div``;