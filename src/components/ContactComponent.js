import React from 'react';
import '../styles/ContactStyle.css';
import { Button, Form, FormGroup, Input } from 'reactstrap';

function Contact() {
    return (
        <div className="container contact-design" data-aos="zoom-in-up" id="/contact">
           <div className="row">
                <div className="col-12">
                    <p className="contactHead">Contact Me</p>
                </div>
           </div>
            <div className="row">
              
              <div className="col-12 ">
                    <Form method="POST" action="https://formspree.io/jeewanbhusal@gmail.com" className="form-design">
                            <FormGroup>
                                <Input type="text" name="fullname" id="fullname" placeholder="Enter Name Please: " required/>
                            </FormGroup>
                            <FormGroup>
                                <Input type="email" name="email" id="email" placeholder="Your Email " required/>
                            </FormGroup>
                            <FormGroup>
                                <Input type="subject" name="subject" id="subject" placeholder="Subject " required/>
                            </FormGroup>
                            <FormGroup>
                                <Input type="textarea" style={{height:180}} name="message" id="message" placeholder="I am available for hire. Please feel free to contact me by hitting that send button. I'd love to hear from you. Thanks." required/>
                            </FormGroup>
                            <Button className="form-button">Send</Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Contact;






