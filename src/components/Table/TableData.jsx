import React from "react"
import "./Table.css"
import Common from "../../common/common"
import data from "../Users/data"
import "../Users/user.css"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"

function createData(id, ProjectName, StartDate, DueDate, Status, Assign) {
  return { id, ProjectName, StartDate, DueDate, Status, Assign }
}

const rows = [createData(1, "SONA Admin v1", "01/01/2019", "26/04/2020", "Released", "Coderthemes"), 
  createData(2, "SONA Admin v1.1", "01/01/2017", "26/04/2017", "Released", "SONA admin"), 
  createData(3, "SONA Admin v1.1", "01/01/2017", "26/04/2017", "Pending", "SDHthemes"),
  createData(4, "SONA Frontend v1.1", "01/01/2017", "26/04/2017", "Assign", "SONA admin"),
  createData(5, "SONA Admin v1.3", "01/01/2017", "26/04/2017", "Assign", "Coderthemes")]

const TableData = () => {
  return (
    <>
      <section className='project'>
        <div className='user cardBox'>
          <Common title='Inbox' />
          <div className='userBox'>
      {data.map((value, index) => {
      return (
        <div className='cardBox flexSB' key={index}> 
        <div className='img'>
        <img className='imageCircle' src={value.cover} alt='' />
        </div>
        <div className='title'>
          <h3>{value.title}</h3>
          <p>{value.email}</p>
        </div>
        <div className='time'>
          <span>{value.time}</span>
        </div>
      </div>
    );
  })}
      </div>
        </div>
        <div className='table cardBox'>
          <Common title='Latest Projects' />
          <div className='tableBox'>
            <TableContainer component={Paper} sx={{ boxShadow: "none", borderRadius: "none" }}>
              <Table
                className='tableContainer'
                sx={{
                  minWidth: 650,
                  background: "#313844",
                  border: "none",
                  "& td ,th": {
                    color: "rgb(166, 171, 176)",
                    borderBottom: "1px solid rgb(86, 86, 86)",
                  },
                }}
              >
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Project Name</TableCell>
                    <TableCell>Start Date</TableCell>
                    <TableCell>Due Date</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Assign</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell component='th' scope='row'>
                        {row.id}
                      </TableCell>
                      <TableCell>{row.ProjectName}</TableCell>
                      <TableCell>{row.StartDate}</TableCell>
                      <TableCell>{row.DueDate}</TableCell>
                      <TableCell className='status'>{row.Status}</TableCell>
                      <TableCell>{row.Assign}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </section>
    </>
  )
}

export default TableData