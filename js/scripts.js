$('.name').hover(function() {
  var flagUrl = $(this).attr('data-country-flag')
  console.log(flagUrl)
  $('.description').text("Click a Country")
  $('#flag').css('background-image', `url(${flagUrl})`)
})

$('.name').click(function() {
  var capital = $(this).attr('data-capital')
  console.log(capital)
  $('.description').text(capital);
});
