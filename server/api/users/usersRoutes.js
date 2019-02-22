'use strict';

var usersController = require('api/users/usersController');

module.exports = function(router) {

	/**
	 * @swagger
	 * /users:
	 *   post:
	 *     description: Creates a user
	 *     tags:
	 *       - users
	 *     consumes:
	 *      - application/json
	 *     produces:
	 *      - application/json
	 *     parameters:
	 *       - name: user
	 *         description: The user to create
	 *         in: body
	 *         schema:
	 *           type: object
	 *           required:
	 *             - email
	 *           properties:
	 *             email:
	 *               type: string
	 *             name:
	 *               type: string
	 *             requestInfo:
	 *               type: boolean
	 *     responses:
	 *       201:
	 *         description: OK 
	 *         schema:
	 *           $ref: '#/definitions/User'
	 *       400:
	 *         description: Bad request
	 *       5XX:
	 *         description: Unexpected error
	 */
	router.route('/users')
		.post(usersController.users_post);
	
	/**
	 * @swagger
	 * /users/auth:
	 *   post:
	 *     description: Authenticate a user
	 *     tags:
	 *       - users
	 *     consumes:
	 *      - application/json
	 *     produces:
	 *      - application/json
	 *     parameters:
	 *       - name: user
	 *         description: The user to authenticate
	 *         in: body
	 *         schema:
	 *           type: object
	 *           required:
	 *             - email
	 *           properties:
	 *             email:
	 *               type: string
	 *     responses:
	 *       201:
	 *         description: OK 
	 *         schema:
	 *           $ref: '#/definitions/User'
	 *       400:
	 *         description: Bad request
	 *       5XX:
	 *         description: Unexpected error
	 */
	router.route('/users/auth')
		.post(usersController.users_auth_post);

	/**
	 * @swagger
	 * /users/{userId}:
	 *   get:
	 *     description: Retrieves the user
	 *     tags:
	 *       - users
	 *     produces:
	 *      - application/json
	 *     parameters:
	 *       - name: userId
  	 *         description: id of the user
  	 *         in: path
  	 *         required: true
  	 *         type: string
	 *     responses:
	 *       200:
	 *         description: OK
	 *         schema:
	 *           $ref: '#/definitions/User'
	 *       400:
	 *         description: Bad request
	 *       404:
	 *         description: Not found
	 *       5XX:
	 *         description: Unexpected error
	 */
	/**
	 * @swagger
	 * /users/{userId}:
	 *   patch:
	 *     description: Updates the user
	 *     tags:
	 *       - users
	 *     consumes:
	 *      - application/json
	 *     produces:
	 *      - application/json
	 *     parameters:
	 *       - name: userId
  	 *         description: id of the user
  	 *         in: path
  	 *         required: true
  	 *         type: string
	 *       - name: user
	 *         description: The user info
	 *         in: body
	 *         schema:
	 *           type: object
	 *           required:
	 *             - active
	 *           properties:
	 *             active:
	 *               type: boolean
	 *     responses:
	 *       200:
	 *         description: OK 
	 *         schema:
	 *           $ref: '#/definitions/User'
	 *       400:
	 *         description: Bad request
	 *       5XX:
	 *         description: Unexpected error
	 */
	router.route('/users/:userId')
		.get(usersController.users_get)
		.patch(usersController.users_patch);
	
};
