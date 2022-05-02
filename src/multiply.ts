import {Middleware} from "redux";

const multiply: Middleware = () => next => action => {

    return next({...action, payload: action.payload * 10});
};

export default multiply