// voice command 
exports.vnCmd = (v) => {
  return 'Gunakan perintah menggunakan voice note, aktifkan menggunakan perintah ' + v + 'voicecommand on/off';
};

// -- send message 
exports.wait = `*⌛ _Pengisian..._ ▬▬▬▭*`;
exports.bye = `Selamat tinggal...`;
exports.done = `✅ Selesai...`;
exports.next = (value) => {
  return 'Klik next untuk '+value+' selanjutnya';
};
exports.packon = 'Maaf kak perintah yang kaka minta tidak bisa diproses,karna nama pack yang kaka minta sudah terdaftar didalam database bot';
exports.packoff = 'Maaf kak perintah yang kaka minta tidak bisa diproses,karna nama pack media yang kaka minta tidak terdaftar didalam database bot';
exports.liston = '✅ List media yang tersimpan dalam database bot';
exports.getlist = '✳️ Silahkan gunakan perintah getimg/ getvid/ getav/ getstick untuk mengambil setiap pack media\n*📌 Contoh* : /getimg auron';
exports.nolink = (value) => {
  return '✳️ Link tidak tersedia! silahkan masukan perintah dengan menambahkan link ' + value;
};
//--new
exports.lvl = `Tingkat`; 
exports.nme = `Nama`;
exports.hi = `Halo`;
exports.gp = `Grup`;
exports.restart = `✅ Memulai ulang Bot`;
exports.pinsp = `Kecepatan`;
exports.pinse = `Detik`;
exports.num = `Nomor`;
exports.click = `Klik disini`;
exports.next2 = `Lanjut`;
exports.stima = `✳️ Kirim gambar dengan perintah\n atau tag gambar yang telah dikirimkan, *Video 1-9 detik* `;
exports.resulf = `Hasil`; 
exports.bugr = `Terima kasih \nLaporan Anda telah disimpan di database.`;
exports.linkgp = `Tautan Grup `;
exports.linkrevo = `Tautan grup dibatalkan`;
exports.newlink = `Tautan baru`;
exports.gpbt = `🛡️ Pengaturan grup\nBuka dan tutup grup`;
exports.gpbtt = `Pilih salah satu di bawah ini`;
exports.gpopenb = `MEMBUKA`;
exports.gpcloseb = `UNTUK MENUTUP`;
exports.idiom = `Bahasa`;
exports.wrn = `Peringatan`;
exports.pfile = `PROFIL`;
exports.crtio = `Diciptakan`;
exports.mbr = `Anggota`;
exports.wlme = `Selamat datang`;
exports.vtc = `PILIH`;
exports.rzon = `Alasan`;
exports.vyes = `Jika kamu setuju`;
exports.vno = `Jika Anda tidak setuju`;
exports.vrvt = `Lihat Pemungutan Suara`;
exports.rtvt = `HASIL PEMILIHAN`;
exports.dlte = `Menghapus`;
exports.setpmulti = `✅ Awalan diubah menjadi : *multiprefijo*`;
exports.setpnopre = `✅ Awalan diubah menjadi : *nopref*`;
exports.setponepre = `✅ Awalan diubah menjadi :`;
exports.setpall = `Available Prefixes`;
exports.setpnp = `No prefix`;
exports.setpop = `One prefix`;
exports.setpmt = `Multi prefix`;
exports.updatef = `*Diperbarui*\n\nLaporan`;
exports.simn = `apakah kamu ingin mengobrol sebentar?\n\nBalas dengan`;
exports.simmsg = `(Pesanmu)\n\n📌 Contoh : `;
exports.chatboton = `✅ Anda mengaktifkan *ChatBot* \n Yang berarti kita dapat mengobrol tanpa batas 😊`;
exports.chatbotoff = `✅ *ChatBot* dinonaktifkan`; 
exports.pptt = `Silahkan pilih`;
exports.exple = `Contoh`;
exports.emt = `Mengikat`;
exports.gst = `Won`;
exports.pdt = `Kamu kalah`;
exports.pptuser = `Anda`;
exports.papel = `kertas`;
exports.tijera = `gunting`;
exports.piedra = `batu`;
exports.foll = `Ikuti saya di Instagram \nhttps://www.instagram.com/fg98._`;
exports.plays = `Masukkan judul lagu`;
exports.playm = `File terlalu besar, pemutaran musik dibatalkan, ukuran file maksimum adalah`;
exports.listgp = `DAFTAR Grup`;
exports.calidad = `Kualitas`;
exports.tamaño = `Ukuran`;
exports.pfo = `Pilih format\n\nJika Anda memiliki masalah dengan perintah, gunakan`;
exports.pafo = `Pilih musik yang ingin Anda unduh`;
exports.pvfo = `Pilih video yang ingin Anda unduh`;
exports.titlp = `Kualifikasi`;
exports.timp = `Durasi`;
exports.viep = `Tampilan`;
exports.vcnrst = 'Tidak terdeteksi';
exports.vclect = 'Membaca suara';
exports.listwb = 'daftar acara';
exports.pregt = 'Dia mencintaiku?';
exports.donate = `≡ *SUMBANGAN*
Anda dapat menyumbang jika Anda ingin membantu menjaga bot tetap aktif

▢ *PayPal*
• *Link :* https://tinyurl.com/PayPal-fg

_Dengan berdonasi Anda mendapatkan_  *Premium* `;
exports.cretb = 'Buat bot Anda sendiri menggunakan Termux';

