// check off specific todo by clicking
$("ul").on("click", "li", function () {
	$(this).toggleClass("completed");
});

// click on X to delete todo
$("ul").on("click", "span", function (event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function (event) {
	if (event.which === 13) {
		var text = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash'></i></span> " + text + "</li>");
	}
});

$(".fa-pencil-alt").click(function () {
	$("input[type='text']").fadeToggle();
});