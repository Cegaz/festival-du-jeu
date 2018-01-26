$(document).ready(function() {

    $(document).keypress(function(e) {
        e.preventDefault();

        if (e.which == 13) { // entrée

            $.get(
                "add_to_counter.php",
                false,
                function(data) {
                    $("#counter").replaceWith("<span id='counter'>"+data+"</span>");
                },
                'text'
            );
        }
    });
});