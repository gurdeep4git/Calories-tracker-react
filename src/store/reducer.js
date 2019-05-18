import * as actionTypes from "./actions.js";

const initialState = {
    meals: [],
    totalCalories: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_MEAL:
            const validateStatus = validate(action.newMeal);
            if (validateStatus) {
                const newMeals = [...state.meals];
                newMeals.push(action.newMeal);
                return {
                    ...state,
                    meals: newMeals
                };
            }
            break;

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
