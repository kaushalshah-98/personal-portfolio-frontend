import matter from "gray-matter";

export const getPosts = () =>
  ((context) => {
    const keys = context.keys();
    const documents = keys.map(context);

    return keys
      .map((key: string, index: number) => {
        // We'll use the filename as a 'slug' for the post - this will be used for the post's route
        const slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
        const document = documents[index];
        const { data: frontmatter, content: body } = matter(document.default);

        return { frontmatter, body, slug };
      })
      .sort(
        (post1: any, post2: any) =>
          new Date(post2.frontmatter.date).getDate() -
          new Date(post1.frontmatter.date).getDate()
      );
  })(
    // Since Next.js uses webpack we can take advantage of webpack's `require.context` to load our markdown files
    (require as any).context("./", true, /\.md$/)
  );
