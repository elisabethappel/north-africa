$('.name').on('click', function() {
  var flagUrl = $(this).attr('country-flag')
  console.log(flagUrl)
  $('#flag').empty()
  $('#flag').css('background-image', `url(${flagUrl})`)
})

$('.name-2').on('click', function() {
  var flagUrl = $(this).attr('country-flag')
  console.log(flagUrl)
  $('#flag').empty()

  $('#flag').css('background-image', `url(${flagUrl})`)
})


$('#egypt').hover(function() {
  $('.description').text('Cairo');
}, function() {
  $('.description').empty();
});

$('#tunisia').hover(function() {
  $('.description').text('Tunis');
}, function() {
  $('.description').empty();
});

$('#morocco').hover(function() {
  $('.description').text('Rabat');
}, function() {
  $('.description').empty();
});

$('#algeria').hover(function() {
  $('.description').text('Algiers');
}, function() {
  $('.description').empty();
});

$('#libya').hover(function() {
  $('.description').text('Tripoli');
}, function() {
  $('.description').empty();
});

$('#sudan').hover(function() {
  $('.description').text('Khartoum');
}, function() {
  $('.description').empty();
});

$('#sadr').hover(function() {
  $('.description').text('El Aaiún');
}, function() {
  $('.description').empty();
});
