import * as actionTypes from "./actions.js";

const initialState = {
    meals: [
        //{ id: 1, meal: "burger", calories: 300 }
    ],
    totalCalories: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_MEAL:
            const newMeals = [...state.meals];
            newMeals.push(action.newMeal);

            const addedCalories =
                state.totalCalories + parseInt(action.newMeal.calories);

            return {
                ...state,
                meals: newMeals,
                totalCalories: addedCalories
            };

        case actionTypes.DELETE_MEAL:
            const remainingMeals = state.meals.filter((meal, _i) => {
                return meal.id !== action.selectedMeal.id;
            });

            const diffCalories =
                state.totalCalories - parseInt(action.selectedMeal.calories);

            return {
                ...state,
                meals: remainingMeals,
                totalCalories: diffCalories
            };

        default:
            return state;
    }
};

export default reducer;
