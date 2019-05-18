import React, { Component } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

class AddMeal extends Component {
    initialState = {
        id: 0,
        meal: "",
        calories: ""
    };

    constructor(props) {
        super(props);

        this.state = this.initialState;
    }

    onInputChangeHandler = e => {
        this.setState({
            id: this.getId(),
            [e.target.name]: e.target.value
        });
    };

    getId = () => {
        return Math.random()
            .toString(36)
            .substr(2, 9);
    };

    onAddMealClickHandler = () => {
        this.props.addMealClickHandler(this.state);
        this.resetForm();
    };

    resetForm = () => {
        this.setState(this.initialState);
    };

    render() {
        return (
            <Row>
                <Col md={{ span: 6, offset: 3 }} className="border p-2">
                    <Form>
                        <Form.Group controlId="meal">
                            <Form.Label>Meal</Form.Label>
                            <Form.Control
                                type="text"
                                name="meal"
                                placeholder="Enter meal"
                                onChange={this.onInputChangeHandler}
                                value={this.state.meal}
                            />
                        </Form.Group>

                        <Form.Group controlId="calories">
                            <Form.Label>Calories</Form.Label>
                            <Form.Control
                                type="text"
                                name="calories"
                                placeholder="Enter calories"
                                onChange={this.onInputChangeHandler}
                                value={this.state.calories}
                            />
                        </Form.Group>

                        <Button
                            variant="primary"
                            type="button"
                            onClick={this.onAddMealClickHandler}
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
