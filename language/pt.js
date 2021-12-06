// voice command 
exports.vnCmd = (v) => {
  return 'Use comandos com memos de voz, ative com o comando ' + v + 'voicecommand on/off';
};

// -- enviar mensaje 
exports.wait = `*⌛ _Carregando..._ ▬▬▬▭*`;
exports.bye = `tchau...`;
exports.done = `✅ Feito`;
exports.next = (value) => {
  return `Clique ao lado de *${value}* `;
};
exports.packon = 'Nome do pacote já registrado';
exports.packoff = 'O nome do pacote de mídia não está registrado no banco de dados.';
exports.liston = '✅ Lista de mídia armazenada no banco de dados';
exports.getlist = '✳️ Use o comando getimg/getvid/getav/getstik enviar um pacote de um meio\n*📌Exemplo* : /getimg auron';
exports.nolink = (value) => {
  return '✳️ Repita a adição de um link ' + value;
};
//--new
exports.lvl = `Nível`;
exports.nme = `Nome`;
exports.hi = `Olá`;
exports.gp = `Grupo`;
exports.restart = `✅ Reiniciando o Bot`;
exports.pinsp = `Velocidade`;
exports.pinse = `Segundos`;
exports.num = `Numero`;
exports.click = `Clique aqui`;
exports.next2 = `Próximo`;
exports.stima = `✳️ Envie uma imagem com o comando\n ou marcar uma imagem que foi enviada, *Videos 1-9 segundos* `;
exports.resulf = `Resultado`; 
exports.bugr = `Obrigado\nSeu relatório foi armazenado no banco de dados. `;
exports.linkgp = `Link do Grupo `;
exports.linkrevo = `Link do grupo cancelado`;
exports.newlink = `Novo link`;
exports.gpbt = `🛡️ Configurações do grupo\nAbra e feche o grupo`;
exports.gpbtt = `Escolha um abaixo`;
exports.gpopenb = `ABRIR`;
exports.gpcloseb = `FECHAR`;
exports.idiom = `Idioma`;
exports.wrn = `Aviso`;
exports.pfile = `PERFIL`;
exports.crtio = `o`;
exports.mbr = `Membros`;
exports.wlme = `Receber`;
exports.vtc = `VOTAÇÃO`;
exports.rzon = `Razão`;
exports.vyes = `Se você está de acordo`;
exports.vno = `Se você não concorda`;
exports.vrvt = `Veja a votação`;
exports.rtvt = `RESULTADOS DE VOTAÇÃO`;
exports.dlte = `Retirar`;
exports.setpmulti = `✅ O prefixo foi alterado para : *multiprefixo*`;
exports.setpnopre = `✅ O prefixo foi alterado para : *nopref*`;
exports.setponepre = `✅ O prefixo foi alterado para :`;
exports.setpall = `Prefixos Disponíveis`;
exports.setpnp = `Sem prefixo`;
exports.setpop = `Um prefixo`;
exports.setpmt = `Multi prefixo`;
exports.updatef = `*Atualizada*\n\nRelatório`;
exports.simn = `você quer conversar um pouco?\n\nResponder com`;
exports.simmsg = `(Sua mensagem)\n\n📌 Exemplo : `;
exports.chatboton = `✅ Você ativou *ChatBot* \n O que significa que podemos conversar ilimitadamente 😊`;
exports.chatbotoff = `✅ *ChatBot* Desativado`; 
exports.pptt = `Por favor selecione`;
exports.exple = `Exemplo`;
exports.emt = `Laço`;
exports.gst = `Ganhou`;
exports.pdt = `Você perdeu`;
exports.pptuser = `Vocês`;
exports.papel = `papel`;
exports.tijera = `tesoura`;
exports.piedra = `pedra`;
exports.foll = `Me siga em Instagram \nhttps://www.instagram.com/fg98._`;
exports.plays = `Digite o título da música`;
exports.playm = `O arquivo é muito grande, a reprodução da música foi cancelada, o tamanho máximo do arquivo é`;
exports.listgp = `LISTA de Grupos`;
exports.calidad = `Qualidade`;
exports.tamaño = `Tamanho`;
exports.pfo = `Escolha um formato\n\nSe você tiver problemas com o comando, use`;
exports.pafo = `Selecione a música que deseja baixar`;
exports.pvfo = `Selecione o vídeo que deseja baixar`;
exports.titlp = `Qualificação`;
exports.timp = `Duração`;
exports.viep = `Visualizações`;
exports.vcnrst = 'Não detectado';
exports.vclect = 'Leitura de voz';
exports.listwb = 'Lista de evento';
exports.pregt = 'Ela me ama?';
exports.donate = `≡ *DOAÇÃO*
você pode doar se quiser ajudar a manter o bot ativo

▢ *PayPal*
• *Link :* https://tinyurl.com/PayPal-fg

_Doando você get_  *Premium* `;
exports.cretb = 'Crie seu próprio bot usando Termux';

// -- Decir tiempo
exports.night = 'Boa noite'
exports.evening = 'Boa tarde'
exports.day = 'Bom Dia'
exports.morning = 'bom Dia'


// -- mensaje solo 
exports.admin = '✳️ Este comando é apenas para *Admins* do grupo';
exports.group = '✳️ ¡Este comando só pode ser usado em grupos!';
exports.premium = '✳️ Este comando é apenas para membros *Premium*';
exports.premdl = '✳️ Desculpe, você não é um usuário premium, faça o download você mesmo usando o link\n*LINK* : ';
exports.botadmin = '✳️ ¡Para usar este comando, devo ser *Administrador*';
exports.owner = '✳️ Esta função é apenas para *Para o proprietário do bot*';
exports.isprem = '✳️ O usuário é o usuário premium anterior.';
exports.noprem = '✳️ O usuário ainda não é um usuário premium.';
exports.ban = '✳️ O status do usuário foi banido antes';
exports.noban = '✳️ O usuário não tem status de banido ';
exports.isadmin = '✳️ O bot não consegue entrar como administrador';
exports.oversize = '⚠️ O tamanho do arquivo excede o tamanho especificado, faça o download você mesmo através do link abaixo\n*🔗 Link* : ';

