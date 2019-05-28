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
            action.newMeal.id = getId();
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

            case actionTypes.EDIT_MEAL: {
            const addedMeals = [...state.meals];
            let totalCalories = 0;
            addedMeals.forEach((meal, _i) => {
                if(meal.id === action.selectedMeal.id){
                    meal.meal = action.selectedMeal.meal;
                    meal.calories = action.selectedMeal.calories;
                }
                totalCalories =totalCalories + parseInt(meal.calories);
            });

            return {
                ...state,
                meals: addedMeals,
                selectedMeal: {},
                totalCalories,
            };
        }
        case actionTypes.SELECTED_MEAL: {
        return {
            ...state,
            selectedMeal: action.selectedMeal,
        };
    }
        default:
            return state;
    }
};

const getId = () => {
    return Math.random()
        .toString(36)
        .substr(2, 9);
};

export default reducer;
