$(document).ready(function() {

    if (!navigator.cookieEnabled) {
    alert("Pour que l'appli fonctionne, merci d'activer vos cookies.");
    } else if (typeof Cookies.get('counter') === 'undefined' || Cookies.get('counter') === 'NaN' || Cookies.get('counter') === 'undefined') {
        Cookies.set('counter', 0, {expires: 7});
        window.location.replace("index.php");
    } else {

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