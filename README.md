# Frontend Mentor - Pricing component with toggle solution

This is a solution to the [Pricing component with toggle challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pricing-component-with-toggle-8vPwRMIC). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Control the toggle with both their mouse/trackpad and their keyboard
- **Bonus**: Complete the challenge with just HTML and CSS

### Screenshot

![Desktop Preview - Annually](/public/screenshots/desktop-preview_annually.png)
![Desktop Preview - Monthly](/public/screenshots/desktop-preview_monthly.png)
![Mobile Preview - Annually](/public/screenshots/mobile-preview_annually.png)
![Mobile Preview - Monthly](/public/screenshots/mobile-preview_monthly.png)

### Links

- Solution URL: [GitHub Code](https://github.com/dostonnabotov/fem_pricing-component-with-toggle)
- Live Site URL: [Live Preview](https://technophile-pricing-component.netlify.app/)

## My process

### Built with

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Vite](https://vitejs.dev/)
- CSS and CSS Modules
- Mobile-first workflow
- Fluid typography

### What I learned

Working with props and state with TypeSript:

```tsx
export type planPeriodTypes = "monthly" | "annually";

interface Props {
  planPeriod: string;
  setPlanPeriod: Dispatch<SetStateAction<planPeriodTypes>>;
}
```

Not putting centering styles on the `<body>` element and being annoyed by the fact that the page is not centered, because there is the `<div id="root"></div>` inside of it:

```css
#root {
  min-height: 100vh;
  display: grid;
  place-items: center;
}
```

### Continued development

If you have any suggestions on how I can improve my code, please do let me know! I'll always look forward to learning new things.

### Useful resources

- [Utopia - Fluid Typography](https://utopia.fyi/type/calculator/) - My go-to website for generating fluid font sizes.

As for the other resources, I have linked them in the code comments.

## Author

- Website - [Doston Nabotov](https://dostonnabotov.netlify.app)
- Frontend Mentor - [@dostonnabotov](https://www.frontendmentor.io/profile/dostonnabotov)
- Twitter - [@dostonnabotov](https://www.twitter.com/dostonnabotov)

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.
