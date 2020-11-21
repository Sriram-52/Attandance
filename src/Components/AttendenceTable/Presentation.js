import React from 'react'
import MaterialTable from 'material-table'
import { Checkbox, Paper } from '@material-ui/core'

function AttedenceTable(props) {
  const { handleChange, studentData, title } = props

  let columns = [
    {
      title: 'Reg No',
      field: 'regNo',
      render: (rowData) => <span>{rowData.regNo}</span>,
      width: 'auto',
    },
    {
      title: 'Name of Student',
      field: 'name',
      render: (rowData) => <span>{rowData.name}</span>,
      width: 'auto',
    },
    {
      title: 'Status',
      field: 'status',
      render: (rowData) => <span>{rowData.status}</span>,
    },
    {
      title: 'Actions',
      field: 'actions',
      render: (rowData) => (
        <span>
          <Checkbox
            checked={rowData.isChecked}
            onChange={(event) => handleChange(rowData.index, event)}
            inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
          />
        </span>
      ),
      width: 'auto',
    },
  ]

  let data = []

  studentData &&
    studentData.forEach((student, index) => {
      data.push({
        regNo: student.regNo,
        name: student.name,
        status: student.status,
        isChecked: student.isChecked,
        index: index,
      })
    })

  return (
    <div style={{ margin: "20px", width: "auto" }}>
      <Paper>
        <MaterialTable
          title={`${title}_${new Date()}`}
          data={data}
          columns={columns}
          options={{
            pageSize: 20,
            paginationType: "stepped",
            exportButton: true,
          }}
        />
      </Paper>
    </div>
  )
}

export default AttedenceTable
