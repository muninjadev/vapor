var mongoose = require('mongoose');

// Mods Schema

var modsSchema = mongoose.Schema({
	brand:{
		type: String,
		required: true
	},
	model:{
		type: String
	},
	wattage:{
		type: String
	},
	battery:{
		type:String
	},
	description:{
		type: String
	},
	price:{
		type: String
	},
	image_url:{
		type: String
	},
	buy_url:{
		type: String
	}
});

var mods = module.exports = mongoose.model('Mods', modsSchema);

// get Mods

module.exports.getMods = function(callback, limit){
	Mods.find(callback).limit(limit);
}

// Find by id

module.exports.getModsById = function(id, callback){
	Mods.findById(id, callback);
}

// Add Mod
module.exports.addMods = function(mods,callback){
	Mods.create(mods, callback);
};

// Update Mod
module.exports.updateMods = function(id, mods, options, callback){
	var query = {_id: id};
	var update = {
		brand: mods.brand,
		model: mods.model,
		wattage: mods.wattage,
		battery: mods.battery,
		description: mods.description,
		price: mods.price,
		image_url: mods.image_url,
		buy_url: mods.buy_url
	}
	Mods.findOneAndUpdate(query, update, options, callback);
};

// Delete Mod
module.exports.removeMods = function(id ,callback){
	var query = {_id: id};
	Mods.remove(query, callback);
};