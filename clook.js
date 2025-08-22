const jam = document.getElementById('jam');
const menit = document.getElementById('menit');
const detik = document.getElementById('detik');
const hari = document.getElementById('hari');
const tanggal = document.getElementById('tanggal');
const bulan = document.getElementById('bulan');
const tahun = document.getElementById('tahun');

function updateJam() {
    const now = new Date();
    const jamNow = now.getHours().toString().padStart(2, '0');
    const menitNow = now.getMinutes().toString().padStart(2, '0');
    const detikNow = now.getSeconds().toString().padStart(2, '0');
    const hariNow = now.toLocaleString('id-ID', { weekday: 'long' });
    const tanggalNow = now.getDate().toString().padStart(2, '0');
    const bulanNow = now.toLocaleString('id-ID', { month: 'long' });
    const tahunNow = now.getFullYear();

    jam.textContent = jamNow;
    menit.textContent = menitNow;
    detik.textContent = detikNow;
    hari.textContent = hariNow;
    tanggal.textContent = tanggalNow;
    bulan.textContent = bulanNow;
    tahun.textContent = tahunNow;
}

setInterval(updateJam, 1000);