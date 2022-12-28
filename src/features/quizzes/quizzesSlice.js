import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addTopic } from "../topics/topicsSlice";
import { addQuizToTopic } from "../topics/topicsSlice";

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes:{}
    },
    reducers: {
        addQuiz: (state, action) => {
            const newQuiz = {
                id: action.payload.id,
                name: action.payload.name,
                topicId: action.payload.topicId,
                cardIds: []
            }
            state.quizzes[action.payload.id] = newQuiz;
        }
    }
})

export const addQuizAndPushToTopic = (payload) => {
    const { name, id, topicId, cardIds } = payload;
    return (dispatch) => {
        dispatch(quizzesSlice.actions.addQuiz(payload));
        dispatch(addQuizToTopic({ quizId: id, topicId: topicId}));
    }
}

export const { addQuiz } = quizzesSlice.actions;

export const selectQuizzes = state => state.quizzes.quizzes;

export default quizzesSlice.reducer;