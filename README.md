# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![](./Desktop.png)

![](./Mobile.png)

### Links

- Solution URL: [Add solution URL here](https://www.frontendmentor.io/solutions/article-preview-component-6p6cOpCoxE)
- Live Site URL: [Add live site URL here](https://chrisesbueno.github.io/article-preview/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

```js
const modal = document.querySelector('.modal')
const button = document.querySelectorAll('.share')
console.log(modal, button)

button.forEach(element => {
    element.addEventListener('click', () => {
        if (modal.classList.contains('show')) {
            modal.classList.remove('show') 
        } else {
            modal.classList.add('show')
        }
    })
});
```

## Author

- Frontend Mentor - [@chrisesbueno](https://www.frontendmentor.io/profile/chrisesbueno)
- Twitter - [@chrisesbueno](https://www.twitter.com/chrisesbueno)
