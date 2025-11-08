import { createSlice } from "@reduxjs/toolkit";

const intervaloSlice = createSlice({
    name: "intervalo",
    initialState: {
        min: 0,
        max: 10
    },
    reducers: {
        setMin: (state, action) => {
            state.min = action.payload
        },
        setMax: (state, action) => {
            state.max = action.payload
        },
    },
})

export const {setMin, setMax} = intervaloSlice.actions
export default intervaloSlice.reducer