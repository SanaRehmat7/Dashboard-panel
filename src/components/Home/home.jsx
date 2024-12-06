import React from "react"
import Cards from "../cards/cards"
import Charts from "../charts/charts"
import TableData from "../Table/TableData"
import User from "../Users/User"
const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='container'>
          <div className='heading flexSB'>
            <h3>DashBoard</h3>
            <span>S.REH / DashBoard</span>
          </div>
          <Cards />
          <Charts />
          <User />
          <TableData />
        </div>
      </section>
    </>
  )
}

export default Home