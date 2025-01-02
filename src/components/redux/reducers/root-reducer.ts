import { combineReducers } from "redux";
import nodesReducer from "../features/nodes/node-slice"

const rootReducer = combineReducers({
    nodes: nodesReducer,
});

export default rootReducer;