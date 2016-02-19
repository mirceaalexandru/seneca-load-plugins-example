module.exports = function (options){
  var name = 'plugin1'
  var seneca = this

  console.log('[' + name + '] start')

  function init (args, done){
    console.log('[' + name + '] start init')

    seneca.use(require('./1_1'))
    seneca.use(require('./1_2'))
    seneca.use(require('./1_3'))

    console.log('[' + name + '] end init')
    done()
  }

  seneca.add('init: ' + name, init)

  return {
    name: name
  }
}