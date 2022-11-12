This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Improvein Challenge

The following technologies were used:

<p align="left">
<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" width="36" height="36" alt="Typescript" /></a>
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" /></a>
<a href="https://nextjs.org/docs" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg" width="36" height="36" alt="NextJs" /></a>
<a href="https://redux.js.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg" width="36" height="36" alt="Redux" /></a>
</p>

## Before Starting

Create the file `./env.local` and add the next enviroment variables

```bash
URL='https://my-json-server.typicode.com/improvein/dev-challenge/'
SECRET='123'
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Navigation

Routes are protected (settings in ./middleware.ts).
To make progress, in the password and email inputs you must enter the following values:

Email:

```
admin@admin.com
```

password:

```
admin123
```

The username is random.

with this you will be redirected to the `/bands` page and you will be able to see in the cookies that a token was assigned

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
