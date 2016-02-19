module.exports = function (options){
  var name = options.name
  var seneca = this

  console.log('[' + name + '] start')

  function init (args, done){
    console.log('[' + name + '] start init')

    console.log('[' + name + '] try to load another plugin')
    seneca.use(require('./another_plugin'), {name: name + '.2'})
    console.log('[' + name + '] loaded another plugin')

    seneca.add('some: pattern1', function(){})
    seneca.add('some: pattern2', function(){})
    seneca.add('some: pattern3', function(){})
    seneca.add('some: pattern4', function(){})

    console.log('[' + name + '] end init')
    done()
  }

  seneca.add('init: ' + name, init)

  return {
    name: name
  }
}