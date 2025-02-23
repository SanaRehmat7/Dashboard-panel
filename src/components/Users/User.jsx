import React from "react"
import data from "./data"
import "./user.css"

const User = () => {
  return (
    <>
       <section className='users grid'>
       {data.map((value, index) => {
        return (
        <div className='cardBox flexSB' key={index}>
          <div className='img'>
            <img className='imageCircle' src={value.cover} alt='' />
        </div>
        <div className='title'>
       <h3>{value.title}</h3>
        <p>{value.email}</p>
        <span>{value.user}</span>
        </div>
      </div>
    );
  })}
</section>
    </>
  )
}

export default User