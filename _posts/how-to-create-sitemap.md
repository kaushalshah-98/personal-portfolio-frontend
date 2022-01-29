---
title: "How to Create Sitemap in NextJS"
description: "Let’s learn how to easily add static and dynamic sitemaps for our NextJS websites. And let's not forget to include all the good things about google analytics as well"
date: 1 January 2020
---

Occaecat Lorem mollit cupidatat elit incididunt non consectetur eiusmod qui adipisicing duis sunt irure minim.

## Lorem Ipsum

Tempor sunt deserunt qui quis commodo voluptate laboris est ut qui in. Nostrud ut laborum ea mollit incididunt ea culpa nisi sint excepteur do. Eiusmod aliqua in adipisicing cupidatat excepteur.

## Hipster Ipsum

I'm baby enamel pin swag gastropub bitters migas lomo, dreamcatcher chartreuse vegan normcore. Trust fund chicharrones artisan live-edge portland swag jianbing knausgaard put a bird on it brunch pitchfork bushwick kinfolk. Unicorn bicycle rights waistcoat messenger bag hexagon glossier farm-to-table kinfolk poutine occupy vexillologist gochujang skateboard activated charcoal. Street art air plant tbh chicharrones, try-hard listicle bushwick chia glossier.

> Street art air plant tbh

<!-- ```javascript
const name = "faisal";

function getMyName() {
  return "nothing";
}
``` -->

```javascript
exports.handler = async function (event: any, context: any) {
  console.log("request ", JSON.stringify(event));

  const responseText = "Hello from lambda";

  return {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": `Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type
        Access-Control-Request-Method, Access-Control-Request-Headers, Authorization`,
    },

    isBase64Encoded: false,
    multiValueHeaders: {},
    statusCode: 200,
    body: JSON.stringify(responseText),
  };
};
```

Let's look at another component

<!--
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
``` -->
