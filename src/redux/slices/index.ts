import common from "./common";
import account from "./account";

import { combineReducers } from "redux";

const rootReducer: any = combineReducers({
  common,
  account,
});

export default rootReducer;
