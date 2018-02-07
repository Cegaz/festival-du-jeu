$(document).ready(function() {

    if (!navigator.cookieEnabled) {
        alert("Pour que l'appli fonctionne, merci d'activer vos cookies.");
    } else {

        $(document).keypress(function(e) {
            e.preventDefault();

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

            if(e.ctrlKey == true) { // touche ctrl

                if(e.which == 111) { // touche o (la lettre)
                    // remet le compteur à zéro

                    $.get(
                        "init_counter.php",
                        false,
                        function(data) {
                            $("#counter").replaceWith("<span id='counter'>"+data+"</span>");
                        },
                        'text'
                    );

                } else if (e.which == 13) { // touche entrée
                    // permet d'entrer un compte manuellement

                    var promptVal = prompt('nouvelle valeur du compteur :', 'ici');

                    $.post(
                        "set_counter.php",
                        {
                            newCount : promptVal
                        },
                        function(data) {
                            console.log(data);
                            $("#counter").replaceWith("<span id='counter'>"+data+"</span>");
                        },
                        'text'
                    );

                }
            } else if (e.which == 8) { // touche retour arrière
             // revient à la dernière valeur sauvegardée (avant retour à zéro, donc)

                $.get("cancel_init_counter.php",
                    false,
                    function(data) {
                        $("#counter").replaceWith("<span id='counter'>"+data+"</span>");
                    },
                    'text'
                );

            } else {
            // +1 au compteur

                $.get(
                    "increment.php",
                    false,
                    function(data) {
                        $("#counter").replaceWith("<span id='counter'>"+data+"</span>");
                    },
                    'text'
                );
            }
        });

        setInterval(function(){
            $.get(
                "save_stats.php",
            );
        }, 1000 * 3600/2); // en millisecondes
    }
});