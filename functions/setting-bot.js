const fs = require('fs');

const st = JSON.parse(fs.readFileSync('./database/setting-bot.json'));

/**
 * 
 * @param { Object } value
*/
const addName = (value) => {
st.nama = value;
fs.writeFileSync('./database/setting-bot.json', JSON.stringify(st, null, "\t"));
};

/**
 *  
 * @param { Object } value
*/
const addAuthor = (value) => {
st.author = value;
fs.writeFileSync('./database/setting-bot.json', JSON.stringify(st, null, "\t"));
};

/**
 *  
 * @param { Object } value
*/
const addPackname = (value) => {
st.packname = value;
fs.writeFileSync('./database/setting-bot.json', JSON.stringify(st, null, "\t"));
};

/**
 *  
 * @param { Object } value
*/
const addWm = (value) => {
st.wm = value;
fs.writeFileSync('./database/setting-bot.json', JSON.stringify(st, null, "\t"));
};

/**
 *  
 * @param { Number } value
*/
const addPoingame = (value) => {
st.poinGame = value;
fs.writeFileSync('./database/setting-bot.json', JSON.stringify(st, null, "\t"));
};

/**
 *  
 * @param { Number } value
*/
const addGamewaktu = (value) => {
st.gameWaktu = value;
fs.writeFileSync('./database/setting-bot.json', JSON.stringify(st, null, "\t"));
};

/**
 *  
 * @param {Boolean } true
*/
const addCmd = () => {
st.totalcommand += 1;
fs.writeFileSync('./database/setting-bot.json', JSON.stringify(st, null, "\t"));
};


module.exports = {
  st,
  addName,
  addAuthor,
  addPackname,
  addWm,
  addGamewaktu,
  addPoingame,
  addCmd
};