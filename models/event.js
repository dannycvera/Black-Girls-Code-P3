const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Event = new Schema(
	{
		imgURL: { type: String, required: true },
		title: { type: String, required: true },
		funds: { type: Integer, required: true },
		content: { type: String, required: true },
		quote: { type: String, required: true },
		age: { type: Integer, required: true },
	},
	{ timestamps: true }
)

module.exports = mongoose.model("events", Event)
