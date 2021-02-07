import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import Presentation from './Presentation'
import { onClickTakeAttendance } from "../middleware"
import { useHistory } from "react-router-dom"

function Container(props) {
  const { data, title, _on_click } = props
  const [state, setState] = useState({
    studentData: [],
    title: "",
  })

  const history = useHistory()

  useEffect(() => {
    if (state.studentData.length === 0) {
      _on_click(history, title)
    }
  }, [title])

  useEffect(() => {
    setState((state) => ({
      ...state,
      studentData: data.data,
      title: title,
    }))
  }, [data])

  const handleChange = (index, event) => {
    let studentData = this.state.studentData
    let reqStudent = studentData[index]
    reqStudent.isChecked = event.target.checked
    if (!event.target.checked) {
      reqStudent.status = "Absent"
    } else reqStudent.status = "Present"
    studentData[index] = reqStudent
    setState({ ...state, studentData })
  }

  return (
    <div>
      <Presentation {...state} handleChange={handleChange} />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.attendanceReducer,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    _on_click: (history, title) => {
      dispatch(onClickTakeAttendance(history, title))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
