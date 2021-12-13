const fs = require('fs');
// new function
function readfile(file) {
  return JSON.parse(fs.readFileSync(file));
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

// -- file from result json
const _verdad = readfile('./result/random/verdad.json');
const _reto = readfile('./result/random/reto.json');

// -- get results
const verdad = () => {
 return pickRandom(_verdad);
};

const reto = () => {
 return pickRandom(_reto);
};



// -- result download
const { pinterest } = require('./download/pinterest_img');
const { igDl } = require('./download/instagramPost_dl');
const { Ttdl } = require('./download/tiktokPost_dl');
const { yta, ytv } = require('./download/yt_download');
const { mfire } = require('./download/mediafire.js')
// -- result search
const { playstore } = require('./search/playstore');

// information
const { namaninja, purba, blackpill, typewriter, sans, castle } =  require('./informasi/text_generator');

module.exports = {
  verdad,
  reto,
  namaninja,
  purba,
  blackpill, 
  typewriter, 
  sans, 
  castle,
  pinterest,
  playstore,
  igDl,
  Ttdl,
  yta,
  ytv, 
  mfire
};
