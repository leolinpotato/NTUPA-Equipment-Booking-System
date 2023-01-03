import React from 'react'
import { useState } from "react";
import '../css/sideBar.css';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
//import Filter from './filter';
//import { MdTune, MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
	const menus = [["Equipment List", "equipmentList"], ["Search Equipment", "searchEquipment"], ["Add/Remove Equipment", "addRemoveEquipment"]
		, ["Activities Record", "activitiesRecord"]];
	const items = [
	{
		key: '1',
		label: (
			<a href='/borrow'> Borrow </a>
		),
	},
	{
		key: '2',
		label: (
		    <a href='/return'> Return </a>
		),
	}];

	return (
		<div className='sideBarContainer'>
		    <Dropdown menu={{items,}} className='sideBarRow'>
		        <a onClick={(e) => e.preventDefault()}>
		            Borrow/Return
		            <DownOutlined />
		        </a>
		      </Dropdown>
		    {
		    	menus.map((item, index) => {
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