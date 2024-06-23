import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { SocketProvider } from "./Socket";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<SocketProvider>
				<App />
			</SocketProvider>
		</Provider>
	</React.StrictMode>
);
