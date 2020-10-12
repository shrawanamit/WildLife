import React from 'react';
import '../SCSS/form.scss';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default class FormDonate extends React.Component {
    render() {
        return (
            <div className="formBGColor">
                <div className="FormBody">
                    <Form.Row>
                       
                            <Col md="3">
                                <Form.Control as="select" size="lg">
                                    <option>Choose an amount</option>
                                    <option>$100</option>
                                    <option>$250</option>
                                    <option>Other</option>
                                </Form.Control>
                            </Col>
                            <Col  md="3">
                                <Form.Control size="lg"  type="text" placeholder="Your name" />
                            </Col>
                            <Col  md="3">
                                <Form.Control size="lg"  type="text" placeholder="E mail" />
                            </Col>
                            <Col md="3" >
                                <Button variant="warning" size="lg">
                                    Donate Now
                                 </Button>{' '}
                            </Col>
                        
                    </Form.Row>

                </div>
            </div>
        );
    }
}