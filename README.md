# just-pluralize
A simple singularized tool for all your pluralization problems.

All you have to do is install the package and you are ready to get going.
Just import the 'pluralize' method.

It takes 3 arguements.
1. singular word - the word you want to be pluralized
2. count - just pass the count for the word(nothing fancy here)
3. plural word - incase the plural word is different, then you can pass that to get the desired output.

Examples:

1. word - 'day'
   method - pluralize('day', 5, null);

2. word - 'child'
   method - pluralize('child', 2, 'children');
