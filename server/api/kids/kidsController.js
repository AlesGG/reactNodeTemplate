'use strict';

var kidsModel = require('api/kids/kidsModel');

exports.kids_post = (req, res) => {
	res.status(201).send({ express: 'Creates a users kid' });
}

exports.kids_get = (req, res) => {
	res.send({ express: 'Retrieves the users kids' });
}

exports.kids_delete = (req, res) => {
	res.status(204).send();
}

exports.kids_letter_patch = (req, res) => {
	res.send({ express: 'Updates a users kids letter' });
}

exports.kids_letter_get = (req, res) => {
	res.send({ express: 'Retrieves a users kids letter' });
}
