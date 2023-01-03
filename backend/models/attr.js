import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const attrSchema = new Schema({
	attr: String,
	equip: String,
})

const attr = mongoose.model('attr', attrSchema);

export default attr;


