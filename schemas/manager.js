var mongoose = require('mongoose');
var leaveSchema = require('./leave');
var Schema = mongoose.Schema;

var connection = mongoose.createConnection('mongodb://localhost:27017/leaveManagement');

var managerSchema = new Schema({
	name: String,
	approvedLeaves: [leaveSchema.leaveSchema],
	pendingLeaves: [leaveSchema.leaveSchema],
	emailId: String,
	password: String
});

module.exports = connection.model('manager',managerSchema);