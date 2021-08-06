import React, { useState } from 'react';
import './style.css';

// Here we import a helper function that will check if the email is valid
// import { checkPassword, validateEmail } from '../../utils/helpers';
import { validateEmail } from '../../utils/helpers';

function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [userMsg, setUserMsg] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, userName, or userMsg:
    if (inputType === 'userName') {
      setUserName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userMsg') {
      // console.log( 'Setting userMsg to: ', inputValue );
      setUserMsg(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First check to see if the userName is empty. 
    // If so we set an error message to be displayed on the page:
    if (!userName) {
      setErrorMessage('Your name must be provided...');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }

    // Second, check to see if the email is invalid. 
    // If so we set an error message to be displayed on the page:
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid eMail address...');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }

    // Third, check to see if a message was provided. 
    // If not, set an error message to be displayed on the page:
    if (!userMsg) {
      setErrorMessage('Please provide a message to send...');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }

    setErrorMessage('Your contact request has been submitted...');

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName('');
    setEmail('');
    setUserMsg('');
    // this.setState({ userMsg: '' });
    // console.log( 'After clearing userMsg:', userMsg )

  };

  return (
    <div>
      <form className="form" id="contactFormID">
        <div className="row align-center-md">

          <div className="col">
          </div>

          <div className="col-md-6 align-center-md">
            <div className="card" style={{border: "1px solid darkgray"}}>
              <h2 style={{padding: "0 0 0 1rem"}}>Contact:</h2>
              <div className="form">

                {/* <label for="userName">Name:</label> */}
                Name:
                <input
                  name="userName"
                  value={userName}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="username"
                  cols="50"
                /><br></br>

                {/* <label for="email">eMail:</label> */}
                eMail:
                <input
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  type="email"
                  placeholder="email"
                /><br></br>

                {/* <label for="userMsg">Message:</label> */}
                Message:
                <textarea 
                  name="userMsg" 
                  id="contact-msg" 
                  form="contactFormID" 
                  style={{width: "100%", height: "100px"}}
                  onChange={handleInputChange}
                  placeholder="Type your message here..."
                >
                </textarea><br></br><br></br>

                <button type="button" onClick={handleFormSubmit} style={{width: "100%"}}>Submit</button>

              </div>
            </div>
          </div>

          <div className="col">
          </div>

        </div>
      </form>

      <div>
        <p className="error-text">{errorMessage}</p>
      </div>

    </div>

  );
}

export default Form;
