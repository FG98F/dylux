const { WAConnection: _WAConnection, ReconnectMode, MessageType, MessageOptions } = require('@adiwajshing/baileys');
const simple = require("./whatsapp/connecting.js");
const WAConnection = simple.WAConnection(_WAConnection);
const Fg = new WAConnection();
const {
  cekWelcome,
  cekAntilink,
  cekBadword,
  cekAntidelete,
  cekDetect
} = require('./functions/group');
const {
  getCustomWelcome,
  getCustomBye
} = require('./functions/welcome')
const fs = require("fs");
const thumb = fs.readFileSync('./temp/fg.jpg')
const { getBuffer } = require('./library/fetcher')
const { week, time, tanggal} = require("./library/functions");
const { color } = require("./library/color");
async function starts() {
	Fg.autoReconnect = ReconnectMode.onConnectionLost;
	Fg.version = [3, 3234, 9];
	Fg.logger.level = 'warn';
	Fg.on('qr', () => {
	console.log(color('[QR]','white'), color('Escanee el codigo QR para conectarse'));
	});

	fs.existsSync('./whatsapp/session.json') && Fg.loadAuthInfo('./whatsapp/session.json');
	
	await Fg.connect({timeoutMs: 30*1000});
  fs.writeFileSync('./whatsapp/session.json', JSON.stringify(Fg.base64EncodedAuthInfo(), null, '\t'));
  link = 'https://chat.whatsapp.com/---fg--'
  Fg.query({ json:["action", "invite", `${link.replace('https://chat.whatsapp.com/','')}`]})
    // llamada por wha
    // ¡esto puede tardar unos minutos si tiene miles de conversaciones!!
    Fg.on('chats-received', async ({ hasNewChats }) => {
        console.log(`‣ Tienes ${Fg.chats.length} chats, nuevos chats disponibles: ${hasNewChats}`);

        const unread = await Fg.loadAllUnreadMessages ();
        console.log ("‣ Tienes " + unread.length + " mensajes no leídos");
    });
    // ¡esto puede tardar unos minutos si tiene miles de contactos!
    Fg.on('contacts-received', () => {
        console.log('‣ Tienes ' + Object.keys(Fg.contacts).length + ' contactos');
    });
    
  //--- Bienvenida y Despedida 
  Fg.on('group-participants-update', async (anu) => {
      isWelcome = cekWelcome(anu.jid);
      if(isWelcome === true) {
      	
      try {
	      ppimg = await Fg.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`);
	    } catch {
	      ppimg = 'https://i.ibb.co/PZNv21q/Profile-FG98.jpg';
	    } 
	
      mdata = await Fg.groupMetadata(anu.jid);
      if (anu.action == 'add') {
        num = anu.participants[0];
          
	    let username = Fg.getName(num)
        let about = (await Fg.getStatus(num).catch(console.error) || {}).status || ''
        let member = mdata.participants.length
        let tag = '@'+num.split('@')[0]
	    let buff = await getBuffer(ppimg);
	    let descrip = mdata.desc
	    let welc = await getCustomWelcome(mdata.id)
	    capt = welc.replace('@user', tag).replace('@name', username).replace('@bio', about).replace('@date', tanggal).replace('@desc', descrip).replace('@group', mdata.subject);
	      Fg.send2ButtonLoc(mdata.id, buff, capt, 'Sígueme en Instagram\nhttps://www.instagram.com/fg98._', '⦙☰ MENU', '/menu', '⏍ INFO GP', '/infogp', false, {
	      contextInfo: {  
            mentionedJid: Fg.parseMention(capt)
	      } 
	    });
        } else if (anu.action == 'remove') {
        num = anu.participants[0];
        let username = Fg.getName(num)
        let about = (await Fg.getStatus(num).catch(console.error) || {}).status || ''
        let member = mdata.participants.length
        let tag = '@'+num.split('@')[0]
        let buff = await getBuffer(ppimg);
        let bye = await getCustomBye(mdata.id);
        capt = bye.replace('@user', tag).replace('@name', username).replace('@bio', about).replace('@date', tanggal).replace('@group', mdata.subject);
        Fg.sendButtonLoc(mdata.id, buff, capt, 'Sígueme en Instagram\nhttps://www.instagram.com/fg98._', '👋🏻', 'unde', false, {
	      contextInfo: { 
            mentionedJid: Fg.parseMention(capt)
	      } 
	    });
	//--
      }
  }
});

//-- Detector Promovido/Degradado
Fg.on('group-participants-update', async (anu) => {
  metdata = await Fg.groupMetadata(anu.jid);
  isDetect = cekDetect(metdata.id);
  if(isDetect === false) return ;
  
  try {
	      ppimg = await Fg.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`);
	    } catch {
	      ppimg = 'https://i.ibb.co/PZNv21q/Profile-FG98.jpg';
	    } 
	
  if (anu.action == 'promote') {
    num = anu.participants[0];
    let img = await getBuffer(ppimg);
    let about = (await Fg.getStatus(num).catch(console.error) || {}).status || ''
    let username = Fg.getName(num)
    capt = `≡ *PROMOTE DETECTED*
    
*NUEVO ADMIN*
┌──────────────
▢ *Nombre* : ${username}
▢ *Numero* : @${num.split('@')[0]}
▢ *Info* : ${about} 
▢ *Hora* : ${time}
└──────────────`;
    return Fg.sendMessage(metdata.id, img, MessageType.image, {caption: capt, contextInfo: {'mentionedJid': [num]}});
               
  } else if (anu.action == 'demote'){
    num = anu.participants[0];
    let img = await getBuffer(ppimg);
    let about = (await Fg.getStatus(num).catch(console.error) || {}).status || ''
    let username = Fg.getName(num)
    capt = `≡ *DEMOTE DETECTED*
    
*ADMIN DEGRADADO*
┌──────────────
▢ *Nombre* : ${username}
▢ *Numero* : @${num.split('@')[0]}
▢ *Info* : ${about} 
▢ *Hora* : ${time}
└──────────────`;
    Fg.sendMessage(metdata.id, img, MessageType.image, {caption: capt, contextInfo: {'mentionedJid': [num]}});
  }
})

//--antidelete 
Fg.on('message-delete', async (m) => {
    if (m.key.fromMe) return;
    let isAntidelete = cekAntidelete(m.key.remoteJid);
    if (isAntidelete === false) return;
    m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message;
    const Type = Object.keys(m.message)[0];
    await Fg.reply(m.key.remoteJid, `
━━━━⬣  𝘼𝙉𝙏𝙄 𝘿𝙀𝙇𝙀𝙏𝙀  ⬣━━━━

*▢ Nombre :* @${m.participant.split`@`[0]} 
*▢ Hora :* ${time}

━━━━⬣  𝘼𝙉𝙏𝙄 𝘿𝙀𝙇𝙀𝙏𝙀  ⬣━━━━

`.trim(), m.message, {
      contextInfo: {
        mentionedJid: [m.participant]
      }
    });
    Fg.copyNForward(m.key.remoteJid, m.message).catch(e => console.log(e, m));
  });

    
//---llamada auto block
Fg.on("CB:Call", json => {
  let call;
  calling = JSON.parse(JSON.stringify(json));
  call = calling[1].from;
  Fg.sendMessage(call, `*${Fg.user.name}* No hagas llamadas al bot, tu número se bloqueará automáticamente`, MessageType.text).then(() => Fg.blockUser(call, "add"));
}); 


}

/**
 * 
 * @param {string} módulo Nombre o ruta del módulo
 * @param {function} cb <optional> 
 */
 
function nocache(module, cb = () => { }) {
  console.log("‣ Modulo", `'${module}'`, "se está revisando si hay cambios");
  fs.watchFile(require.resolve(module), async () => {
    await uncache(require.resolve(module));
    cb(module);
    });
    }


/**
 * Uncache un modulo
 * @param {string} módulo Nombre o ruta del módulo
 */
function uncache(module = '.') {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(module)];
      resolve();
      } catch (e) {
        reject(e);
        }
        });
        }

require('./index.js');
nocache('./index.js', module => console.log(color(`Index.js is now updated!`)));


Fg.on('chat-update', async (message) => {
require('./index.js')(Fg, message);
});

starts();
