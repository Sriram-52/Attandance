import React, { Component } from 'react'
import { tableData } from '../../data'
import Presentation from './Presentation'

class Container extends Component {
  state = {
    studentData: tableData,
    title: ''
  }

  componentDidMount = () => {
    const title = this.props.title
    this.setState({ title })
  }

  handleChange = (index, event) => {
    let studentData = this.state.studentData
    let reqStudent = studentData[index]
    reqStudent.isChecked = event.target.checked
    if(!event.target.checked) {
      reqStudent.status = 'Absent'
    } else reqStudent.status = 'Present'
    studentData[index] = reqStudent
    this.setState({ studentData })
  }

  render() {
    return (
      <div>
        <Presentation {...this.state} handleChange={this.handleChange} />
      </div>
    )
  }
}

export default Container
