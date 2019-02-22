'use strict';

const Sequelize = require('sequelize');
const sequelize = require('database');

/**
 * @swagger
 * definitions:
 *   User:
 *     type: object
 *     required:
 *       - id
 *       - email
 *     properties:
 *       id:
 *         type: string
 *       email:
 *         type: string
 *         format: email
 *       name:
 *         type: string
 *       requestedInfo:
 *         type: boolean
 *       registeredAt:
 *         type: string
 *         format: date-time
 *         example: '2018-10-04T13:44:21.000Z'
 *       activatedAt:
 *         type: string
 *         format: date-time
 *         example: '2018-10-04T13:44:21.000Z'
 */
const User = sequelize.define('user', {
  id: { 
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  requestedInfo: { 
    type: Sequelize.BOOLEAN, 
    allowNull: false
  },
  registeredAt: { 
    type: Sequelize.DATE,
    allowNull: false
  },
  activatedAt: { 
    type: Sequelize.DATE
  },
},
{
  timestamps: false
});


// force: true will drop the table if it already exists
//User.sync({force: true}).then(() => {
//  // Table created
//  return User.create({
//    name: 'John',
//    email: 'john@fullsix.com',
//    requestedInfoAt: Date.now()
//  });
//});

module.exports = {
	user: User
} 
