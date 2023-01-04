import React from 'react'
import { useState } from 'react'
import axios from '../api'
//import '../css/mainPage.css'

const EquipmentListPage = () => {
	const [ Name, setName ] = useState('');
	const [ Equipment, setEquip ] = useState('');
	const [ EquipNum, setNum ] = useState(0);
	const [ Activity, setAct ] = useState('');
	const [ Display, setDisplay ] = useState([]);
	const [ attr, setAttr ] = useState('');
	const [ img, setImg ] = useState('');

	const handleChange = (st) => (e) => {
		st(e.target.value);
	}

	const send = async () => {
		if(!(Name && EquipNum && Equipment && Activity)) console.log('not good');
		else{
			const { data: { message } } = await axios.post('/reqHandle', {
				Name,
				Equipment,
				EquipNum,
				Activity
			});
			alert('success');
		}
	}

	const search = async () => {
		const { data } = await axios.get('/reqHandle', { params: {
			Name:(Name) ? Name : null,
			Equipment:(Equipment) ? Equipment : null,
			EquipNum:(EquipNum) ? EquipNum : null,
			Activity:(Activity) ? Activity : null
		}});
		console.log(data);
		setDisplay(data);
	}

	const newAttr = async () => {
		if(Equipment && attr && img){
			const { data: { message }} = await axios.post('/attr', {
				equip: Equipment,
				attr,
				img
			})
			alert('new attr');
		}
	}

    return (
        <div className='equipmentListPageContainer'>
			<input placeholder="name"  onChange={handleChange(setName)}></input>
			<input placeholder="equip" onChange={handleChange(setEquip)}></input>
			<input placeholder="num"   onChange={handleChange(setNum)}></input>
			<input placeholder="act"   onChange={handleChange(setAct)}></input>
			<input placeholder="attr"   onChange={handleChange(setAttr)}></input>
			<input placeholder='img' onChange={handleChange(setImg)}></input>
			<div>
				<button onClick={send}>   send   </button> 
				<button onClick={search}> search </button> 
				<button onClick={newAttr}>   attr   </button> 
			</div>
            <h2>Equipments list</h2> { Display.map((element, id) => (
				<p>{element.Name} {element.Equipment} {element.EquipNum} {element.Activity} {element.date}</p>
			))}
        </div>
    )
}
export default EquipmentListPage
