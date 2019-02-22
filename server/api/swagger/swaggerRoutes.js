'use strict';
module.exports = function(app) {
const options = {
  swaggerDefinition: {
    info: {
      title: 'REST - Iluscopio',
      version: '1.0.0',
      description: 'REST API doc',
      contact: {
        email: 'contact@fullsix.com'
      }
    },
    tags: [
      {
        name: 'users',
        description: 'Users API'
      },
      {
        name: 'kids',
        description: 'Kids API'
      },
      {
        name: 'letters',
        description: 'Letters API'
      }
    ],
    schemes: ['http'],
    host: 'localhost:8202',
    basePath: '/api/'
  },
  apis: ['./api/**/*.js']
};

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = swaggerJSDoc(options);
//require('swagger-model-validator')(swaggerSpec)

app.route('/json').get(
 (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//function validateModel (name, model) {
//  const responseValidation = swaggerSpec.validateModel(name, model, false, true)
//  if (!responseValidation.valid) {
//    console.error(responseValidation.errors)
//    throw new Error(`Model doesn't match Swagger contract`)
//  }
//}
};
