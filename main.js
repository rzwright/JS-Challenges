$('#comments').hide();

$('#commentsButton').click(function(){
	$('#comments').show();
	$('#buttons').css('margin-bottom', '3%');
	$('#commentsButton').attr('value','Hide Comments');
});


$('#getStartedButton').click(function(){
	$('#intro').fadeOut("slow");
});

$('#submitButton').click(function(){
	$('#submitInput').val('');
	alert("thanks for your submission");

})

$('#previousButton').click(function(){
	$('#previuosContents').append('<p>Why would there be comments here?</p>');
})