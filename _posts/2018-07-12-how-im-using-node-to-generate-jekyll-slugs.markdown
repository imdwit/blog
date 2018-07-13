---
layout: post
title:  "How I'm using node to generate jekyll slugs"
---

I wrote a little script to generate the `YYYY-MM-DD-{SLUG}.markdown` files.

As well as set up the layout and title.

Here it is in it's entirety:

```
const fs = require('fs');

const d = new Date();
const month = d => {
  const m = d.getMonth() + 1;
  return m < 10 ? `0${m}` : m;
};

const postName = process.argv[2];
const slug = postName.toLocaleLowerCase().replace(/[^\w\s]/gi, '').split(' ').join('-');
const datePrefix = `${d.getFullYear()}-${month(d)}-${d.getDate()}`
const fileName = `${datePrefix}-${slug}`;
const tmplt =
  `---
layout: post
title:  "${postName}"
---
`;
fs.writeFileSync(`${__dirname}/_posts/${fileName}.markdown`, tmplt);
```

Then I just have a `package.json` file with a script `"new-post": "node newpost.js"`

The format is `npm run new-post {title of post}`

To generate it all I have to do is run:

`npm run new-post "How I'm using node to generate jekyll slugs"`

The filename generated looks like: `2018-07-12-how-im-using-node-to-generate-jekyll-slugs.markdown`

Notice how it strips punctuation.

And its contents look something like:

```
---
layout: post
title:  "How I'm using node to generate jekyll slugs"
---
```
to the beginning of my file, so I don't have to copy and paste it from somewhere.

I'm ok with long slugs. Feel free to modify it. Maybe add `postName.slice(0, 10)`.


I just figured if I was going to try to blog more, I want it to be as frictionless as possible.

Might have to tweak it in the future, but for now it works.