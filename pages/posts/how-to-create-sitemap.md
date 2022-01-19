---
title: "First Post!"
description: "New Year's resolution achieved, I started my very own blog!"
date: 1 January 2020
---

I wish I'd done this ages ago.

## <!-- ./posts/second_post.md -->

---

title: "Second Post"
description: "And I even followed through with a second post!"
date: 8 January 2020

---

Occaecat Lorem mollit cupidatat elit incididunt non consectetur eiusmod qui adipisicing duis sunt irure minim.

## Lorem Ipsum

Tempor sunt deserunt qui quis commodo voluptate laboris est ut qui in. Nostrud ut laborum ea mollit incididunt ea culpa nisi sint excepteur do. Eiusmod aliqua in adipisicing cupidatat excepteur.

## Hipster Ipsum

I'm baby enamel pin swag gastropub bitters migas lomo, dreamcatcher chartreuse vegan normcore. Trust fund chicharrones artisan live-edge portland swag jianbing knausgaard put a bird on it brunch pitchfork bushwick kinfolk. Unicorn bicycle rights waistcoat messenger bag hexagon glossier farm-to-table kinfolk poutine occupy vexillologist gochujang skateboard activated charcoal. Street art air plant tbh chicharrones, try-hard listicle bushwick chia glossier.

> Street art air plant tbh

```javascript
const name = "faisal";

function getMyName() {
  return "nothing";
}
```

Let's look at another component

```jsx
function BlogDetails({ postDetails }: BlogDetailsProps) {
  console.log("post details ", postDetails);

  const getAction = () => {
    return "this is great";
  };

  return (
    <div className={styles.container}>
      <Markdown
        className={styles.blog}
        options={{
          wrapper: "article",
          forceBlock: true,
          overrides: {
            code: {
              component: CodeBlock,
            },
          },
        }}
      >
        {postDetails.body}
      </Markdown>
    </div>
  );
}
```

```sh
cd my-directory
```
