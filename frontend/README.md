# Inventory and Expense management app

## Getting Started

First, run the development server:

```zsh
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Useful extensions for VS Code

- Tailwind Intellisense, Tailwind Documentation

## To persist local storage in NextJS with Redux

- [Redux Toolkit guideline for NextJS implementation](https://redux.js.org/usage/nextjs)
- [Persist Redux in NextJS](./src/app/redux.tsx)
- No global stores - Because the Redux store is shared across requests, it should not be defined as a global variable. Instead, the store should be created per request.
