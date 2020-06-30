---
id: whitespace
title: Don't use whitespace characters for layout purposes
tags:
  - 1.3.1 A
  - Layout
  - Design
  - Tech
sidebar_label: Whitespace
---

## Change the styling properties instead of using whitespace characters for layout purposes

Since whitespace character can change the way a word is being pronounced or change words meaning for example by screen readers. 

When blank characters are inserted to control letter spacing within a word, they may change the interpretation of the word or cause it not to be programmatically recognized as a single word 

## What to do

- Avoid using whitespace characters (i.e blanks/spaces and tabs etc.)

## Example

This example has white spaces within a word to space out the letters in a heading. Screen readers may read each letter individually instead of the word “Welcome”.

### Code

```html
<h1>W e l c o m e</h1>
```

&amp;nbsp; can also be used to add white space, producing similiar features:

```html
<h1>H&nbsp; e&nbsp; l&nbsp; l&nbsp; o</h1>
```