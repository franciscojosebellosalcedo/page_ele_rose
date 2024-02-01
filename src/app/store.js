import { configureStore } from "@reduxjs/toolkit";
import CollectionReducer from "../features/collection/collection";
import CategoryReducer from "../features/category/category";
import ProductReducer from "../features/product/product";
import TokenReducer from "../features/token/token";
import QualificationReducer from "../features/qualification/qualification";

export const store = configureStore({
	reducer: {
		collection: CollectionReducer,
		category: CategoryReducer,
		product: ProductReducer,
		token: TokenReducer,
		qualification: QualificationReducer,
	},
});
