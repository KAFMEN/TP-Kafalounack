// --------------
// TP ALGORITHMIE
// --------------

// CONSEIL 1:
// RELIRE VOS EXERCICES
// ILS FONT OFFICE DE DOCUMENTATION

// CONSEIL 2:
// BIEN LIRE LES ENONCES

// --------------
// Exercice 01
// --------------

// Créer une fonction, qui prendra en paramètre deux nombres
// Et qui affichera dans le terminal la multiplication de ces 2 nombres
// Exemple: mult(5, 3) => nous affichera 15
// const nombre =( 5*3)

// console.log(nombre);
// --------------
// Exercice 02
// --------------

// Déclarer un array, avec plusieurs nombres
// ex: [1, 8, 588, 64, 25]
// Afficher dans le terminal, chaque nombre multiplié par 4
// const multi = [1, 8, 588, 64, 25]
// for (let i = 0; i < multi.length; i++) {
//     multi[i]=multi[i]*4;
    
    
// }
// console.log(multi);
// --------------
// Exercice 03
// --------------

// Créer un objet avec pour clés votre prénom et votre age 
// (vous avez le droit de tricher pour votre age).
// Exemple:
// const user = {
//   firstName: 'Julien',
//   age: 24
// }
// Si la valeur de la clé age est supérieur à 28, 
// afficher dans le terminal ("Je suis dans la fleur de l'âge")
// Sinon, afficher ("Je suis en train de me bonifier")



//  let age = 24
// function checkAge() {
//     return true;
// }
// if(checkAge<28()){
//     console.log("Je suis dans la fleur de l'âge");
// }else{(checkAge>28())
//     console.log("Je suis en train de me bonifier");
// }

// --------------
// Exercice 04
// --------------

// const users = [
//   {
//     firstname: 'john',
//     age: 34
//   },
//   {
//     firstname: 'clara',
//     age: 26
//   },
//   {
//     firstname: 'sarah',
//     age: 29
//   }
// ]
// let total= 0
// for (let i = 0; i < users.length; i++) {
//     total += users[i].age;
    
// }
// console.log(total);
// A l'aide de cet array
// Afficher dans le terminal la somme de leur age.


// --------------
// Exercice 05
// --------------

// const users = [
//   {
//     firstname : 'laurent'
//   },
//   {
//     firstname : 'david'
//   },
//   {
//     firstname : 'caroline'
//   }
// ]

// Créer une fonction, qui prend en paramètre un prénom
// et qui va ajouter un nouvel objet, avec son prénom, dans cet array
// Afficher ensuite l'array dans le terminal.
// Attention, si le prénom est déjà présent, afficher à la place:
// "Prénom déjà présent, merci d'en choisir un autre"
// const firstname = ["laurent","david","caroline"];
// firstname.push(["kaf"])

// for (let i = 0; i < firstname.length; i++) {
        
//         if (firstname="laurent","david","caroline")
//         console.log("Prénom déjà présent, merci d'en choisir un autre");





// --------------
// Exercice06
// --------------

// Créer une fonction qui va calculer le nombre de 'a' dans une String
// (afficher le résultat dans le terminal. Exemple: "Il y a ... de lettres 'a' dans la phrase")
// Puis remplacer tous les 'a' d'une String par des 'z'
// ex: "Sayonara! Oui, j'ai des origines japonaises."
// résultat attendu: "Szyonzrz! Oui, j'zi des origines jzponzises."

// const replace = str => {
//   let res = ""
//   for (let i = 0; i< replace.length; i++) {
//       console.log( 'a' [i]);
      
//   }
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === 'a') {
//       res += 'z'
//     } else {
//       res += str[i]
//     }
//   }
//   console.log(res);
// }
// replace("Sayonara! Oui, j'ai des origines japonaises.")
// --------------
// Exercice 07
// --------------

// Créer un array avec plusieurs chiffres/nombres de votre choix
// Créer une fonction qui, TOTALEMENT AU HASARD
// nous MULTIPLIERA ou DIVISERA ces nombres les uns à la suite des autres
// exemple1: [1, 4, 32, 8] => 1 * 4 / 32 * 8 = 1024
// exemple2: [1, 4, 32, 8] => 1 / 4 * 32 * 8 = 64
// const random = (34,67 ,42)
//     for (let i = 0; i < random.length; i++) {
//         const random = Math.round(Math.random())* 
        
//     }else (let i = 0; i < random.length; i++) {
//             const random = Math.round(Math.random())/
  
    
//  console.log(math.random()


// --------------
// Exercice 08
// --------------

// Un utilisateur vient de s'inscrire sur votre site.
// Malheureusement, il inscrit son prénom de façon 'hasardeuse'
// ex: oLivieR
// Créer une fonction, qui prendra en paramètre un prénom
// Cette fonction mettra la première lettre en majuscule
// Puis le reste du prénom en minuscule.
// résultat attendu: Olivier


// const fct =(prenom1) =>{}
// for (let i = 0; i < prenom1.length; i++) {}
//     if  (i===0) { 
//     {
//         resul+= prenom1 [i].toUpperCase()

// }
//     }else (resul+= prenom1[i].toLowerCase()
        

// }console.log(resul)

// fct ('0livier')

// --------------
// Exercice 09
// --------------

// Créer une fonction qui fait office de calculatrice
// Cette fonction peut additionner, multiplier, soustraire, ou diviser 2 nombres
// Elle accepte 3 paramètres:
// Les 2 premiers paramètres seront vos chiffres/nombres
// Le 3ème paramètre sera le signe représentant le calcul.
// ex: (5, 10, '*') => résultat: 50
// ex: (8, 4, '+') => résultat: 12
// ex: (77, 33, '-') => résultat: 44
// BONUS: si un calcul n'est pas réalisable, indiquez: 'Calcul impossible'
// ex: (8, 'k', '-') => résultat: 'Calcul impossible'
// ex: (13, '45', 'plus') => résultat: 'Calcul impossible'
// Aide: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/isNaN

// --------------
// Exercice 10
// --------------

// Créer une fonction nommée generateStep
// Cette fonction prend 3 paramètres: (min, max, step)
// Grâce à ces arguments, créez un array composé de nombres
// Le premier sera 'min' (le nombre le plus petit)
// Le dernier sera 'max' (le nombre le plus grand)
// Afficher entre ces 2 nombres les étapes (step)
// ex: generateStep(2, 10, 2) // doit retourner [2, 4, 6, 8, 10]
// ex: generateStep(1, 13, 3) // doit retourner [1, 4, 7, 10, 13]
// ATTENTION: le paramètre max n'est pas affiché, si le nombre suivant le dépasse
// ex: generateStep(1, 12, 3) // doit retourner [1, 4, 7, 10]

// --------------
// Exercice 11
// --------------

// Fibonacci
// La suite de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// Vous commencez l'exercice avec cet array: [0, 1]
// Créez une fonction qui va créer la suite de Fibonacci à l'intérieur de cet array
// avec en paramètre un nombre 'x', qui définira le nombre d'élément à afficher
// ex: fibo(5) => 0, 1, 1, 2, 3, 5, 8
// ex: fibo(8) => 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
// afficher le résultat dans le terminal}
function DaVinci(fibonacci) {
    let num1 = 0;
    let num2 = 1;
    let total = 0;
    for(let i = 0; i <= fibonacci; i++){
        total = num1 + num2;
        num1 = num2;
        num2 = total;
    }   
 
    fibonacci = num2 + num1;
 }
 console.log(DaVinci(10));


















