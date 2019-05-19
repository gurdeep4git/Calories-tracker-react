import React, { Component } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

class EditMeal extends Component {
    initialState = {
        id: 0,
        meal: "",
        calories: ""
    };

    constructor(props) {
        super(props);

        this.state = this.initialState;
    }

    render() {
        return (
            <Row>
                <Col md={{ span: 6, offset: 3 }} className="border p-2">
                    <Form>
                        <Form.Group controlId="meal">
                            <Form.Label>Meal</Form.Label>
                            <Form.Control type="text" name="meal" />
                        </Form.Group>

                        <Form.Group controlId="calories">
                            <Form.Label>Calories</Form.Label>
                            <Form.Control type="text" name="calories" />
                        </Form.Group>

                        <Button variant="primary" type="button">
                            Update
                        </Button>

                        <Button variant="default" type="button">
                            Cancel
                        </Button>
                    </Form>
                </Col>
            </Row>
        );
    }
}

export default EditMeal;
