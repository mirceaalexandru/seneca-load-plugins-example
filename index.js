require('seneca')({log: 'silent'})
  .use('./lib/plugin', {name: 'a'})
