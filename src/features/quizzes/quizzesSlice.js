import { createSlice } from "@reduxjs/toolkit";

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
            };
            state.quizzes[action.payload.id] = newQuiz;
        }
    }
})

export const selectQuizzes = state => state.quizzes.quizzes;

export const { addQuiz } = quizzesSlice.actions;

export default quizzesSlice;