## display: flex|inline-flex;

C'est ainsi qu'on définit un container flex, il est block par défaut ou inline selon la valeur donnée. Cela cée un contexte flex pour tous les descendants directs.

## display: flex | inline-flex;

* ```flex : ```  Cette valeur génère un container flex, de niveau block, à l'intérieur de l'élément.
* ```inline-flex : ```Cette valeur génère un container flex, de niveau inline, à l'intérieur de l'élément.

## flex-direction

La propriété flex-direction établit l'axe principal.
``` css
flex-direction: row | row-reverse | column | column-reverse
```
La propriété flex-direction établit l'axe principal.

* row (valeur par défaut): de gauche à droite si la lecture se fait dans ce sens, de droite à gauche dans le cas inverse
* row-reverse : inverse le sens
* column : comme row mais du haut vers le bas
* column-reverse : comme row-reverse mais du bas vers le haut

## flex-wrap

Cette propriété définit si le container comprend une seule ligne ou plusieurs et la direction sur l'axe perpendiculaire (cross-axis), qui détermine la direction dans laquelle les nouvelles lignes seront empilées.

```css
flex-wrap: nowrap | wrap | wrap-reverse
```

* ``` nowrap :``` (valeur par défaut) sur une seule ligne, de gauche à droite dans un système ltr, sinon l'inverse. La ligne peut déborder de son contenant.
* ```wrap : ```multiligne, de gauche à droite dans un système ltr, sinon l'inverse. Pas de débordement, on passe à la ligne.
* ``` wrap-reverse :``` multiligne, de droite à gauche dans un système ltr, sinon l'inverse.

## flex-flow

Cette propriété est un raccourci des propriétés "flex-direction" et "flex-wrap" qui ensemble définissent les axes "main" et "cross" du container flex. La valeur par défaut est row nowrap.
```css
    flex-flow: <‘flex-direction’> || <‘flex-wrap’>  
```
## justify-content

La propriété justify-content définit l'alignement le long de l'axe principal. Elle permet de distribuer l'espace excédentaire lorsque tous les items flex sur une ligne sont inflexibles ou lorsqu'ils ont atteint leur taille maximale. Elle contrôle aussi l'alignement des items lorsqu'ils débordent.
``` css
justify-content: flex-start | flex-end | center | space-between | space-around
```
-   flex-start (par défaut) : les items sont regroupés en début de ligne
-   flex-end : les items sont regroupés en fin de ligne
-   center : les items sont centrés le long de la ligne
-   space-between : les items sont répartis sur la ligne; le premier est collé du côté start, le dernier du côté end.
-   space-around : les items sont répartis sur la ligne avec un espacement égal autour de chacun.

## align-items

La propriété align-items définit la façon dont les items d'une ligne sont disposés le long de l'axe "cross".
``` css
align-items: flex-start | flex-end | center | baseline | stretch
```
* ```flex-start :``` l'item est placé au début de la ligne cross-start.
* ```  flex-end :``` la marge "cross-end" de l'item est placée sur la ligne cross-end
* ``` center :``` les items sont centrés sur l'axe cross
* ```   baseline :``` les items sont alignés sur leur ligne de base
* ```stretch (par défaut) :``` les items sont étirés jusqu'à remplir le container (tout en respectant min-width/max-width)

## align-content

La propriété align-content aligne les lignes d'un container flex à l'intérieur de l'espace où il reste de l'espace sur l'axe cross, un peu comme justify-content aligne les items sur l'axe principal.
```css
align-content: flex-start | flex-end | center | space-between | space-around | stretch
```
* ```  flex-start : ```lignes regroupées au début du container
* ``` flex-end : ```lignes regroupées à la fin du container
* ``` center : ```lignes regroupées au centre du container
* ```space-between :``` les lignes sont réparties, la première est collée du côté start, la dernière du côté end.
* ```  space-around : ```les lignes sont réparties avec un espacement égal autour de chacune.
* ```stretch (par défaut) : ```les lignes s'étirent pour remplir tout l'espace.

Passons maintenant aux propriétés qui s'appliquent aux éléments enfants, les items flex.

## order

Par défaut, les items flex sont disposés par ordre d'arrivée. Cependant, la propriété orderpermet de contrôler l'ordre dans lequel ils apparaissent dans le container.
```css
order: <nombre entier>

flex-grow
```
La propriété flex-grow définit la possibilité pour un item de grandir, si nécessaire. Elle accepte une valeur sans unité qui sert de proportion. Elle dicte l'espace que peut prendre l'item à l'intérieur de l'espace disponible dans le flex container.

Si tous les items ont flex-grow défini à 1, chaque enfant aura le même espace dans le container. Si vous donnez à l'un des enfants une valeur de 2, cet enfant prendra deux fois plus de place que les autres.
```css
flex-grow: <nombre entier> (par défaut = 0)
```
Les chiffres négatifs ne sont pas valides.

## flex-shrink

La propriété flex-shrink définit la possibilité pour un item flex de rétrécir si nécessaire.
```css
flex-shrink: <nombre entier> (par défaut = 1)
```
Les chiffres négatifs ne sont pas valides.


## flex-basis

La propriété flex-basis définit la taille par défaut d'un élément avant que l'espace restant soit réparti.
```css
flex-basis: <longueur> | auto (par défaut = auto)
```

## flex

Cette propriété est le raccourci de flex-grow , flex-shrink et flex-basis . Les deuxième et troisième paramètres sont optionels. La valeur par défaut est 0 1 auto.
```css
flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
```
## align-self

La propriété align-self permet à des items flex de passer outre aux alignement par défaut ou à ceux spécifiés par align-items. Les valeurs sont les mêmes que pour ce dernier.