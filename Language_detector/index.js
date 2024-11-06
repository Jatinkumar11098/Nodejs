const colors = require('colors');
const franc = require('franc');
const input = process.argv[2];
const langs = require('langs');
const code = franc(input);
const language = langs.where("3", code);
if (code === 'und') {
    console.log('Sorry, Enter the valid laguage sentence'.red)
}
else {
    console.log(language.name.green);
}
