//définir la la largeur de la sidebar a 100vw  et faire un overflow hidden

function openNav(){
    document.getElementById("mySidebar").style.width="100vw";
    document.querySelector("body").style.overflow= "hidden"

}

//définir la la largeur de la sidebar a 0  et faire un overflow auto

function closeNav(){
    document.getElementById("mySidebar").style.width="0";
    document.querySelector("body").style.overflow= "auto"

}

// Sélectionnez le formulaire par son ID
var form = document.getElementById("fs-frm");

// Ajoutez un écouteur d'événements à la soumission du formulaire
form.addEventListener("submit", function(event) {
    // Empêchez le formulaire de se soumettre normalement
    event.preventDefault();

    // Réinitialisez les valeurs des champs du formulaire
    form.reset();

    // Vous pouvez également afficher un message de confirmation ici si vous le souhaitez
    alert("Votre formulaire a été envoyé. Merci !");
});
