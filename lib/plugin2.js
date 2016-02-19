module.exports = function (options){
  var name = 'plugin2'
  var seneca = this

  console.log('[' + name + '] start')

  function init (args, done){
    console.log('[' + name + '] start init')

    seneca.act('some: pattern1', function(err, result){
      console.log('[' + name + '] pattern1 success')
    })

    console.log('[' + name + '] end init')
    done()
  }

  seneca.add('init: ' + name, init)

  return {
    name: name
  }
}