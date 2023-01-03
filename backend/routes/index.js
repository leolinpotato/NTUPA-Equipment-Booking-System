import {Router} from 'express';
import Request from '../models/Schema'
const router = Router();

router.get('/reqHandle', async (req, res) => {
	console.log(req.body);
	const dt = await Request.find(req.body);
	const ret = []
	for(let i of dt){
		ret.push({name:i.Name, equipment:i.Equipment, date:i.date, equipNum:i.EquipNum, Activity:i.Activity});
	}
	res.json(ret);
})

//list.sort((a, b) => (a.$(arg) > b.$(arg)) ? 1 : -1);

router.post('/reqHandle', async (req, res) => {
	const Name = req.body.Name;
	const Equipment = req.body.Equipment;
	const EquipNum = req.body.EquipNum;
	const Activity = req.body.Activity;
	const date = new Date().toLocaleString();
	const newdt = new Request({date, Name, Activity, EquipNum, Equipment});
	await newdt.save();
})

//router.delete('/debug', async (req, res) => {
//    await Request.deleteMany({});
//})

export default router;
