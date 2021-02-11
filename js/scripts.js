$('.name').hover(function() {
  var flagUrl = $(this).attr('data-country-flag')
  console.log(flagUrl)
  $('#flag').empty()
  $('#flag').css('background-image', `url(${flagUrl})`)
})

$('.name').click(function() {
  var capital = $(this).attr('data-capital')
  console.log(capital)
  $('.description').text(capital);
});
