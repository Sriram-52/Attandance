import actionTypes from "./actionTypes"

export const onReq = () => ({
  type: actionTypes.TAKE_ATTENDANCE_REQ,
})

export const onSuccess = (payload) => ({
  type: actionTypes.TAKE_ATTENDANCE_SUCCESS,
  payload,
})

export const onFailure = (payload) => ({
  type: actionTypes.TAKE_ATTENDACE_FAILURE,
  payload,
})
