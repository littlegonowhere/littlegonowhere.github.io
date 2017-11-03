$('div').hide();

$('#intro').fadeIn(1000);

$('#eat').on('click', function() {
	$('#intro').hide();
	$('#middle').fadeIn(1000);
});

$('#read').on('click', function() {
	$('#middle').hide();
	$('#note').fadeIn(1000);
});
