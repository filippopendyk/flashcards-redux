import { createSlice } from "@reduxjs/toolkit";

const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            const newTopic = {
                id: action.payload.id,
                name: action.payload.name,
                icon: action.payload.icon,
                quizIds: []
            };
            state.topics[action.payload.id] = newTopic;
        },
        addQuizToTopic: (state, action) => {
            state.topics[action.payload.topicId].quizIds.push(action.payload.quizId);
        }
    }
})

export const selectTopics = state => state.topics.topics;

export const { addTopic, addQuizToTopic } = topicsSlice.actions;

export default topicsSlice.reducer;
