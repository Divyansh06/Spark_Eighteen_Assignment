import { UPDATE_DATA } from "./actionTypes";

export function Update_data(value, dispatch) {
  dispatch({
    type: UPDATE_DATA,
    payload: value,
  });
}
