var mongoose = require('mongoose');

// Define our Schema for the DB
var WishSchema = mongoose.Schema({

	wish					      : {type : String, required: true},
	name					      : {type : String, default:"-Anonymous"},
	time 						  : { type : Date, default: Date.now },
	// empty object denotes it could change - typless property
	// empty object denotes it could change - typless property
	

});
var Wish = mongoose.model('Wish', WishSchema);
/**
 * Create a schema (blueprint) for all users in the database.
 * If you want to collect additional info, add the fields here.
 * We are setting required to true so that if the field is not
 * given, the document is not inserted. Unique will prevent
 * saving if a duplicate entry is found.
 */



var customerSchema = mongoose.Schema({

	email					      : {type : String, required:true},
	name					      : {type : String, required:true},
	time 						  : { type : Date, default: Date.now},
	phone						  : {type : Number, required:true},
	// empty object denotes it could change - typless property
	// empty object denotes it could change - typless property
	

});
var Customer = mongoose.model('Customer', customerSchema);
/**
 * Create a schema (blueprint) for all users in the database.
 * If you want to collect additional info, add the fields here.
 * We are setting required to true so that if the field is not
 * given, the document is not inserted. Unique will prevent
 * saving if a duplicate entry is found.
 */


// Being modelling the collection
module.exports = {
	Wish:Wish,
	Customer:Customer,
}