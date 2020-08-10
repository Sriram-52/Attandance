import React from 'react'
import AttendenceTable from '../Components/AttendenceTable'

function AttendenceTablePage(props) {
  return (
    <div>
      <AttendenceTable title={props.match.params.title}/>
    </div>
  )
}

export default AttendenceTablePage