// -- Saying time
exports.night = 'Selamat Malam';
exports.evening = 'Selamat Sore';
exports.day = 'Selamat Siang';
exports.morning = 'Selamat Pagi';


// -- message only
exports.admin = `✳️ Yahh maaf, perintah ini hanya dapat dijalankan oleh admin group! \nsilahkan chat admin untuk menjalankan perintah tersebut`;
exports.group = `✳️ Yahh maaf, perintah ini hanya dapat dijalankan didalam group`;
exports.premium = `✳️ Yahh maaf, perintah ini hanya dapat digunakan oleh user premium`;
exports.premdl = `✳️ Yahh maaf kamu bukan user premium, download sendiri menggunakan link\n*LINK* : `;
exports.botadmin = `✳️ Perintah ini bisa digunakan ketika bot menjadi admin`;
exports.owner = `✳️ Waduh maaf kak perintah ini hanya bisa digunakan oleh owner bot`;
exports.isprem = `✳️ Yahh maaf User ini sudah dijadikan user premium sebelumnya`;
exports.noprem = `✳️ Maaf kak Hanya User Premium yang bisa menggunakan fitur ini,silahkan chat owner untuk membeli fitur premium`;
exports.ban = '✳️ User yang kaka masukan sudah dibanned sebelumnya,silahkan masukan perintah ini jika user ini belum terbanned oleh bot';
exports.noban = '✳️ User ini tidak memiliki status banned didalam database bot';
exports.isadmin = '✳️ Maaf bot tidak bisa mengeluarkan admin';
exports.oversize = 'Ukuran file melebihi ukuran yang di tentukan, download sendiri melalui link dibawah\n*🔗 Link* : ';

// -- text
exports.notag = '✳️ Coba tag salah satu anggota group';
exports.nonum = '✳️ Silahkan ulangi peringah ini dengan menambahkan nomor target atau reply chat';
exports.notext = '✳️ Silahkan ulangi perintah ini dengan menambahkan text';
exports.reply = '✳️ Reply pesan target...';
exports.replyStic = '✳️ Reply pesan stickernya...';
exports.replyVid = '✳️ Reply videonya...';
exports.replyVn = '✳️ Reply audionya...';
exports.replyImg = '✳️ Reply imagenya...';
exports.noreply = '✳️ Pesan yang kamu reply tidak mengandung reply';
exports.nolink = (value) => {
  return `✳️ Silahkan ulangi dengan menambahkan link *${value}*`;
};
exports.addwarn = `⚠️ Peringatan\nKamu mendapatkan 1 peringatan`;
exports.delwarn = `⚠️ Peringatan\nWarning kamu telah berkurang 1 peringatan`;
exports.cekwarn = (warn) => {
  return `≡ PERINGATAN \n\n▢ Total  : *${warn}*`;
};
exports.nowarn = `✳️ User tidak memiliki peringatan`;

exports.Pbahasa = `✳️ Pilih bahasa yang ingin Anda gunakan

*Bahasa yang tersedia*
- es (Spanish) 
- id (Indonesia) 
- en (English)
- pt (Portugués)

📌 Contoh : */language en*`;
exports.nobahasa = `Bahasa tidak tersedia

*Bahasa yang tersedia*
- es (Spanish) 
- id (Indonesia) 
- en (English)
- pt (Portugués)

📌 Contoh : */language en*`;

