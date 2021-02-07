import { combineReducers } from "redux"
import attendanceReducer from "../../Components/reducers/onClickTakeAttendance"

const rootReducer = combineReducers({
  attendanceReducer: attendanceReducer,
})

export default rootReducer
