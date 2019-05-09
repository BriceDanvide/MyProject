# .split()

La méthode split() permet de diviser une chaîne de caractères à partir d'un séparateur pour fournir un tableau de sous-chaînes.
var str = 'The quick brown fox jumps over the lazy dog.';
``` javascript
var words = str.split(' ');
console.log(words[3]);
// expected output: "fox"

var chars = str.split('');
console.log(chars[8]);
// expected output: "k"

var strCopy = str.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]
```

La méthode charAt() renvoie une nouvelle chaîne contenant le caractère (ou, plus précisément, le point de code UTF-16)  à la position indiquée en argument.

```javascript
var sentence = 'The quick brown fox jumps over the lazy dog.';

var index = 4;

console.log('The character at index ' + index + ' is ' + sentence.charAt(index));
// expected output: "The character at index 4 is q"
```
# .toUpperCase()

La méthode toUpperCase() retourne la valeur de la chaîne courante, convertie en majuscules.
```javascript
var sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.toUpperCase());
// expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."

```
