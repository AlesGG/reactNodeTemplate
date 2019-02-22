'use strict';

const Sequelize = require('sequelize');
const sequelize = require('database');

/**
 * @swagger
 * definitions:
 *   Kid:
 *     type: object
 *     required:
 *       - name
 *     properties:
 *       id:
 *         type: string
 *       name:
 *         type: string
 *       kingsSentAt:
 *         type: string
 *         format: date-time
 *         example: '2018-10-04T13:44:21.000Z'
 *       santaSentAt:
 *         type: string
 *         format: date-time
 *         example: '2018-10-04T13:44:21.000Z'
 */
/**
 * @swagger
 * definitions:
 *   Letter:
 *     type: object
 *     required:
 *       - recipient
 *     properties:
 *       recipient:
 *         type: string
 *       lat:
 *         type: number
 *         format: double
 *       long:
 *         type: number
 *         format: double
 */
const Kid = sequelize.define('kid', {
  id: { 
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  kingsSentAt: { 
    type: Sequelize.DATE 
  },
  santaSentAt: { 
    type: Sequelize.DATE 
  }
},
{
  timestamps: true
});

module.exports = {
	kid: Kid
} 
