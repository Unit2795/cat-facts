# Cat Facts Sample Application

Demonstrator application that displays random cat facts, built using Next.js. There are two pages; the homepage where you can generate individual facts and a bulk facts page where you can generate multiple facts at once. Click on a fact in the bulk facts page to visit that specific fact.

## Live Site
https://cat-facts-one.vercel.app/

## Features
- Generate random cat facts, bookmark your favorites
- Click a fact in the bulk facts page to visit that specific fact
- Responsive & accessible design, with support for reduced motion
- Animated navbar, facts, and buttons
- Internal route handlers for fact API

## Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## API Endpoints
- /fact - returns a random cat fact
- /fact?id=ID - returns a specific cat fact by ID
- /facts - returns multiple cat facts
- /facts?amount=amount - returns multiple cat facts with a set amount


## Images
Home Page:
![Primary homepage](./docs/home.png)
Bulk Facts Page:
![Bulk cat facts page](./docs/facts.png)