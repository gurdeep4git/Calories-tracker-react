import React, { Component } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { validate } from "@babel/types";

class AddMeal extends Component {
    initialState = {
        id: 0,
        meal: "",
        calories: "",
        showErrors: false
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
        const validateStatus = this.validate(this.state);
        if (validateStatus) {
            this.props.addMealClickHandler(this.state);
            this.resetForm();
        } else {
            this.setState({ showErrors: true });
        }
    };

    validate = state => {
        let status = true;
        if (
            state.meal === null ||
            state.meal === undefined ||
            state.meal === ""
        ) {
            status = false;
        }
        if (
            state.calories === null ||
            state.calories === undefined ||
            state.calories === "" ||
            state.calories === 0
        ) {
            status = false;
        }
        return status;
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
                            {this.state.showErrors ? (
                                <span className="small text-danger">
                                    Field can't be empty
                                </span>
                            ) : null}
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
                            {this.state.showErrors ? (
                                <span className="small text-danger">
                                    Field can't be empty
                                </span>
                            ) : null}
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
