import ReactDOM from "react-dom/client";
import App from "./app";
import {Provider} from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.querySelector('#root') as HTMLElement);

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
)