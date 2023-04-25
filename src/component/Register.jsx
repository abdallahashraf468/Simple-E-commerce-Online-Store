import React, {useState} from 'react';
import '../css/register.css'
function RegistrationForm() {
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [passwordR, setpasswordR] = useState("");
    const [accept, setAccept] = useState(false);
    console.log("");

    function Submit(e) {
        e.preventDefault();
        setAccept(true);
    }

    return(
      <div className="form">
          <div className="form-body">
              <div className="username">
                  <label className="form__label" htmlFor="firstName">First Name </label>
                  <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
              </div>
              <div className="lastname">
                  <label className="form__label" htmlFor="lastName">Last Name </label>
                  <input  type="text" name="" id="lastName"  className="form__input"placeholder="LastName"/>
              </div>
                                               {/* use state */}
              <div className="email">
                  <label className="form__label" htmlFor="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="password">
                  <label className="form__label" htmlFor="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password" onChange={(e) => setpassword(e.target.value)}/>
                  {password.length < 8 && accept && (<p>Password Must be More Than 8 Char </p>)}

              </div>
              <div className="confirm-password">
                  <label className="form__label" htmlFor="confirmPassword">Confirm Password </label>
                  <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password" onChange={(e) => setpasswordR(e.target.value)}/>
                  {password.length < 8 && (<p>Password Must be More Than 8 Char </p>)}
                        {passwordR !== password && setAccept && <p>Pasword does not match</p>}
              </div>
          </div>
          <div className="footer">
              <button type="submit" className="btn btn-primary">Register</button>
          </div>
      </div>      
    )       
}
export default RegistrationForm;