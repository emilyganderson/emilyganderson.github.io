$(document).ready(function() {


// Add jQuery here

$('.nav_tool').click(function(event){
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.tool').removeClass('hide');
  $('.item.tool').addClass('show');

  $('.nav_clear').addClass('show');
});



$('.nav_palette').click(function(event){
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.palette').removeClass('hide');
  $('.item.palette').addClass('show');

  $('.nav_clear').addClass('show');
});

$('.nav_landscape').click(function(event){
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.landscape').removeClass('hide');
  $('.item.landscape').addClass('show');

  $('.nav_clear').addClass('show');
});

$('.nav_abstract').click(function(event){
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.abstract').removeClass('hide');
  $('.item.abstract').addClass('show');

  $('.nav_clear').addClass('show');
});

$('.nav_material').click(function(event){
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.material').removeClass('hide');
  $('.item.material').addClass('show');

  $('.nav_clear').addClass('show');
});

$('.nav_space').click(function(event){
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.space').removeClass('hide');
  $('.item.space').addClass('show');

  $('.nav_clear').addClass('show');
});


$('.nav_clear').click(function(event){
$('.nav_clear').addClass('hide');
$('.nav_clear').removeClass('show');

$('.item').removeClass('hide');
});

$('.nav_thumbnail').click(function(event){
$('.item').addClass('thumbnail');
});

$('.nav_large').click(function(event){
$('.item').removeClass('thumbnail');

});








  });
