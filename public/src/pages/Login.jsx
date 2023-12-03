import React, {useState, useEffect} from "react";
import styled  from "styled-components";
import Logo from "../assets/logo.svg";
import axios from "axios";


function Login() {

    const [values, setValues] = useState({
        username: "",
        password: "",
    });

    const handleSubmit = async (event)=>{
        event.preventDefault();
        const { username, password } = values;
        const { data } = await axios.post('http://localhost:8080/api/auth/login',{
            username,
            password,
        });
        alert(data.msg);
    };

    const handleChange = (event)=> {
        setValues({ ...values,[event.target.name]:event.target.value })
    };

    return( 
    <>
        <FormContainer>
            <form className="submitForm" onSubmit={(event)=>handleSubmit(event)}>
                <div className="webName">
                    <img src={Logo} alt="Logo" />
                    <h1>Twisted Tech Questions</h1>
                </div>
                <input 
                type="text" 
                placeholder="Username" 
                name="username" 
                onChange={(e)=>handleChange(e)}
                />
                <input 
                type="password" 
                placeholder="Password" 
                name="password" 
                onChange={(e)=>handleChange(e)}
                />
                <button type="submit">Login</button>
            </form>
        </FormContainer>
    </>
    );
   
}

const FormContainer =styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items; center;
    background-color: #A1A1A1;
    padding: 15% ;
    .webName{
        display: flex;
        align-items: center;
        gap: 1rem;
        justify-content: center;
        img {
            height: 5rem;
        }
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        background-color: #00000076;
        border-radius: 2rem;
        padding: 3rem 5rem;
        input {
            text-indent: 0.5rem;
            background-color: transparent;
            padding: 1rem
            border: 0.1rem solid #4e0eff;
            border-radius: 0.4rem;
            color: white;
            width: 100%;
            font-size: 1rem;
            &:focus {
                border: 0.1rem solid #997af0;
                outline: none;
                &::placeholder {
                    color: transparent;
                }
            }
        }
        button {
            padding: 1rem 2rem;
            border: none;
            cursor: pointer;
            border-radius: 0.4rem;
        }
        span {
            text-align: center;
        }
    }
`;

export default Login;