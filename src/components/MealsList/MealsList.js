import React from "react";
import { Row, Col, ListGroup } from "react-bootstrap";

const mealsList = props => {
    let meals = null;

    if (props.meals.length > 0) {
        meals = props.meals.map(meal => {
            return (
                <ListGroup.Item key={meal.id} data-id={meal.id}>
                    {meal.meal}
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
