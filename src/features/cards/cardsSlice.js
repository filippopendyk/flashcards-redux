import { createSlice } from "@reduxjs/toolkit";

const cardsSlice = {
    name: 'cards',
    initialState: {
        cards: {}
    },
    reducers: {
        addCard: (state,action) => {
            const newCard = {
                id: action.payload.id,
                front: action.payload.front,
                back: action.payload.back
            }
            state.cards[action.payload.id] = newCard;
        }
    }
}

export const { addCard } = state => state.cards.actions;

export default cardsSlice.reducer;