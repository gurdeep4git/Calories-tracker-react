import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import AddMeal from "../../components/AddMeal/AddMeal";
import MealsList from "../../components/MealsList/MealsList";
import TotalCalories from "../../components/TotalCalories/TotalCalories";

import { Container } from "react-bootstrap";

import * as actionTypes from "../../store/actions";

class TrackerBuilder extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <AddMeal mealActionClickHandler={this.props.selectedMeal && this.props.selectedMeal.id ? this.props.updateMeal : this.props.addMeal} selectedMeal={this.props.selectedMeal}/>
                    <hr />
                    <TotalCalories totalCalories={this.props.totalCalories} />
                    <MealsList
                        meals={this.props.meals}
                        deleteMealClickHandler={this.props.deleteMeal}
                        selectMealClickHandler={this.props.selectMeal}
                    />
                </Container>
            </Fragment>
        );
    }
}


const mapStateToProps = state => {
    return {
        meals: state.meals,
        totalCalories: state.totalCalories,
        selectedMeal: state.selectedMeal,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addMeal: newMeal =>
            dispatch({
                type: actionTypes.ADD_MEAL,
                newMeal: newMeal
            }),
        deleteMeal: selectedMeal =>
            dispatch({
                type: actionTypes.DELETE_MEAL,
                selectedMeal: selectedMeal
            }),
        selectMeal: selectedMeal =>
            dispatch({
                type: actionTypes.SELECTED_MEAL,
                selectedMeal: selectedMeal
            }),
        updateMeal: selectedMeal =>
            dispatch({
                type: actionTypes.EDIT_MEAL,
                selectedMeal: selectedMeal
            })
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TrackerBuilder);
