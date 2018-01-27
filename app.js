var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());


Mods = require('./models/mods');
Eliquids = require('./models/eliquids');

// Connect to mongoose
mongoose.connect('mongodb://localhost/vaperstore');
var db = mongoose.connection;

app.get('/', function(req, res){
	res.send('Please use /api/vape');
});

// ler mods
app.get('/api/mods', function(req, res){
	Mods.getMods(function(err, mods){
		if(err){
			throw err;
		}
		res.json(mods);
	});
});


// adicionar mod
app.post('/api/mods', function(req, res){
	var mods = req.body;
	Mods.addMods(mods, function(err, mods){
		if(err){
			throw err;
		}
		res.json(mods);
	});
});

// ler eliquids
app.get('/api/eliquids', function(req, res){
	Eliquids.getEliquids(function(err, eliquids){
		if(err){
			throw err;
		}
		res.json(eliquids);
	});
});

//adicionar eliquids
app.post('/api/eliquids', function(req, res){
	var eliquids = req.body;
	Eliquids.addEliquids(eliquids, function(err, eliquids){
		if(err){
			throw err;
		}
		res.json(eliquids);
	});
});

// ler mods por id
app.get('/api/mods/:_id', function(req, res){
	Mods.getModsById(req.params._id, function(err, mods){
		if(err){
			throw err;
		}
		res.json(mods);
	});
});

//ler eliqudis por id
app.get('/api/eliquids/:_id', function(req, res){
	Eliquids.getEliquidsById(req.params._id, function(err, eliquids){
		if(err){
			throw err;
		}
		res.json(eliquids);
	});
});

// update mods
app.put('/api/mods/:_id', function(req, res){
	var id = req.params._id;
	var mods = req.body;
	Mods.updateMods(id, mods,{}, function(err, mods){
		if(err){
			throw err;
		}
		res.json(mods);
	});
});

// update eliquids
app.put('/api/eliquids/:_id', function(req, res){
	var id = req.params._id;
	var eliquids = req.body;
	Eliquids.updateEliquids(id, eliquids,{}, function(err, eliquids){
		if(err){
			throw err;
		}
		res.json(eliquids);
	});
});

// delete mods
app.delete('/api/mods/:_id', function(req, res){
	var id = req.params._id;
	Mods.removeMods(id, function(err, mods){
		if(err){
			throw err;
		}
		res.json(mods);
	});
});

// delete eliquids
app.delete('/api/eliquids/:_id', function(req, res){
	var id = req.params._id;
	Eliquids.removeEliquids(id, function(err, eliquids){
		if(err){
			throw err;
		}
		res.json(eliquids);
	});
});



app.listen(3000);
console.log('Listen on port 3000 ...');