import React, {useState, useEffect} from 'react';
import {useForm} from './hooks/useForm';
import '../css/contact.css';

const Contact = () => {
    const [values, handleChange] = useForm({name: "", email: "", message: ""});
    const [emailSent, setEmailSent] = useState(false);
    
    const handleSubmit = e => {
        e.preventDefault();
        fetch('/contact', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(values)
        })
        .then(res => res.json())
        .then(response => setEmailSent(response))
        .catch(error => console.log("Erreur : " + error));   
    }
    return (
        <div className="row" style={{height: window.innerHeight }}>
            <div className="col-md-4 m-auto p-5">
                <div className="row">
                    <div className="col">
                        <p className="text-dark text-center display-4 emailStatut">{emailSent ? `Thanks for your message ${values.name} ! \n check your email. ` : "Speak to a Tesla Advisor and learn more about the best value of any national provider."}</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input type="text" name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={values.name} onChange={handleChange} />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Email</label>
                        <input type="email" name="email" className="form-control" id="exampleInputPassword1" value={values.email} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Message</label>
                        <textarea name="message" className="form-control" id="exampleFormControlTextarea1" rows="3" value={values.message} onChange={handleChange} ></textarea>
                    </div>
                    <button className="btn btn-dark btn-block" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;