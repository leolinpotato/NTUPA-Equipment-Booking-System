import React from 'react'
import { useState } from "react";
import '../css/sideBar.css';
//import Filter from './filter';
//import { MdTune, MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
	const items = [["Borrow/Return", "borrowReturn"], ["Equipment List", "equipmentList"], ["Search Equipment", "searchEquipment"], ["Add/Remove Equipment", "addRemoveEquipment"]
		, ["Activities Record", "activitiesRecord"]];
	return (
		<div className='sideBarContainer'>
		    {
		    	items.map((item, index) => {
		    		return (
		    			<a href={`/${item[1]}`} id={`row_${index}`} key={`row_${index}`}>
		    				<div className='sideBarRow'> {item[0]} </div>
		    			</a>
		    		)
		    	})
		    }
		</div>
	)
}
export default SideBar;