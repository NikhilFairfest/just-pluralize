# just-pluralize

A simple singularized tool for all your pluralization problems.

All you have to do is install the package, import the 'pluralize' method and you are ready to get going.

### Install

```
$ npm i just-pluralize
```

### Import

```
import { pluralize } from 'just-pluralize';
```

### Usage

```
pluralize('son', 1) // -> 'son' 👶🏻

pluralize('dog', 3) // -> 'dogs' 🐕 🐕 🐕

pluralize('candy', 6, 'candies') // -> 'candies' 🍬 🍬 🍬 🍬 🍬 🍬
```

### Props

| Name                    | Type   | Description                                                                                 |
| ----------------------- | ------ | ------------------------------------------------------------------------------------------- |
| singular word(required) | string | This the word that you want to pluralize                                                    |
| count(optional)         | number | The count on which the word would be pluralized                                             |
| plural word(optional)   | string | This word must be passed in case the plural word is different from the passed singular word |
