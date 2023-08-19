import React from 'react'
import { useState } from 'react';
import "./Dropdown.css"
import downArrow from "../../Assets/images/down_arrow.png"

const DropdownItem = ({state,setDropdownOptionState,setOtherDropdownState, options, title,dropDownState,setDropdownState}) => {
    return (
        <div className='dropdown-item'>
            <p >{title}</p>
            <div>
                <div className='inner-option-container' onClick={() => {
                        setDropdownState(!dropDownState);
                        setOtherDropdownState(false);
                    }}>
                    <p>{state}</p>
                    <img src={downArrow} className='inner-down-arrow '/>
                </div>
                <div className={`inner-dropdown-menu ${dropDownState? 'active' : 'inactive'}`}>
                    <ul className='inner-dropdown-menu-container'>
                        {options.map((option) => {
                            return (
                                <h1 onClick={() => setDropdownOptionState(option)}>{option}</h1>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

const Dropdown = ({orderingState, setOrderingState, groupingState, setGroupingState}) => {
const [dropDownState, setDropdownState] = useState(false);
const [dropDownState1, setDropdownState1] = useState(false);
const [dropDownState3, setDropdownState3] = useState(false);

const groupingOptions = ['Status','User','Priority'];
const orderingOptions = ['Priority', 'Title']
return (
    <div className='menu-container'>
        <div className='menu-trigger' onClick={() => {
            setDropdownState(!dropDownState);
            setDropdownState1(false);
            setDropdownState3(false);
            }}>
            <p>Display</p>
            <img src={downArrow} className='down-arrow' />
        </div>
        <div className={`dropdown-menu ${dropDownState? 'active' : 'inactive'}`}>
            <ul className='dropdown-menu-container'>
                <DropdownItem state={groupingState} setDropdownOptionState={setGroupingState} setOtherDropdownState={setDropdownState3} options={groupingOptions} title={"Grouping"} dropDownState={dropDownState1} setDropdownState={setDropdownState1}/>
                <DropdownItem state={orderingState} setDropdownOptionState={setOrderingState} setOtherDropdownState={setDropdownState1} options={orderingOptions} title={"Ordering"} dropDownState={dropDownState3} setDropdownState={setDropdownState3}/>
            </ul>
        </div>
    </div>
  )
}

export default Dropdown