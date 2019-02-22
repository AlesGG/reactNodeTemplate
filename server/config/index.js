'use strict';

var nconf = require('nconf');

nconf.defaults({
    'db_host': 'localhost',
    'db_name': 'reactNodeTemplate',
    'db_user': 'root',
    'db_pass': 'monguiroot',
    'mailer_host': null, 
    'mailer_port': null,
    'mailer_from': '',
  });

module.exports = nconf;
