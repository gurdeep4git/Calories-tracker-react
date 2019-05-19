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
            const validateStatus = validate(action.newMeal);
            if (validateStatus) {
                const newMeals = [...state.meals];
                newMeals.push(action.newMeal);

                const totalCalories =
                    state.totalCalories + parseInt(action.newMeal.calories);

                return {
                    ...state,
                    meals: newMeals,
                    totalCalories: totalCalories
                };
            }
            break;

        case actionTypes.DELETE_MEAL:
            const remainingMeals = state.meals.filter((meal, _i) => {
                return meal.id !== action.selectedMeal.id;
            });

            const totalCalories =
                state.totalCalories - parseInt(action.selectedMeal.calories);

            return {
                ...state,
                meals: remainingMeals,
                totalCalories: totalCalories
            };

        default:
            return state;
    }
};

const validate = newMeal => {
    let status = true;
    if (
        newMeal.meal === null ||
        newMeal.meal === undefined ||
        newMeal.meal === ""
    ) {
        status = false;
    }
    if (
        newMeal.calories === null ||
        newMeal.calories === undefined ||
        newMeal.calories === "" ||
        newMeal.calories === 0
    ) {
        status = false;
    }
    return status;
};

export default reducer;
