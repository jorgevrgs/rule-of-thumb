# Rule of Thumb

[![CI](https://github.com/jorgevrgs/rule-of-thumb/actions/workflows/ci.yml/badge.svg)](https://github.com/jorgevrgs/rule-of-thumb/actions/workflows/ci.yml) [![Playwright Tests](https://github.com/jorgevrgs/rule-of-thumb/actions/workflows/playwright.yml/badge.svg)](https://github.com/jorgevrgs/rule-of-thumb/actions/workflows/playwright.yml)

Rule of Thumb is a full-stack example project built with TypeScript and Next.js, backend with MongoDB and GridFS.

## Technologies

![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) ![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

## Getting Started

Start the server using Docker or lift the server locally. First step install dependencies:

```bash
npm ci
```

### Docker

```bash
cp .env.example env.docker # Edit the variables

npm run serve # Start a Docker container
npm run seed  # Populate the MongoDB database and load the images to GridFS
npm run stop  # Stop the Docker containers
```

### Local/Remote Database

For a MongoDB running either in localhost or remotely (i.e. Mongo Atlas):

```bash
cp .env.local.example env.local # Edit the variables

# Development
npm run dev

# Production
npm run build
npm start
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
