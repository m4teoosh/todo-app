import React from 'react'
import styles from '../App.css'
const Task = (props) => {
  return (
    <div className='Task'>
        {props.name}
    </div>
  )
}

export default Task