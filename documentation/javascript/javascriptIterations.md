
## Boucle for

>for ([initialisation]; [condition][expression_finale])instruction

L'instruction for crée une boucle composée de trois expressions optionnelles séparées par des points-virgules et encadrées entre des parenthèses qui sont suivies par une instruction généralement une instruction de bloc à exécuter dans la boucle.
```javascript
var str = "";

for (var i = 0; i < 9; i++) {

str = str + i;

}

console.log(str);

// expected output: "012345678"
```
## Boucle while
>while (condition) instruction

L'instruction while permet de créer une boucle qui s'exécute tant qu'une condition de test est vérifiée. La condition est évaluée avant d'exécuter l'instruction contenue dans la boucle.

``` javascript
var n = 0;

while (n < 3) {

n++;

}

console.log(n);

// expected output: 3

```

## for in
L'**instruction  `for...in`**  permet d'itérer sur les  propriétés énumérables d'un objet qui ne sont pas  des symboles . Pour chaque propriété obtenue, on exécute une instruction (ou plusieurs grâce à un  bloc  d'instructions).
```javascript
var string1 = "";
var object1 = {a: 1, b: 2, c: 3};

for (var property1 in object1) {
  string1 += object1[property1];
}

console.log(string1);
// expected output: "123"
```
La boucle `for...in` qui suit utilise parcourt l'objet `obj` et ses propriétés énumérables qui ne sont pas des symboles en fournissant la chaîne de caractères qui décrit le nom de la propriété et sa valeur.
```javascript
var obj = {a:1, b:2, c:3};

for (var prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}

// Affiche dans la console :
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"
```
## for of

L'**instruction  `for...of`** permet de créer une boucle `Array` qui parcourt un objet iterable et qui permet d'exécuter une ou plusieurs instructions pour la valeur de chaque propriété.
```javascript
for (_variable_ of iterable)
  _instruction_

function* foo(){
  yield 1;
  yield 2;
}

for (let o of foo()) {
  console.log(o);
  // expected output: 1

  break; // closes iterator, triggers return
}
```

