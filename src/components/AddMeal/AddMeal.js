import React, { Component } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

class AddMeal extends Component {
    formSubmitHandler = e => {
        e.preventDefault();
    };

    render() {
        return (
            <Row>
                <Col md={{ span: 6, offset: 3 }} className="border p-2">
                    <Form onSubmit={this.formSubmitHandler}>
                        <Form.Group controlId="meal">
                            <Form.Label>Meal</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter meal"
                            />
                        </Form.Group>

                        <Form.Group controlId="calories">
                            <Form.Label>Calories</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter calories"
                            />
                        </Form.Group>

                        <Button
                            variant="primary"
                            type="button"
                            onClick={this.props.clicked}
                        >
                            Add
                        </Button>
                    </Form>
                </Col>
            </Row>
        );
    }
}

export default AddMeal;
