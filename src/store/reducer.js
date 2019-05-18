import * as actionTypes from "./actions.js";

const initialState = {
    meals: [
        { id: 1, title: "sandwich", calories: 10 },
        { id: 2, title: "burger", calories: 20 }
    ],
    totalCalories: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_MEAL:
            console.log(action.newMeal);
            return;
    }
    return state;
};

export default reducer;
