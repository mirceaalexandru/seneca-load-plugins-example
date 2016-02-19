require('seneca')({log: 'silent'})
  .use('./lib/plugin1')
  .use('./lib/plugin2')
