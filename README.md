<a href="https://chat.vercel.ai/">
  <img alt="Next.js 14 and App Router-ready AI chatbot." src="https://chat.vercel.ai/opengraph-image.png">
  <h1 align="center">Next.js & Stytch AI Chatbot</h1>
</a>

<p align="center">
  An open-source AI chatbot app template built with Next.js, the Vercel AI SDK, OpenAI, Vercel KV and Stytch.
</p>

<p align="center">
  For more information about the development of this project and the process involved, check out the <a href="https://www.keanankoppenhaver.com/done-for-you-authentication-with-stytch/">project writeup</a>.
</p>

## Features

- [Next.js](https://nextjs.org) App Router
- React Server Components (RSCs), Suspense, and Server Actions
- [Vercel AI SDK](https://sdk.vercel.ai/docs) for streaming chat UI
- Support for OpenAI (default), Anthropic, Cohere, Hugging Face, or custom AI chat models and/or LangChain
- [shadcn/ui](https://ui.shadcn.com)
  - Styling with [Tailwind CSS](https://tailwindcss.com)
  - [Radix UI](https://radix-ui.com) for headless component primitives
  - Icons from [Phosphor Icons](https://phosphoricons.com)
- Chat History, rate limiting, and session storage with [Vercel KV](https://vercel.com/storage/kv)
- [Stytch](https://stytch.com/) for authentication

## Try the Hosted Version

If you don't want to mess with configuring environment variables and setting up your own infrastructure, you can try the already-deployed and configured version currently live at: [https://aichatbot-nu.vercel.app/](https://aichatbot-nu.vercel.app/)

## Running locally

To run this project locally, start by cloning this repository onto your local machine.

```bash
git clone git@github.com:kkoppenhaver/aichatbot.git
```

### Creating a KV Database Instance

Out of the box, this project uses Vercel KV for storage. Before you start, make sure you follow the steps outlined in the [quick start guide](https://vercel.com/docs/storage/vercel-kv/quickstart#create-a-kv-database) provided by Vercel. This guide will assist you in creating and configuring your KV database instance on Vercel, enabling your application to interact with it.

Remember to update your environment variables (`KV_URL`, `KV_REST_API_URL`, `KV_REST_API_TOKEN`, `KV_REST_API_READ_ONLY_TOKEN`) in the `.env` file with the appropriate credentials provided during the KV database setup.

### Gerenate env file, install dependencies and run!

You will need to use the environment variables [defined in `.env.example`](.env.example) to run Next.js AI Chatbot. It's recommended you use [Vercel Environment Variables](https://vercel.com/docs/projects/environment-variables) for this, but a `.env` file is all that is necessary.

To get things running locally, run `cp .env.example .env` to generate yourself an env file and then populate actual values for each of the variables defined there. When you're done, you can install the dependencies and run the local server.

```bash
pnpm install
pnpm dev
```

Your app template should now be running on [localhost:3000](http://localhost:3000/).

## History

This codebase was forked from the [Vercel AI Chatbot demo](https://github.com/vercel/ai-chatbot) and the originally-included NextAuth.js authentication was swapped out to allow the application to leverage Stytch instead.

## Possible future improvements
  - **Additional models**: Since the original use of this project was intended to be a demonstration of different AI models, a future version will have a model selector to let users utilize different models for different types of chats.
  - **Add support for models with vision**: Allow users to upload images and have the selected model process them to include information about these images in chats.