$(document).ready(function() {

    if (!navigator.cookieEnabled) {
        alert("Pour que l'appli fonctionne, merci d'activer vos cookies.");
    } else {

        $(document).keypress(function(e) {
            e.preventDefault();

            var counter = $('#counter').text();

            // feu d'artifice tous les multiples de 20 (décalage de 1 entre affichage et cookie)
            /*if(counter % 20 == 1 && counter != 0) {
                $('h1').addClass('thousand');
                firework();
            }*/
            // scintille tous les multiples de 10
            if(counter % 10 == 9 & counter != 0) {
                document.getElementById("body").className="blink";
            }

            if(e.ctrlKey == true) { // touche ctrl

                if(e.which == 105) { // touche i
                    // affiche les stats
                    window.location.replace("stats.php");

                } else if (e.which == 111) { // touche o (la lettre)
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

                    /*$.post(
                        "manual_counter.php",
                        {
                            count : prompt('nouvelle valeur du compteur :', 'ici');
                        },
                        function(data) {
                            $("#counter").replaceWith("<span id='counter'>"+data+"</span>");
                        },
                        'text'
                    );*/

                }
            } else if (e.which == 8) { // touche retour arrière
             // revient à la dernière valeur sauvegardée (avant retour à zéro, donc)


            } else {
            // +1 au compteur

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
    }
});