import { configureStore } from "@reduxjs/toolkit";
import CollectionReducer from "../features/collection/collection";

export const store = configureStore({
	reducer: {
		collection: CollectionReducer,
	},
});
