const fs = require('fs');

const d = new Date();

// const month = d.Month();
const month = d => {
  const m = d.getMonth() + 1;
  return m < 10 ? `0${m}` : m;
}

const slug = process.argv[2].toLocaleLowerCase().split(' ').join('-');
const date = `${d.getFullYear()}-${month(d)}-${d.getDate()}`
const fileName = `${date}-${slug}`;
console.log('n', fileName)
const tmplt =
`---
layout: post
title:  "${process.argv[2]}"
---
`
fs.writeFileSync(`${__dirname}/_posts/${fileName}.markdown`, tmplt)