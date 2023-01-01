import React from 'react'
import { useState } from "react";
import '../css/sideBar.css';
//import Filter from './filter';
//import { MdTune, MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
	const items = ["Borrow/Return", "Equipment List", "Search Equipment", "Add/Remove Equipment", "Activities Record"];
	return (
		<div className='sideBarContainer'>
		    {
		    	items.map((item, index) => {
		    		return (
		    			<a href={`/${item}`} id={`row_${index}`} key={`row_${index}`}>
		    				<div className='sideBarRow'> {item} </div>
		    			</a>
		    		)
		    	})
		    }
		</div>
	)
}
export default SideBar;