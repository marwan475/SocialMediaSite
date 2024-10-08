import styled  from "styled-components";
import React, {useState, useEffect} from "react";
import axios from "axios";


export default function Msg({chan}){

    const [msgs, setmsgs] = useState([]);

    var channel = chan;

    const getMsgs = async()=>{
        const data = await axios.post('http://localhost:8080/api/db/msgs',{
            channel,
        });
        setmsgs(data.data);

    };

    useEffect(()=>{
        getMsgs();
        
    });

    return (
        <Container5>
            <div className="msgs">
                {
                    msgs.map((msg)=>{
                        return (
                            msg.user === localStorage.getItem('user') ?
                            <div className={"msgsent"}>
                                <div className="content">
                                    <p>{msg.user}: {msg.msg}</p>
                                </div>
                            </div>:
                            <div className="msgrec">
                                <div className="content">
                                    <p>{msg.user}: {msg.msg}</p>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </Container5>
    );
}

const Container5 =styled.div`
    height: 80%;
    overflow: auto;
    .msgs{
        padding: 1rem 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        overflow: auto;
        
        .msgsent{
            display: flex;
            align-items: center;
            justify-content: flex-end;
            
            .content {
                overflow-wrap: break-word;
                font-size: 1.1rem;
                background-color: white;
                min-height 5rem;
                width: 30%;
                cursor: pointer;
                border-radius: 0.2rem;
                padding: 0.4rem;
                gap: 1rem;
                align-items: center;
            }
        }
        .msgrec{
            display: flex;
            align-items: center;
            justify-content: flex-start;
            .content {
                overflow-wrap: break-word;
                font-size: 1.1rem;
                background-color: white;
                min-height 5rem;
                width: 30%;
                cursor: pointer;
                border-radius: 0.2rem;
                padding: 0.4rem;
                gap: 1rem;
                align-items: center;

            }
        }
    }
`;