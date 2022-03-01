function toggleMenu() {
    $('#menu').toggle();
}

function resetCounter() {
    if (confirm('On remet vraiment le compteur à zéro ?')) {

        $.get(
            "init_counter.php",
            false,
            function(data) {
                $("#counter").replaceWith("<span id='counter'>"+data+"</span>");
                $('#menu').hide();
            },
            'text'
        );        
    } else {
        $('#menu').hide();        
    }

}

function setCounter() {
    var promptVal = prompt('nouvelle valeur du compteur :', 'ici');

    $.post(
        "set_counter.php",
        {
            newCount : promptVal
        },
        function(data) {
            $("#counter").replaceWith("<span id='counter'>"+data+"</span>");
            $('#menu').hide();
        },
        'text'
    );

}


$(document).ready(function() {

    if (!navigator.cookieEnabled) {
        alert("Pour que l'appli fonctionne, merci d'activer vos cookies.");
    } else {

        $(document).keypress(function(e) {
            e.preventDefault();

            $('#menu').hide();

            var counter = parseInt($('#counter').text()) + 1;

            function removeClassPyro() {
                $('body').removeClass('pyro');
            }

            function removeClassBlink() {
                $('body').removeClass('blink');
            }


            //feu d'artifice tous les multiples de 100
            if(counter % 100 == 0 && counter != 0) {
                $('body').addClass('pyro');
                setTimeout(removeClassPyro, 8000); // dure 5 secondes
            }

            // scintille tous les multiples de 10
            else if(counter % 10 == 0 & counter != 0) {
                $('body').addClass("blink");
            } else {
                setTimeout(removeClassBlink, 5000);
            }


            // +1 au compteur
            $.get(
                "increment.php",
                false,
                function(data) {
                    $("#counter").replaceWith("<span id='counter'>"+data+"</span>");
                },
                'text'
            );
        
        });

        setInterval(function(){
            $.get(
                "save_stats.php",
            );
        }, 1000 * 3600/2); // en millisecondes
    }
});