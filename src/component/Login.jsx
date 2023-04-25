import React, { useState } from 'react';
import '../css/login.css';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [passwordR, setpasswordR] = useState("");
    const [accept, setAccept] = useState(false);
    console.log("");

    function Submit(e) {
        e.preventDefault();
        setAccept(true);
    }

    return (

        <div className="form">
            <div className="form-body">
                <form onSubmit={Submit} >

                        <label className="form__label" htmlFor="email">Email:</label>
                        <input className="form__input" type="text" id="email" placeholder="LastName" value={email} onChange={(e) => setEmail(e.target.value)} />


                        <label className="form__label" htmlFor="password">Password: </label>
                        <input className="form__input" type="password" id="password" placeholder="Password" value={password}
                            onChange={(e) => setpassword(e.target.value)} />
                        {password.length < 8 && accept && (<p>Password Must be More Than 8 Char </p>)}


                        <label className="form__label" for="confirmPassword">Confirm Password </label>
                        <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password" 
                        onChange={(e) => setpasswordR(e.target.value)} />  
                        {password.length < 8 && (<p>Password Must be More Than 8 Char </p>)}
                        {passwordR !== password && setAccept && <p>Pasword does not match</p>}

                </form>
            </div>

            <div class="footer">
                <button type="submit" class="btn btn-primary">Login</button>
            </div>
        </div>
    )
}