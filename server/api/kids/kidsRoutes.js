'use strict';

var kidsController = require('api/kids/kidsController');

module.exports = function(router) {

	/**
	 * @swagger
	 * /users/{userId}/kids:
	 *   post:
	 *     description: Creates a user's kid
	 *     tags:
	 *       - kids
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
	 *       - name: kid
	 *         description: The kid to create
	 *         in: body
	 *         schema:
	 *           type: object
	 *           required:
	 *             - name
	 *           properties:
	 *             name:
	 *               type: string
	 *     responses:
	 *       201:
	 *         description: created 
	 *         schema:
	 *           $ref: '#/definitions/Kid'
	 *       400:
	 *         description: Bad request
	 *       5XX:
	 *         description: Unexpected error
	 */
	/**
	 * @swagger
	 * /users/{userId}/kids:
	 *   get:
	 *     description: Retrieves the user's kids
	 *     tags:
	 *       - kids
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
	 *           type: array
	 *           items:
	 *             $ref: '#/definitions/Kid'
	 *       400:
	 *         description: Bad request
	 *       404:
	 *         description: Not found
	 *       5XX:
	 *         description: Unexpected error
	 */
	router.route('/users/:userId/kids')
		.post(kidsController.kids_post)
		.get(kidsController.kids_get); 
	/**
	 * @swagger
	 * /users/{userId}/kids/{kidId}:
	 *   get:
	 *     description: Retrieves the user's kid
	 *     tags:
	 *       - kids
	 *     produces:
	 *      - application/json
	 *     parameters:
	 *       - name: userId
  	 *         description: id of the user
  	 *         in: path
  	 *         required: true
  	 *         type: string
	 *       - name: kidId
  	 *         description: id of the user's kid
  	 *         in: path
  	 *         required: true
  	 *         type: string
	 *     responses:
	 *       200:
	 *         description: OK 
	 *         schema:
	 *           $ref: '#/definitions/Kid'
	 *       400:
	 *         description: Bad request
	 *       404:
	 *         description: Not found
	 *       5XX:
	 *         description: Unexpected error
	 */
	/**
	 * @swagger
	 * /users/{userId}/kids/{kidId}:
	 *   delete:
	 *     description: Deletes the user's kid
	 *     tags:
	 *       - kids
	 *     parameters:
	 *       - name: userId
  	 *         description: id of the user
  	 *         in: path
  	 *         required: true
  	 *         type: string
	 *       - name: kidId
  	 *         description: id of the user's kid
  	 *         in: path
  	 *         required: true
  	 *         type: string
	 *     responses:
	 *       204:
	 *         description: No content 
	 *       400:
	 *         description: Bad request
	 *       5XX:
	 *         description: Unexpected error
	 */
	router.route('/users/:userId/kids/:kidId')
		.get(kidsController.kids_get)
		.delete(kidsController.kids_delete);
	
	
  //"definitions" : {
  //  "stackoverflow" : {
  //    "type" : "object",
  //    "properties" : {
  //      "name" : {
  //        "type" : "string",
  //        "description" : "name of the object"
  //      }
  //    }
  //  },
  //  "stackoverflow2" : {
  //    "type" : "array",
  //    "items" : {
  //      "$ref" : "#/definitions/stackoverflow2_inner"
  //    }
  //  },
  //  "stackoverflow2_inner" : {
  //    "properties" : {
  //      "name" : {
  //        "type" : "string",
  //        "description" : "name of the object"
  //      }
  //    }
  //  }
  //}
	/**
	 * @swagger
	 * /users/{userId}/kids/{kidId}/letters/{recipient}:
	 *   patch:
	 *     description: Updates a user's kid's letter
	 *     tags:
	 *       - letters
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
	 *       - name: kidId
  	 *         description: id of the user's kid
  	 *         in: path
  	 *         required: true
  	 *         type: string
	 *       - name: recipient
	 *         description: The letter's recipient
	 *         in: path
  	 *         required: true
	 *         type: string
	 *         enum: [ "kings", "santa" ]
	 *     responses:
	 *       200:
	 *         description: OK 
	 *         schema:
	 *           $ref: '#/definitions/Letter'
	 *       400:
	 *         description: Bad request
	 *       5XX:
	 *         description: Unexpected error
	 */
	/**
	 * @swagger
	 * /users/{userId}/kids/{kidId}/letters/{recipient}:
	 *   get:
	 *     description: Retrieves a user's kid's letters
	 *     tags:
	 *       - letters
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
	 *       - name: kidId
  	 *         description: id of the user's kid
  	 *         in: path
  	 *         required: true
  	 *         type: string
	 *       - name: recipient
	 *         description: The letter's recipient
	 *         in: path
  	 *         required: true
	 *         type: string
	 *         enum: [ "kings", "santa" ]
	 *     responses:
	 *       200:
	 *         description: OK 
	 *         schema:
	 *           type: array
	 *           items:
	 *             $ref: '#/definitions/Letter'
	 *       400:
	 *         description: Bad request
	 *       5XX:
	 *         description: Unexpected error
	 */
	router.route('/users/:userId/kids/:kidId/letters/:recipient')
		.patch(kidsController.kids_letter_patch)
		.get(kidsController.kids_letter_get);
};
