module.exports = function (options){
  var name = '1.1'
  var seneca = this

  console.log('[' + name + '] start')

  function init (args, done){
    console.log('[' + name + '] start init')

    seneca.add('some: pattern1', function(args, done){
      done()
    })

    console.log('[' + name + '] end init')
    done()
  }

  seneca.add('init: ' + name, init)

  return {
    name: name
  }
}