// -- texto
exports.notag = '✳️ Marque um membro do grupo';
exports.nonum = '✳️ Repita a adição do número de destino';
exports.notext = '✳️ Repita a adição de texto';
exports.reply = '✳️Responder a uma mensagem...';
exports.replyStic = '✳️Responder a um adesivo...';
exports.replyVid = '✳️ Responder a um vídeo...';
exports.replyVn = '✳️ Responder a um áudio...';
exports.replyImg = '✳️ Responda a uma imagem...';
exports.noreply = '✳️ A mensagem que você respondeu não continha uma resposta';
exports.nolink = (value) => {
  return `✳️ Repita a adição de um link de *${value}*`;
};
exports.addwarn = `⚠️ Aviso\nvocê pega 1 aviso`;
exports.delwarn = `⚠️ Aviso\n Diminuiu 1 aviso`;
exports.cekwarn = (warn) => {
  return `≡ AVISOS \n\n▢ Total  : *${warn}*`;
};
exports.nowarn = `✳️ O usuário não tem nenhum aviso`;

exports.Pbahasa = `✳️ Selecione o idioma que deseja usar

*Idiomas disponibles*
- es (Spanish) 
- id (Indonesia) 
- en (English)
- pt (Portugués)

📌 Exemplo : */language en*`;
exports.nobahasa = `Idioma não disponível

*Idiomas disponibles*
- es (Spanish) 
- id (Indonesia) 
- en (English)
- pt (Portugués)

📌 Exemplo : */language en*`;

exports.online = '✅ Bot ativo neste grupo'
exports.offline = '✅ O bot foi desabilitado neste grupo'

// -- grupo
exports.onwa = '✳️ O usuário já está no grupo';
exports.sendlink = '✅ Envie um convite para';
exports.open = '✅ Grupo aberto agora *todos os participantes* podem escrever';
exports.close = '✅ Grupo fechado agora *apenas administradores* podem escrever';
exports.name = (value) => {
  return `✅ O nome foi alterado para \n\n*${value}*`;
};
exports.desk = (value) => {
  return `✅ Descrição do grupo alterada para \n\n${value}`;
};
exports.promote = (value) => {
  return `✅  *${value}* Promovido como administrador`;
};
exports.demote = (value) => {
  return '✅ Admin degradado' + value;
};

exports.kick = (value) => {
  return '✅ Pedido recebido, emitido '+value;
};
exports.On = (value) => {
 return `✅ Ser ativo *${value}* neste grupo`;
};
exports.Off = (value) => {
  return `✅ *${value}* desabilitado para este grupo`;
};
exports.Thison = (value) => {
  return `✳️ *${value}* Foi ativado antes`;
};
exports.Thisoff = (value) => {
return `✳️ *${value}* foi desativado antes`;
};
exports.OnorOff = '✳️ Repita a adição on/off';
exports.antilink = '⚠️ Você foi detectado enviando um link de um grupo do WhatsApp';

exports.setwel = (value) => { 
  return `✳️ Digite sua mensagem de *boas-vindas*

*📌 Exemplo:*
/setwelcome Receber @user  para @group

Tag : @user 
Nome : @name
Bio : @bio
Encontro : @date
Nome do grupo : @group
Descrição : @desc

*Exemplos para cada função*\n` + value;
};

exports.setbye = (value) => {
  return `✳️ Digite a mensagem *Farewell*
  
*📌 Exemplo:*
/setbye Tchau  @user

*Exemplos para cada função*\n` + value;
};

exports.setweldone = (value, fungsi) => {
  return `✅ *Bem-vindo* conjunto de mensagens`;
};

exports.setbyedone = (value, fungsi) => {
  return `✅ Conjunto de mensagens de adeus*`;
};
//--
exports.default = (value) => {
  return value + ' Volte para as configurações iniciais';
};

exports.main = (value) => {
  return '✳️ Ainda há um ' + value + ' no curso';
};
exports.nomain = (value) => {
  return `✳️ Não há *${value}* no curso`;
};
exports.inmain = (value) => {
  return `Você já votou *${value}*`
};
exports.hapus = (value) =>{
  return `✅ Foi deletado *${value}* deste grupo`;
};

// juegos
exports.onGame = '⚠️ Ainda há perguntas sem resposta neste bate-papo.';
exports.soal = (text1, text2, text3) => {
  return `${text1}

⏳ *Time*
${text2}

*RECOMPENSA*
${text3} Coins

Responda a esta mensagem para responder
A dica de resposta aparece no último 10 segundos.`;
};

exports.timeout = '⏳ O tempo acabou, a resposta é ';
exports.salah = '❎ *Incorreta* !\nTente novamente';
exports.hampir = '*✳️ Você quase conseguiu* \nContinue tentando!';
exports.benar = (value, value2) => {
  return `✅ *Resposta correta!*\n\n‣ Ganhou : *${value2}* Coins`;
};

// afk
exports.with = '▢ Razão : ';
exports.onAfk = (value) => {
  return `😴 *AFK* \n\nAgora você está afk até enviar uma mensagem\n${value}`
};
exports.offAfk = 'Você voltou de AFK'
exports.inAfk = (value, time) => {
  return `O usuário que você mencionou é AFK  \n${value}\n▢ A partir de : ${time} `
}
