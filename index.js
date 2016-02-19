require('seneca')({log: 'silent'})
  .use('./lib/plugin', {name: '1'})
  .use('./lib/plugin', {name: '2'})
