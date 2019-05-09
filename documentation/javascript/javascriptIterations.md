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