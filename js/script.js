document.getElementById('segitiga-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let alas = parseFloat(document.getElementById('alas-segitiga').value);
    let tinggi = parseFloat(document.getElementById('tinggi-segitiga').value);
    let sisiMiring = parseFloat(document.getElementById('sisi-miring').value);

    if (isNaN(alas) || isNaN(tinggi) || isNaN(sisiMiring)) {
        alert('Input tidak valid!');
        return;
    }

    // Luas Segitiga: ½ x alas x tinggi
    let luas = 0.5 * alas * tinggi;

    // Keliling Segitiga: alas + tinggi + sisi miring
    let keliling = alas + tinggi + sisiMiring;

    document.getElementById('result-segitiga').innerText = `Luas: ${luas.toFixed(2)}, Keliling: ${keliling.toFixed(2)}`;
});

document.getElementById('jajargenjang-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let alas = parseFloat(document.getElementById('alas-jajargenjang').value);
    let tinggi = parseFloat(document.getElementById('tinggi-jajargenjang').value);
    let sisiMiring = parseFloat(document.getElementById('sisi-miring-jajargenjang').value);

    if (isNaN(alas) || isNaN(tinggi) || isNaN(sisiMiring)) {
        alert('Input tidak valid!');
        return;
    }

    // Luas Jajar Genjang: alas x tinggi
    let luas = alas * tinggi;

    // Keliling Jajar Genjang: 2 x (alas + sisi miring)
    let keliling = 2 * (alas + sisiMiring);

    document.getElementById('result-jajargenjang').innerText = `Luas: ${luas.toFixed(2)}, Keliling: ${keliling.toFixed(2)}`;
});
