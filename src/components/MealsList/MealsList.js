import React from "react";
import { Row, Col, ListGroup } from "react-bootstrap";

const mealsList = props => {
    const meals = props.meals.map(meal => {
        return <ListGroup.Item key={meal.id}>{meal.title}</ListGroup.Item>;
    });

    return (
        <Row>
            <Col md={{ span: 6, offset: 3 }}>
                <ListGroup>{meals}</ListGroup>
            </Col>
        </Row>
    );
};

export default mealsList;
