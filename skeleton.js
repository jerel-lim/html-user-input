$(document).ready(function () {

var $form = $('form')
$form.on('submit', function(e){
e.preventDefault()
var data = $(this).serializeArray()
var h1= $('h1')

var array = data.map(function(input){
  return input.value
})
console.log(array)
  })
//
//
// for (var prop in value) {
//
// h1.text(value[prop])
// }
// })













})
