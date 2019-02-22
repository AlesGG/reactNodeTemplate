'use strict';

var usersModel = require('api/users/usersModel');
var mailer = require('mailer');

exports.users_post = async (req, res) => {
	
	if (!req.body) return res.status(400).send({error: {code: 1, message: 'Body Required'}});
	if (!req.body.email) return res.status(400).send({error: {code: 2, message: 'Param email Required'}});
	if (!req.body.name) return res.status(400).send({error: {code: 3, message: 'Param name Required'}});
	if (!req.body.requestInfo) return res.status(400).send({error: {code: 4, message: 'Param requestInfo Required'}});

	let email = req.body.email;
	let name = req.body.name;
	let requestInfo = req.body.requestInfo;

	let userObject = await usersModel.user.findOne({ where: { email: email } });
	if (userObject) return res.status(400).send({error: {code: 5, message: 'Invalid User: already exists'}});

	userObject = await usersModel.user.create({
		email: email,
		name: name,
		requestedInfo: requestInfo,
		registeredAt: Date.now(),
	});

	mailer.sendMail(email, 'Activa tu cuenta', '<b>Hello world?</b>');

	res.status(201).send(userObject.get({plain: true}));
}

exports.users_auth_post = async (req, res) => {
	let userObject = await usersModel.user.findOne({ where: { email: 'johne@fullsix.com' } });
	res.status(201).send(userObject);
}

exports.users_get = (req, res) => {
	res.send({ express: 'Retrieves the user' });
}

exports.users_patch = (req, res) => {
//Person.findOne({ where: { name: 'john' } }).then(person => {
//  person.name = 'jane'
//  console.log(person.name) // 'jane'
//
//  person.reload().then(() => {
//    console.log(person.name) // 'john'
//  })
//})
	res.send({ express: 'Updates the user' });
}
