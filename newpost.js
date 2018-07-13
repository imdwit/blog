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