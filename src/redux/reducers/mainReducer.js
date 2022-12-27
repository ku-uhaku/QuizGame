import quizAnime from "../../data";
const mainReducer = (state = quizAnime, action) => {
    switch (action.type) {
        case "SCORE":
            return {
                ...state,
                score: action.payload,
            };

        default:
            return state;
    }
};

export default mainReducer;
