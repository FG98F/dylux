// voice command 
exports.vnCmd = (v) => {
  return 'Use commands with voice memos, activate with command ' + v + 'voicecommand on/off';
};

// -- send message 
exports.wait = `*⌛ _Loading..._ ▬▬▬▭*`;
exports.bye = `Goodbye...`;
exports.done = `✅ Finished...`;
exports.next = (value) => {
  return `Click next for *${value}*`;
};
exports.packon = 'Pack name already registered';
exports.packoff = 'The name of the media pack is not registered in the database';
exports.liston = '✅ List of media stored in database';
exports.getlist = '✳️ Use the command getimg/getvid/getav/getstik to fetch each media pack\n*📌 Example* : /getimg auron';
exports.nolink = (value) => {
  return '✳️ Please repeat by adding a link ' + value;
};
//--new
exports.lvl = `Level`;
exports.nme = `Name`;
exports.hi = `Hi`;
exports.gp = `Group`;
exports.restart = `✅ Restarting Bot`;
exports.pinsp = `Speed`;
exports.pinse = `Seconds`;
exports.num = `Number`;
exports.click = `Click here`;
exports.next2 = `Next`;
exports.stima = `✳️ Send an image with the command\n or tag an image that has been submitted, *Videos 1-9 seconds* `;
exports.resulf = `Result`; 
exports.bugr = `Thank you \nYour report has been stored in the database.`;
exports.linkgp = `Group Link`;
exports.linkrevo = `Group link canceled`;
exports.newlink = `New link`;
exports.gpbt = `🛡️ Group settings\nOpen and close the group`;
exports.gpbtt = `Choose one below`;
exports.gpopenb = `OPEN`;
exports.gpcloseb = `CLOSE`;
exports.idiom = `language`;
exports.wrn = `Warning`;
exports.pfile = `PROFILE`;
exports.crtio = `The`;
exports.mbr = `Members`;
exports.wlme = `Welcome`;
exports.vtc = `VOTING`;
exports.rzon = `Reason`;
exports.vyes = `If you agree`;
exports.vno = `If you do not agree`;
exports.vrvt = `See Voting`;
exports.rtvt = `VOTING RESULTS`;
exports.dlte = `Delete`;
exports.setpmulti = `✅ The prefix was changed to : *multiprefix*`;
exports.setpnopre = `✅ The prefix was changed to : *nopref*`;
exports.setponepre = `✅ The prefix was changed to :`;
exports.setpall = `Available Prefixes`;
exports.setpnp = `No prefix`;
exports.setpop = `One prefix`;
exports.setpmt = `Multi prefix`;
exports.updatef = `*Updated*\n\nchanges`;
exports.simn = `do you want to chat for a while?\n\nReply with`;
exports.simmsg = `(Your message)\n\n📌 Example : `;
exports.chatboton = `✅ You activated *ChatBot* \n Which means we can chat unlimitedly 😊`;
exports.chatbotoff = `✅ *ChatBot* disabled`; 
exports.pptt = `Please select`;
exports.exple = `Example`;
exports.emt = `Tie`;
exports.gst = `Won`;
exports.pdt = `You lost`;
exports.pptuser = `You`;
exports.papel = `paper`;
exports.tijera = `scissor`;
exports.piedra = `stone`;
exports.foll = `Follow me in Instagram \nhttps://www.instagram.com/fg98._ `;
exports.plays = `Enter a song title`;
exports.playm = `The file is too large, music playback was canceled, the maximum file size is`;
exports.listgp = `LIST of Groups`;
exports.calidad = `Quality`;
exports.tamaño = `Size`;
exports.pfo = `Choose a format\n\nIf you have problems with the command use`;
exports.pafo = `Select the music you want to download`;
exports.pvfo = `Select the video you want to download`;
exports.titlp = `Title`;
exports.timp = `Duration`;
exports.viep = `Views`;
exports.vcnrst = 'Not detected';
exports.vclect = 'Voice reading';
exports.listwb = 'Event list';
exports.pregt = 'She Loves Me?';
exports.donate = `≡ *DONATION*
you can donate if you want to help keep the bot active

▢ *PayPal*
• *Link :* https://tinyurl.com/PayPal-fg

_By donating you get_  *Premium* `;
exports.cretb = 'Create your own bot using Termux';

// -- Saying time
exports.night = 'Good night'
exports.evening = 'Good afternoon'
exports.day = 'Good day'
exports.morning = 'Good morning'


// -- message only
exports.admin = '✳️ Sorry, this command can only be run by group admins';
exports.group = '✳️ Sorry, this command can only be run in groups';
exports.premium = '✳️ Sorry, this command can only be used by premium users';
exports.premdl = '✳️ Sorry you are not a premium user, download it yourself using the link\n*LINK* : ';
exports.botadmin = '✳️ This command can be used when the bot becomes admin';
exports.owner = '✳️ This command can be used by owner bots';
exports.isprem = '✳️ User is the previous premium user';
exports.noprem = '✳️ The user is not yet a premium user';
exports.ban = '✳️ User status has been banned before';
exports.noban = '✳️ User does not have banned status';
exports.isadmin = '✳️ Bot can\'t log admin';
exports.oversize = '⚠️ The file size exceeds the specified size, please download it yourself via the link below\n*🔗 Link* : ';

