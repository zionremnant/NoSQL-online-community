# NoSQL-online-community

## Summary

Using Express.js for routing, a MongoDB database, the Mongoose ODM, Express.js, and Mongoose packages, it constructs an API for a social network web application that allows users to share their thoughts, react to the thoughts of their friends, and create a friend list.

## Table of Contents

- [Anchors](#anchors)
- [Quantifiers](#quantifiers)
- [Grouping Constructs](#grouping-constructs)
- [Bracket Expressions](#bracket-expressions)
- [Character Classes](#character-classes)
- [Reference](#reference)
- [Author](#author)

## Regex Components

### Anchors

Anchors are `^` and `$`. `^` is placed in the beginning, and `$` is placed at the end.

### Quantifiers

Quantifiers provide the minimum number of instances of a character, group, or character class in the input required to find a match. For instance, `+` and `{ }` are quantifiers. If a user uses `+`, it indicates that the pattern can be duplicated multiple times. Depending on how many characters are displayed in the `{ }`, there are multiple definitions. For example, if the users see `{3,8}`, it means that the email must have more than 3 numbers but not more than 8.

### Grouping Constructs

A subexpression is the most popular technique to describe `( )` in Regex. This signifies that the characters have been divided into pieces to make them easier to read. There are 3 sets of `( )` in this example. Each of these sections is a distinct portion of the email.

### Bracket Expressions

There are 3 sets of brackets. The character set is indicated by these brackets. In the email, any character found in a bracket set is included. `[a-z]` and `[0-9]` are two examples that indicate a section of the email.

### Character Classes

Character classes are divided into two categories, which are character escapes and character classes. A `\` is used in a character escape to make the characters in a `[\]`. It is meant to be taken literally. A `\` can be used to represent an escape in this case. Any of the characters in the regex sequence can be classified as a character class.

## Reference

https://coding-boot-camp.github.io/full-stack/computer-science/regex-tutorial

## Author

- Created by: Zion Yang
- GitHub: https://github.com/zionremnant
