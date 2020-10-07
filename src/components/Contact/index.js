import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [invalidEmail, setErrorEmail] = useState('');
    const [invalidName, setErrorName] = useState('');
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            
            // isValid conditional statement
            if (!isValid) {
                setErrorEmail('Invalid email!');
            } else {
                if (!e.target.value.length) {
                  setErrorEmail(`${e.target.name} is required.`);
                } else {
                  setErrorEmail('');
                }
            }
        }
        else if(e.target.name === 'name')  {
            if(invalidName === 'Please enter your name. (Required)' && e.target.value) {
                setErrorName('');
                setFormState({ ...formState, [e.target.email]: e.target.value });
            }
        }

        if (!invalidEmail) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
        
        if(!formState.name) {
            setErrorName('Please enter your name. (Required)');
        }

        if(!formState.email) {
            setErrorEmail('Please enter your email. (Required)');
        }
    }

    return (
        <section className='contact-section'>
            <h1 className='section-title' id='contact-title'>Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div className='tooltip'>
                    <label htmlFor="name">Name:
                    {invalidName && (
                            <div>
                                <p className="error-text">{invalidName}</p>
                            </div>
                        )}</label>
                    <input type="text" placeholder='Name' defaultValue={name} onChange={handleChange} name="name" autoomplete="off" />
                    <span class="tooltiptext">Required.</span>
                </div>
                <div className='tooltip'>
                    <label htmlFor="email">Email address:
                        {invalidEmail && (
                            <div>
                                <p className="error-text">{invalidEmail}</p>
                            </div>
                        )}</label>
                    <input type="email" placeholder='Email' defaultValue={email} name="email" onChange={handleChange} autocomplete="off" />
                    <span class="tooltiptext">Required.</span>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" />
                </div>
                <button data-testid="submit" type="submit">Submit</button>
            </form>
        </section>
    );
}
export default ContactForm;