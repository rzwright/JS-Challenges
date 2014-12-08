$('#comments').hide();

$('#commentsButton').click(function(){
	$('#comments').show();
	$('#buttons').css('margin-bottom', '2.5%')
});

$('#getStartedButton').click(function(){
$('#intro').fadeOut("slow");
});