// -- text
exports.notag = '✳️ Tag a group member';
exports.nonum = '✳️ Please repeat by adding the target number';
exports.notext = '✳️ Please repeat by adding text';
exports.reply = '✳️ Reply target message...';
exports.replyStic = '✳️ Reply message sticker...';
exports.replyVid = '✳️ Reply the video...';
exports.replyVn = '✳️ Reply the audio...';
exports.replyImg = '✳️ Reply the imagenya...';
exports.noreply = '✳️ The message you replied to did not contain a reply';
exports.nolink = (value) => {
  return `✳️ Please repeat by adding a link *${value}*`;
};
exports.addwarn = `⚠️ Warning\nYou get 1 warning`;
exports.delwarn = `⚠️ Warning\nYour warning has decreased by 1 warning`;
exports.cekwarn = (warn) => {
  return `≡ WARNINGS \n\n▢ Total  : *${warn}*`;
};
exports.nowarn = `✳️ User has no warning`;
 
exports.Pbahasa = `✳️ Select the language you want to use

*Available languages*
- es (Spanish) 
- id (Indonesia) 
- en (English)
- pt (Portugués)

📌 Example : */language es*`;
exports.nobahasa = `Language not available

*Available languages*
- es (Spanish) 
- id (Indonesia) 
- en (English)
- pt (Portugués)

📌 Example : */language es*`;

exports.online = '✅ Successfully turned on the bot in this group';
exports.offline = '✅ Successfully turned off bots in this group';

// -- group
exports.onwa = '✳️ The user is already in the group';
exports.sendlink = '✅ Send an invitinvitation';
exports.open = '✅ Changed group settings to allow all members to send messages in this group';
exports.close = '✅ Changed group settings to allow only admins to send messages in this group';
exports.name = (value) => {
  return `✅ Change the subject to *${value}*`;
};
exports.desk = (value) => {
  return `✅ Changed the group description to \n\n${value}`;
};
exports.promote = (value) => {
  return `✅ Successfully promoted *${value}* as admin`;
};
exports.demote = (value) => {
  return '✅ Successfully demoted ' + value;
};

exports.kick = (value) => {
  return '✅ Order received, issued '+value;
};
exports.On = (value) => {
 return `✅ Turn on *${value}* in this group`;
};
exports.Off = (value) => {
  return `✅ *${value}* turned off for this group`;
};
exports.Thison = (value) => {
  return `✳️ *${value}* it\'s been on before`;
};
exports.Thisoff = (value) => {
return `✳️ *${value}* not turned on before`;
};
exports.OnorOff = '✳️ Please repeat by adding on/off';
exports.antilink = '❎ We do not allow links from other groups!\nSorry you will be expelled';

exports.setwel = (value) => { 
  return `✳️ Enter your *welcome* message

*📌 Example:*
/setwelcome Welcome @user to  @group
 
Tag : @user 
Name : @name
Bio : @bio
Date : @date
Group Name : @group
Description : @desc

*Examples for each function*\n` + value;
};

exports.setbye = (value) => {
  return `✳️ Enter your *Farewell* message
  
*📌 Example:*
/setbye  goodbye  @user

*Examples for each function*\n` + value;
};

exports.setweldone = (value, fungsi) => {
  return `✅ *Welcome* message set`;
};

exports.setbyedone = (value, fungsi) => {
  return `✅ *bye* message set`;
};
//--
exports.default = (value) => {
  return value + ' Return to initial settings';
};

exports.main = (value) => {
  return '✳️ There still is ' + value + ' in progress!';
};
exports.nomain = (value) => {
  return '✳️ There is not any ' + value + ' in progress!';
};
exports.inmain = (value) => {
  return 'You\'ve done ' + value
};
exports.hapus = (value) =>{
  return `✅ Successfully deleted *${value}* in this group`;
};

// game
exports.onGame = '⚠️ There are still unanswered questions in this chat';
exports.soal = (text1, text2, text3) => {
  return `${text1}

*⏳ Timeout*
${text2}

*POIN*
${text3}

Reply this message to answer
The answer hint appears in the last 10 seconds`;
};

exports.timeout = '⏳ Time out the answer is ';
exports.salah = '*❎ Wrong* !\nTry again';
exports.hampir = '✳️ *A little more* !\nTry again';
exports.benar = (value, value2) => {
  return `✅ *Right*\nThe answer is ${value}\nyou get ${value2} Coins`;
};

// afk
exports.with = 'with reason ';
exports.onAfk = (value) => {
  return 'you are now afk ' + value
};
exports.offAfk = 'You\'re back from AFK'
exports.inAfk = (value, time) => {
  return 'User is in Apk mode ' + value + '\n On : ' + time
}
