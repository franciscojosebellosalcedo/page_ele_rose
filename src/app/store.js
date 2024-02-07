import { configureStore } from "@reduxjs/toolkit";
import CollectionReducer from "../features/collection/collection";
import CategoryReducer from "../features/category/category";
import ProductReducer from "../features/product/product";
import QualificationReducer from "../features/qualification/qualification";
import UserReducer from "../features/user/user";
import CartReducer from "../features/cart/cart";

export const store = configureStore({
	reducer: {
		collection: CollectionReducer,
		category: CategoryReducer,
		product: ProductReducer,
		qualification: QualificationReducer,
		user: UserReducer,
		cart: CartReducer,
	},
});
