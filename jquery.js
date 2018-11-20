

$.fn.grille = function(array) {

    // crée une grille par rapport a la taille demander par le joueur
    // creates a grid based on the size requested by the player
    for (var u = 0; u < array['valueY']; u++) {
        $('#jeu').append('<tr id="ligne' + u + '"></tr>');
      
        for (var i = 0; i < array['valueX']; i++) {
            
                $('#ligne' + u).append('<td class="column' + i + '" data-ref="'+ i +'-'+ u +'"></td>');
        }
    }
    var e = array['valueY'];
    while ( e != 0 ) {
    e--;
    }

}  


function checkClass(path) {
    // vérifie si une des classe existe déjà
    // check if one of the classes already exists
    let classes = ["red-token", "golden-token", "dark-blue-token", "blue-token", "green-token" ,"purple-token"];
    for (let i = 0; i < classes.length; i++) {
        if (path.hasClass(classes[i])) {
            return true;
        }
    }
    return false;
}
 $(document).ready(function () {

var turn = 1;
var player1;
var player2;
    // animation de la page d'accueil
    // animation of the home page
    $('#interieur').hide();
     $('body').on("click", function () {
        $('#separa_haut').slideUp(1000);
         $('#interieur').slideDown(1000);
        $('#separa_bas').delay(1000).fadeOut(500);
         $('#').play();
    });
    // affiche/cache les critere des pion et de la grille  
    // show/hide criteria for pawn and grid
    $('#affiche').hide();
    $('#afficheC').hide();
    $('#envoie').on("click", function() {
    $('#affiche').show();
    $('#envoie').hide();
    $('#lab').hide();
    $('.grille').hide();
    $('table').children().remove()
    $('body').grille({
    "valueX" : $('#valueX').val(),
    "valueY" : $('#valueY').val()
    
        }); 
    }); 
     $('#color').on("click", function () {
         // vérifié que les 2 joueurs non pas la même couleur
         // checked that the 2 players not the same color
         if ($('#colorJ1').val() != $('#colorJ2').val()) {
        player1 = $('#colorJ1').val();
        couleur1 = $('#colorJ1').val();
        // console.log(player1);
        player2 = $('#colorJ2').val();
        couleur2 = $('#colorJ2').val();
        //  console.log(player2);
         $('table').children().remove();
         $('#afficheC').show();
             $('.color').hide();
             $('#labColor').hide();
             $('#labColor2').hide();
             $('#color').hide();
         $('body').grille({
             "valueX": $('#valueX').val(),
             "valueY": $('#valueY').val()
    
        }); 
             
        }
        else {
            alert("vous ne pouvez pas choisir la meme couleur pour les deux joueurs, veuillez changer s\'il vous plait")
        }
     });

    $('#affiche').on("click", function () {
         $('#affiche').hide();
         $('#envoie').show();
         $('#lab').show();
         $('.grille').show();
     })
    $('#afficheC').on("click", function () {
        
        $('#afficheC').hide();
        $('.color').show();
        $('#labColor').show();
        $('#labColor2').show();
        $('#color').show();
    })
    $('#jeu').on("click", "td" ,function() {
        // attribue les couleur 
        // attribute the color
        if (couleur1 == 1) {
            couleur1 = 'blue-token';
        }
        if (couleur1 == 2) {
            couleur1 = 'dark-blue-token';
        }
        if (couleur1 == 3) {
            couleur1 = 'red-token';
        }
        if (couleur1 == 4) {
            couleur1 = 'purple-token';
        }
        if (couleur1 == 5) {
            couleur1 = 'green-token';
        }
        if (couleur1 == 6) {
            couleur1 = 'golden-token';
        }
        
        

        if (couleur2 == 1) {
            couleur2 = 'blue-token';
        }
        if (couleur2 == 2) {
            couleur2 = 'dark-blue-token';
        }
        if (couleur2 == 3) {
            couleur2 = 'red-token';
        }
        if (couleur2 == 4) {
            couleur2 = 'purple-token';
        }
        if (couleur2 == 5) {
            couleur2 = 'green-token';
        }
        if (couleur2 == 6) {
            couleur2 = 'golden-token';
        }
        var nombreX = $('td').length;
        var nombre = $('tr').length;
        var nbX = nombreX/nombre;
        // console.log(nbX);
            var classe = $(this).attr('class').substr(0,7);

        // var premiere = classe.substr(0,7);
        // console.log(classe);
        // console.log(checkClass());
        // console.log($(this).data("ref"));
        
        // console.log(nombre);
        // console.log($('td').parent('#column' + e));
            // console.log(e);
            // console.log($('td').parent('#column'+ e));
            var egalité = $('tr').children();
            // console.log(egalité);
            var nb = nombre -1;
            
            if (nb == nombre - 1 && turn === 1) {
                var path = $("#ligne" + nb).children("td[class^=" + classe + "]");
                while (checkClass(path) == true) {
                    // vérifie si l'emplacement est utilisé
                    // check if the location is used
                    path = $("#ligne" + nb).children("td[class^=" + classe + "]");
                    nb--;
                }
                if (checkClass(path) == false) {
                    if (nb > -2) {
                        // $.each(['td')
                        // if (checkClass(egalité) = true) {
                        //     alert('egalité')
                        // }
                        // else {
                            
                            // pose le jeton et donne le tour au joueur 2
                            // place the token and give the turn to the player 2
                            if (player1 == 1) {
                                path.addClass('blue-token');
                                turn = 2;
                            }
                            if (player1 == 2) {
                                path.addClass('dark-blue-token');
                                turn = 2;
                            }
                            if (player1 == 3) {
                                path.addClass('red-token');
                                turn = 2;
                            }
                            if (player1 == 4) {
                                path.addClass('purple-token');
                                turn = 2;
                            }
                            if (player1 == 5) {
                                path.addClass('green-token');
                                turn = 2;
                            }
                            if (player1 == 6) {
                                path.addClass('golden-token');
                                turn = 2;
                            // }
                        }   
                    }
                }
            }
        
        
            else if (nb == nombre - 1 && turn === 2) {
                
                var path = $("#ligne" + nb).children("td[class^=" + classe + "]"); 
                while (checkClass(path) == true) {
                    // vérifie si l'emplacement est utilisé
                    // check if the location is used
                    path = $("#ligne" + nb).children("td[class^=" + classe + "]");
                    nb--;
                }
                if (checkClass(path) == false) {
                    if (nb > -2) {
                        // pose le jeton et donne le tour au joueur 1
                        // place the token and give the turn to the player 1
                        if (player2 == 1) {
                            path.addClass('blue-token');
                        }
                        if (player2 == 2) {
                            path.addClass('dark-blue-token');
                        }
                        if (player2 == 3) {
                            path.addClass('red-token');
                        }
                        if (player2 == 4) {
                            path.addClass('purple-token');
                        }
                        if (player2 == 5) {
                            path.addClass('green-token');
                        }
                        if (player2 == 6) {
                            path.addClass('golden-token');
                        }
                            turn = 1;
                   
                    }
                }
                }
                if (turn == 1) {
                    $('#tour').children().remove()
                    $('#tour').append('<p>au tour du joueur 1</p>');
            }
            else {
            $('#tour').children().remove()
            $('#tour').append('<p>au tour du joueur 2</p>');
            }
            }
            
    )
    var id = document.querySelector('#bgvid')
    (function () {
        id.play();
    })();
    document.addEventListener('click',function(){
        id.play();
    })
});