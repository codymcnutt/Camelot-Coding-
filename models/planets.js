var mongoose = require("mongoose")

var planetSchema = mongoose.Schema({
	name : {type: String},
	size : {type: Number},
	xLoc : {type: Number},
	parent : {tpe: String}
})

module.exports = mongoose.model("Planet", planetSchema)