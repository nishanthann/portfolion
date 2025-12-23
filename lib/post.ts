export type PostType = {
  slug: string;
  title: string;
  content: string;
  createdAt: string; // ISO string
};

export const posts: PostType[] = [
  {
    slug: "tanstack-start-vs-nextjs",
    title: "TanStack Start vs Next.js: A Thoughtful Comparison",
    content: `
The React ecosystem continues to grow, offering developers multiple ways to build scalable and performant web applications. Among the newer options is TanStack Start, which stands alongside established frameworks like Next.js. While both aim to support full-stack React development, they differ significantly in philosophy and approach.

### Understanding TanStack Start
TanStack Start is a modern full-stack React framework created by the team behind TanStack Query and TanStack Router. It is designed around the idea of explicitness and composability. Instead of hiding complexity behind framework-level abstractions, TanStack Start allows developers to make intentional decisions about routing, data fetching, and server-side logic.

By building directly on TanStack’s proven libraries and using Vite-based tooling, TanStack Start offers a setup that feels close to “plain React,” while still providing the essentials needed for full-stack development. This approach appeals to developers who value transparency and long-term maintainability.

### Understanding Next.js
Next.js is a mature and widely adopted React framework that emphasizes convention over configuration. It offers features such as file-based routing, server-side rendering, static site generation, API routes, and built-in performance optimizations. These conventions reduce setup time and allow teams to move quickly from idea to production.

Because many architectural decisions are handled by the framework, Next.js is especially attractive to teams and developers who prefer a structured, opinionated environment with strong community support.

### Key Differences in Approach
At its core, the difference between TanStack Start and Next.js lies in control versus abstraction. TanStack Start provides flexibility and encourages developers to understand each layer of their application. Next.js, on the other hand, prioritizes productivity by abstracting common patterns and offering sensible defaults.

### Conclusion
TanStack Start is not meant to replace Next.js, but to offer an alternative for developers who want more control and a clearer mental model of their applications. Next.js remains a strong choice for rapid development and production-ready features. Choosing between them depends on your workflow preferences, team experience, and the level of control you want over your stack.
    `,
    createdAt: "2025-12-23T00:00:00.000Z",
  },
  // You can add more posts here
];
