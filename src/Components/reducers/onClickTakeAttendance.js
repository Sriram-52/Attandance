import actionTypes from "../../Components/actions/actionTypes"

const initState = {
  data: [],
  isLoading: false,
  error: null,
}

const onClickTakeAttendance = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.TAKE_ATTENDANCE_REQ:
      return {
        ...state,
        isLoading: true,
      }

    case actionTypes.TAKE_ATTENDANCE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }

    case actionTypes.TAKE_ATTENDACE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }

    default:
      return state
  }
}

export default onClickTakeAttendance
