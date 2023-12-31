import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { EventSchema } from "./types";
import { createEvent } from "./createEvent";

const initialState: EventSchema = {
    id: "",
    selectedDay: null,
    name: "",
    dateTime: "",
    isDone: false,
    price: 200,
    isOpen: false,
    error: "",
    isLoading: false,
    events: [],
};

export const eventSlice = createSlice({
    name: "event",
    initialState,
    reducers: {
        // setEvent: (state, action: PayloadAction<string>) => {
        //     // state = action.payload;
        // },
        setSelectedDay: (state, action: PayloadAction<string>) => {
            state.selectedDay = action.payload;
            state.isOpen = true;
        },
        setCloseModal: (state) => {
            state.isOpen = false;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(createEvent.pending, (state, action) => {
            state.error = undefined;
            state.isLoading = true;
            action.payload && state.events.push(action.payload);
        });
    },
});

export const { actions: eventAction } = eventSlice;
export const { reducer: eventReducer } = eventSlice;
