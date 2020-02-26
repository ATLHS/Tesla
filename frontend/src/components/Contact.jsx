import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { useForm } from './hooks/useForm';
import '../css/contact.css';


const Contact = () => {
    const {handleChange, values, handleSubmit, isSent, name} = useForm('/contact', {name: "", email: "", message: ""});
    return ( 
    <ReactFullpage
    scrollingSpeed = {1000}
    render={() => {
    return (
        <ReactFullpage.Wrapper>
        <>
            {/* Section 1 */}
            <div className="section homeSection1">
                <div className="col-md-4 m-auto p-5">
                    <div className="row">
                        <div className="col">
                            <p className="text-dark text-center display-4 emailStatut">{isSent ? `Thanks for your message ${name} ! \n check your email. ` : "Speak to a Tesla Advisor and learn more about any national provider."}</p>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Name</label>
                            <input type="text" name="name" className="form-control" id="name" aria-describedby="emailHelp" value={values.name} onChange={handleChange} required/>
                            <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Email</label>
                            <input type="email" name="email" className="form-control" id="email" value={values.email} onChange={handleChange} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Message</label>
                            <textarea name="message" className="form-control" id="message" rows="3" value={values.message} onChange={handleChange} required></textarea>
                        </div>
                        <button style={{backgroundColor: "black", color: "white"}} className="btn btn-block" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
        </ReactFullpage.Wrapper>
        );
    }}
    />
    );
}

export default Contact;