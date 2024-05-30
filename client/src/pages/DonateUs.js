import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import '../styles/Common.css';
import '../styles/donate-us.css';

const stripePromise = loadStripe('pk_test_51PLJtfSEOIxcvFwMpYt3nOvYGa2me3QkgYKqF7WGVvNYFM4997gLgagHPxE9Qsz1hV71Prv' +
        'wo9QADtPiGSsUY1Gl00p8WNUjuD');

function DonationForm() {
    const [amount, setAmount] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const stripe = useStripe();
    const elements = useElements();

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handleSubmit = async(e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        });

        if (error) {
            console.error(error);
            return;
        }

        // Here you can send paymentMethod.id and other data to your backend for processing
        console.log(paymentMethod);

        // Reset the form after submission
        clearForm();
    };

    const clearForm = () => {
        setAmount('');
        setName('');
        setEmail('');
        setPhone('');
        const cardElement = elements.getElement(CardElement);
        if (cardElement) {
            cardElement.clear();
        }
    };

    return (
        <div className='background-container proper-alignment'>
            <Container>
                <Row>
                    <Col lg={6} className="info-column">
                        <h2 className="text-center text-capitalize">Support Our Mission</h2>
                        <p>Every contribution you make helps us continue to provide essential services
                            to our community. Your donations are vital in:</p>
                        <ul className="donation-list">
                            <li>
                                <b>Maintaining our platforms</b>
                                – ensuring they run smoothly and are accessible to everyone.</li>
                            <li>
                                <b>Expanding our reach</b>
                                – allowing us to serve more people and make a greater impact.</li>
                            <li>
                                <b>Enhancing our services</b>
                                – continuously improving to meet the needs of our community.</li>
                        </ul>
                        <p>By supporting us, you are directly contributing to the sustainability and
                            growth of our mission. Your generosity drives our innovation, helping us evolve
                            and remain a critical resource for those who depend on us.</p>
                        <p>Join us in making a difference. Together, we can sustain the momentum and
                            uphold the excellence of our services. Your support is invaluable and deeply
                            appreciated.</p>
                    </Col>

                    <Col lg={6}>
                        <h2 className="text-white text-center text-capitalize mb-4">donate us</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formAmount">
                                <Form.Control
                                    type="text"
                                    value={amount}
                                    onChange={handleAmountChange}
                                    placeholder="Amount"
                                    className="form-control" />
                            </Form.Group>
                            <Form.Group controlId="formName">
                                <Form.Control
                                    type="text"
                                    value={name}
                                    onChange={handleNameChange}
                                    placeholder="Name"
                                    className="form-control" />
                            </Form.Group>
                            <Form.Group controlId="formEmail">
                                <Form.Control
                                    type="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    placeholder="Email"
                                    className="form-control" />
                            </Form.Group>
                            <Form.Group controlId="formPhone">
                                <Form.Control
                                    type="phone"
                                    value={phone}
                                    onChange={handlePhoneChange}
                                    placeholder="Phone"
                                    className="form-control" />
                            </Form.Group>
                            <Form.Group controlId="formCardDetails">
                                <CardElement className="form-control p-3" />
                            </Form.Group>
                            <div className="d-flex justify-content-between">
                                <Button 
                                    type="button" 
                                    onClick={clearForm} 
                                    className="btn-clear"
                                    style={{ backgroundColor: 'red', borderColor: 'red' }}>
                                    Clear
                                </Button>
                                <Button 
                                    type="submit" 
                                    disabled={!stripe} 
                                    className="btn-donate float-end">
                                    Donate
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

function DonationPage() {
    return (
        <Elements stripe={stripePromise}>
            <DonationForm />
        </Elements>
    );
}

export default DonationPage;
