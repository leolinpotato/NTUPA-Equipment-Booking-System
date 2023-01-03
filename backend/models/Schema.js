import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const RequestSchema = new Schema({
	date: String,
	Name: String,
	Activity: String,
	Equipment: String,
	EquipNum: Number,
	attr: String
})

const Request = mongoose.model('Request', RequestSchema);

export default Request;

