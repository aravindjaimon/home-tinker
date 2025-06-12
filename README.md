# HomeTinker

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## About The Project

HomeTinker is a web application dedicated to home improvement, DIY projects, and construction. It provides expert advice, information on quality products, and innovative solutions for various home improvement needs. The content for the website is managed using [Contentful](https://www.contentful.com/).

### Built With

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Contentful](https://www.contentful.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Lucide React](https://lucide.dev/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have `pnpm` installed.

```sh
npm install -g pnpm
```

You will also need to have a `.env.local` file with the following Contentful credentials:

```
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token
```

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/aravindjaimon/home-tinker.git
    ```
2.  Install PNPM packages
    ```sh
    pnpm install
    ```
3.  Start the development server
    ```sh
    pnpm dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

The application features a landing page with multiple sections and dynamic pages for individual content pieces. The content is fetched from Contentful, and the pages are statically generated for optimal performance, with a revalidation period of one hour.