exports.online = '✅ Perintah diterima menyalakan bot digroup ini';
exports.offline = '✅ Perintah diterima mematikan bot di group ini';

// -- group
exports.onwa = '✳️ User sudah berada didalam group';
exports.sendlink = '✅ Sukses mengirim undangan ke ';
exports.open = '✅ Sukses mengubah setelan group untuk mengizinkan semua anggota dapat mengirim pesan dalam group ini';
exports.close = '✅ Sukses mengubah setelan group untuk mengizinkan hanya admin yang dapat mengirim pesan dalam group ini';
exports.name = (value) => {
  return `✅ Sukses merubah subjek menjadi *${value}*`;
};
exports.desk = (value) => {
  return `✅ Sukses merubah deskripsi group menjadi\n\n ${value}`;
};
exports.promote = (value) => {
  return `✅ Sukses menaikkan jabatan *${value}* sebagai admin`;
};
exports.demote = (value) => {
  return '✅ Sukses menurunkan jabatan ' + value;
};

exports.kick = (value) => {
  return '✅ Perintah di terima, mengeluarkan '+value;
};
exports.On = (value) => {
 return `✅ Sukses menyalakan *${value}* di group ini`;
};
exports.Off = (value) => {
  return `✅ *${value}* di matikan untuk group ini`;
};
exports.Thison = (value) => {
  return `✳️ *${value}* sudah menyala sebelumnya`;
};
exports.Thisoff = (value) => {
return `✳️ *${value}* belum menyala sebelumnya`;
};
exports.OnorOff = '✳️ Silahkan ulangi dengan menambahkan on/off';
exports.antilink = 'Kamu terdeteksi mengirimkan link whatsapp group lain';

exports.setwel = (value) => { 
  return `✳️ Masukkan pesan dari *Selamat datang*

*📌 Contoh:*
/setwelcome Selamat datang @user  ke @group
 
Tag : @user 
Nama : @name
Bio : @bio
Tanggal : @date
Nama grup : @group
Keterangan : @desc

*Contoh untuk setiap fungsi*\n` + value;
};

exports.setbye = (value) => {
  return `✳️ Masukkan pesan *Perpisahan*
  
*📌 Contoh:*
/setbye Selamat tinggal  @user

*Contoh untuk setiap fungsi*\n` + value;
};

exports.setweldone = (value, fungsi) => {
  return `✅ *Selamat datang* kumpulan pesan`;
};

exports.setbyedone = (value, fungsi) => {
  return `✅ *Perpisahan* kumpulan pesan`;
};
//--
exports.default = (value) => {
  return value + ' Kembali ke pengaturan awal';
};

exports.main = (value) => {
  return '✳️ Masih ada ' + value + ' berlangsung!';
};
exports.nomain = (value) => {
  return '✳️ Tidak ada ' + value + ' berlangsung!';
};
exports.inmain = (value) => {
  return 'Kamu sudah melakukan ' + value
};
exports.hapus = (value) =>{
  return `✅ Berhasil menghapus *${value}* di group ini`;
};

// game
exports.onGame = '⚠️ Masih ada soal belum terjawab di chat ini';
exports.soal = (text1, text2, text3) => {
  return `${text1}

*⏳ Timeout*
${text2}

*POIN*
${text3}

Reply pesan ini untuk menjawab
Petunjuk jawaban muncul di 10 detik terakhir`;
};

exports.timeout = '⏳ Waktu habis jawabannya adalah ';
exports.salah = '❎ *Salah* !\nCoba lagi';
exports.hampir = '✳️ *Dikit lagi* !\nCoba lagi';
exports.benar = (value, value2) => {
  return `✅ *Benar*\nJawabannya adalah ${value}\nKamu mendapatkan ${value2} Coins`;
};

// afk
exports.with = 'dengan alasan ';
exports.onAfk = (value) => {
  return 'Kamu sekarang afk ' + value
};
exports.offAfk = 'Kamu kembali dari AFK'
exports.inAfk = (value, time) => {
  return 'User sedang dalan mode Afk ' + value + '\n Pada : ' + time
}
