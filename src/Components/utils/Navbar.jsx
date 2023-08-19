import React from 'react'
import Dropdown from './Dropdown'

import "./Navbar.css"

const Navbar = ({orderingState, setOrderingState, groupingState, setGroupingState}) => {
  return (
    <div className='navbar'>
      <Dropdown orderingState={orderingState} setOrderingState={setOrderingState} groupingState={groupingState} setGroupingState={setGroupingState}/>
    </div>
  )
}

export default Navbar