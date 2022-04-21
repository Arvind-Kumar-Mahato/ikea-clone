import React from "react";
import {useState} from 'react';
import "./Login.css"
export const Login = ()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <>
             <div className="loginpage">
            <div className="login__rightside">
                <div className="login__rightHeader">
                    
                     
                   
                    <img src="https://i.pinimg.com/originals/87/57/3c/87573c4b482d35d350653994b2c96ad4.jpg" alt=""/>
                </div>

                <div className="login__rightHero">
                
                    <h2 className="login__rightTitle">
                        <span>Login </span>
                         to your IKEA account
                    </h2>
                    <p>
                        IKEA will ask you to confirm your contact method(s), 
                        due to security and legal reasons.
                    </p>
                </div>
                <div className="smallFooter">
                    <p>IKEA.nl - 
                     <a className="smallFooter__tag">Cookie Policy. </a>
                     and 
                     <a className="smallFooter__tag"> Privacy Policy.</a>
                    </p>
                    
                    <p>&copy; Inter IKEA Systems B.V. 1999-2020</p>
                </div>
            </div>
            <div className="login__leftside">
                <form className="login__form">
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" placeholder="Email/mobile number" className="login__input"/>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" placeholder="Password" className="login__input"/> 
                    <button type="submit" className="login__button">Login</button>
                </form>

                <div className="smallFooter-2">
                    <p>IKEA.nl - 
                     <a className="smallFooter__tag">Cookie Policy. </a>
                     and 
                     <a className="smallFooter__tag"> Privacy Policy.</a>
                    </p>
                    
                    <p>&copy; Inter IKEA Systems B.V. 1999-2020</p>
            </div>
            </div>
           
        </div>


        </>
    )
}
