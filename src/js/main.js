// Quiz: Veuillez répondre aux questions ci-dessous. (1 heure) (+20 min pour les personnes bénéficiant de mesures supplémentaires)
// Lorsqu'il y a des sous-points (questions 7, 8 et 11), ils vous guident dans les diverses étapes de l'exercice.
// Le quiz est individuel. Vous avez cependant accès à tous les supports de cours, ainsi qu'internet.
// -----------------------

// 1. Expliquez ce qu'est-ce qu'une variable.
// REPONSE:
Une variable est un moyen de stocker une information afin de la réutiliser ou de la manipuler.
// -----------------------
// 2. Déclarez une variable s'appelant "firstName" et dont la valeur est votre prénom.
const age = 24;
const name = "Pierre";
console.log(age); // -> 24
console.log(name); // -> Pierre
// -----------------------
// 3. Déclarez une variable s'appelant "age" et dont la valeur est votre âge. Attention, sa valeur pourrait être modifiée par la suite.
let age = 24;
console.log(age)
// -----------------------
// 4. Dans le code HTML (lignes 17 - 23), citez les divers éléments composant l'élément HTML <input>:
// - Balise HTML:type, name, placeholder, id, class
// - Classe(s): id, class
// - Attribut(s):card-input, password-input, text

// -----------------------
// 5. Expliquez la différence entre une class et un ID.
// REPONSE: l'id est unique au document pad forcément la classe
// -----------------------
// 6. A quoi sert la méthode document.querySelector("..."); ?
// REPONSE: à sélectionner ce que l'on veut dans le html/css

// -----------------------
// 7. A l'aide de la méthode document.querySelector("..."), sélectionnez l'élément <p> (ligne 14 du code HTML):
// 7.1 Créez une variable appelée "cardContent".
// 7.2 Assignez lui l'élément <p> (ligne 14 du code HTML) que vous avez sélectionné en 7.1.

// -----------------------
// 8. Utilisez la variable "cardContent" créée à l'exercice 7:
// 8.1 Utilisez la propriété   -> .classList <-   pour ajouter   -> .add("...") <-   la class "highlight" à l'élément HTML.

// -----------------------
// 9. Récupérez la valeur de l'attribut "placeholder"   -> .getAttribute("...") <-   de l'élément HTML <input> (ligne 17 du code HTML).

// -----------------------
// 10. Expliquez ce qu'est un écouteur d'événement.
// REPONSE: là je sui vraiment désolé c'est un peu trop compliqué pour moi

// -----------------------
// 11. Sur l'élément HTML button (ligne 26 du code HTML), écoutez l'événement "click":
// 11.1 : Sélectionnez l'élément HTML <button> (ligne 26 du code HTML).
// 11.2 : Utilisez la méthode   -> .addEventListener("...", function() {...}) <-   sur l'élément HTML sélectionné en 11.1 pour écouter l'événement "click".
// 11.3 : Lorsqu'un.e utilisateurice clique sur le bouton, ajoutez/supprimez (toggle) la class "hide" de l'élément HTML <p> (ligne 29-31 du code HTML).
