import React from "react";
import { Row, Col, ListGroup, Button, ButtonGroup } from "react-bootstrap";

const mealsList = props => {
    let meals = null;

    if (props.meals.length > 0) {
        meals = props.meals.map(meal => {
            return (
                <ListGroup.Item
                    key={meal.id}
                    className="d-flex justify-content-between align-items-center"
                >
                    <span>{meal.meal}</span>
                    <div className="d-inline-block">
                        <ButtonGroup aria-label="Basic example">
                            <Button data-id={meal.id} variant="secondary">
                                Edit
                            </Button>
                            <Button
                                data-id={meal.id}
                                variant="secondary"
                                onClick={() =>
                                    props.deleteMealClickHandler(meal)
                                }
                            >
                                Delete
                            </Button>
                        </ButtonGroup>
                    </div>
                </ListGroup.Item>
            );
        });
    } else {
        meals = <ListGroup.Item>Please add some meals!</ListGroup.Item>;
    }

    return (
        <Row>
            <Col md={{ span: 6, offset: 3 }}>
                <ListGroup>{meals}</ListGroup>
            </Col>
        </Row>
    );
};

export default mealsList;
