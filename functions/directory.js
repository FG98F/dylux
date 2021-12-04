const fs = require('fs');
let direc = JSON.parse(fs.readFileSync('./database/directory.json'));

/**
 * add img
 * @param { string } value
*/
const addImage = (value) => {
  text = value;
  direc.image.push(text);
  fs.writeFileSync('./database/directory.json', JSON.stringify(direc, null, '\t'));
};

/**
 * add video
 * @param { string } value
*/
const addVideo = (value) => {
  text = value;
  direc.video.push(text);
  fs.writeFileSync('./database/directory.json', JSON.stringify(direc, null, '\t'));
};

/**
 * add audio
 * @param { string } value
*/
const addAudio = (value) => {
  text = value;
  direc.audio.push(text);
  fs.writeFileSync('./database/directory.json', JSON.stringify(direc, null, '\t'));
};

/**
 * add sticker 
 * @param { string } value
*/
const addStiker = (value) => {
  text = value;
  direc.sticker .push(text);
  fs.writeFileSync('./database/directory.json', JSON.stringify(direc, null, '\t'));
};

/**
 * add report 
 * @param { string } id 
 * @param { Object } value 
 */

const addReport = (id, value) => {
  text = value;
  obj = {
    id: id,
    report: value
  };
  direc.report.push(obj);
  fs.writeFileSync('./database/directory.json', JSON.stringify(direc, null, '\t'));
};

module.exports = {
  direc,
  addImage,
  addVideo,
  addStiker,
  addAudio,
  addReport
};