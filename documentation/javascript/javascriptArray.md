## Length

La propriété length (longueur) est un entier non-signé de 32 bits qui indique le nombre d'éléments présents dans le tableau. Elle est toujours supérieure au plus grand indice du tableau.
```
var clothing = ['shoes', 'shirts', 'socks', 'sweaters'];

console.log(clothing.length);
// expected output: 4

```

# map

La méthode map() crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.
```javascript

var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

```


# concat

La méthode concat() est utilisée afin de fusionner un ou plusieurs tableaux en les concaténant. Cette méthode ne modifie pas les tableaux existants, elle renvoie un nouveau tableau qui est le résultat de l'opération.
```
var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];

console.log(array1.concat(array2));
// expected output: Array ["a", "b", "c", "d", "e", "f"]

```
# findIndex

La méthode findIndex() renvoie l'indice du premier élément du tableau qui satisfait une condition donnée par une fonction. Si la fonction renvoie faux pour tous les éléments du tableau, le résultat vaut -1.
```javascript
var array1 = [5, 12, 8, 130, 44];

function isLargeNumber(element) {
  return element > 13;
}

console.log(array1.findIndex(isLargeNumber));
// expected output: 3

```

# filter

La méthode filter() crée et retourne un nouveau tableau contenant tous les éléments du tableau d'origine qui remplissent une condition déterminée par la fonction callback.
```javascript
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

```
# join

La méthode join() crée et renvoie une nouvelle chaîne de caractères en concaténant tous les éléments d'un tableau (ou d'un objet semblable à un tableau). La concaténation utilise la virgule ou une autre chaîne, fournie en argument, comme séparateur.

``` javascript

var elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"
```


# indexOf

La méthode indexOf() renvoie le premier indice pour lequel on trouve un élément donné dans un tableau. Si l'élément cherché n'est pas présent dans le tableau, la méthode renverra -1.

```javascript
var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1

```
# push

La méthode push() ajoute un ou plusieurs éléments à la fin d'un tableau et retourne la nouvelle taille du tableau.
``` javascript
var animals = ['pigs', 'goats', 'sheep'];

console.log(animals.push('cows'));
// expected output: 4

console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens');

console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens"]

```
# forEach

La méthode forEach() permet d'exécuter une fonction donnée sur chaque élément du tableau.

``` javascript
var array1 = ['a', 'b', 'c'];

array1.forEach(function(element) {
  console.log(element);
});

// expected output: "a"
// expected output: "b"
// expected output: "c"

```
# reduce

La méthode reduce() applique une fonction qui est un « accumulateur » et qui traite chaque valeur d'une liste (de la gauche vers la droite) afin de la réduire à une seule valeur.
``` javascript
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
```
# slice

La méthode slice() renvoie un objet tableau, contenant une copie superficielle (shallow copy) d'une portion du tableau d'origine, la portion est définie par un indice de début et un indice de fin (exclus). Le tableau original ne sera pas modifié.
```javascript
var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

```
# sort

La méthode sort() trie les éléments d'un tableau, dans ce même tableau, et renvoie le tableau. Par défaut, le tri s'effectue sur les éléments du tableau convertis en chaînes de caractères et triées selon les valeurs des unités de code UTF-16 des caractères.
La complexité en espace mémoire et en temps utilisée pour le tri ne peut pas être garantie car elle dépend de l'implémentation.
```javascript
var months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

var array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]
```
# splice

La méthode splice() modifie le contenu d'un tableau en retirant des éléments et/ou en ajoutant de nouveaux éléments à même le tableau.On peut ainsi vider ou remplacer une partie d'un tableau.

```javascript
var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']


```




# Fermetures (closures)Section

Les fermetures sont l'une des fonctionnalités les plus intéressantes de JavaScript. Comme on l'a vu précédemment, JavaScript permet d'imbriquer des fonctions et la fonction interne aura accès aux variables et paramètres de la fonction parente. À l'inverse, la fonction parente ne pourra pas accéder aux variables liées à la fonction interne. Cela fournit une certaine sécurité pour les variables de la fonction interne. De plus, si la fonction interne peut exister plus longtemps que la fonction parente, les variables et fonctions de la fonction parente pourront exister au travers de la fonction interne. On crée une fermeture lorsque la fonction interne est disponible en dehors de la fonction parente.

``` javascript
var animal = function(nom) {   // La fonction externe utilise un paramètre "nom"
  var getNom = function () {
    return nom;                // La fonction interne accède à la variable "nom" de la fonction externe
  }
  return getNom;               // Renvoie la fonction interne pour la rendre disponible en dehors de la portée de la fonction parente
}
monAnimal = animal("Licorne");
    
monAnimal();                   // Renvoie "Licorne"
Bien entendu, dans la pratique, les cas peuvent être plus complexes. On peut renvoyer un objet qui contient des méthodes manipulant les variables internes de la fonction parente.
var créerAnimal  = function (nom) {
  var sexe;
 
  return {
    setNom: function(nouveauNom) {
      nom = nouveauNom;
    },
    
    getNom: function () {
      return nom;
    },
    
    getSexe: function () {
      return sexe;
    },
    
    setSexe: function(nouveauSexe) {
      if (typeof nouveauSexe == "string" && (nouveauSexe.toLowerCase() == "mâle" || nouveauSexe.toLowerCase() == "femelle")) {
        sexe = nouveauSexe;
      }
    }
  }
}
var animal = créerAnimal("Licorne");
animal.getNom();        // Licorne
animal.setNom("Bobby");
animal.setSexe("mâle");
animal.getSexe();       // mâle
animal.getNom();        // Bobby

```
Dans le code précédent, la variable nom est de la fonction externe est accessible depuis les fonctions internes. Il est impossible d'accéder aux variables internes en dehors des fonctions internes. Les variables internes agissent comme des coffres-forts pour les fonctions internes. Elles permettent d'avoir un accès persistent et encapsulé aux données internes. Pour les fonctions, il n'est pas nécessaire de les affecter à une variable ou même de les nommer.

``` javacript

var getCode = (function (){
  var codeAPI = "0]Eal(eh&2";    // Un code qu'on ne souhaite pas diffuser ni modifier
 
  return function () {
    return codeAPI;
  };
})();
```


# ternaire

L'opérateur (ternaire) conditionnel est le seul opérateur JavaScript qui comporte trois opérandes. Cet opérateur est fréquemment utilisé comme raccourci pour la déclaration de Instructions/if...else.
```javascript
function getFee(isMember) {
  return (isMember ? "$2.00" : "$10.00");
}

console.log(getFee(true));
// expected output: "$2.00"

console.log(getFee(false));
// expected output: "$10.00"

console.log(getFee(1));
// expected output: "$2.00"

```



# Modulo Reste (%)Section
``` javascript
L'opérateur « reste » renvoie le reste de la division du premier opérande par le second. Le résultat obtenu a toujours le signe du numérateur (la quantité divisée).
SyntaxeSection
Opérateur : var1 % var2
ExemplesSection
12 % 5  // 2
-1 % 2  // -1
1 % -2  // -1
NaN % 2 // NaN
1 % 2   // 1
2 % 3   // 2
-4 % 2  // -0
5.5 % 2 // 1.5
```
