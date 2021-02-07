import { tableData } from "../../data"
import { onReq, onSuccess, onFailure } from "../actions/actionCreators"

export const onClickTakeAttendance = (history, title) => (dispatch, getState) => {
  dispatch(onReq())
  if (tableData.length) {
    history.push(`/table/${title}`)
    return dispatch(onSuccess(tableData))
  } else {
    return dispatch(onFailure("No Data"))
  }
}
