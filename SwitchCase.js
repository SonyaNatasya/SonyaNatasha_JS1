let jenisPembelian = "New";
let hargaMobil;

switch (jenisPembelian) {
    case "New":
        hargaMobil = 500.000;
        console.log("Anda membeli mobil New.");
        break;
    case "Second":
        hargaMobil = 300.000;
        console.log("Anda membeli mobil Second.");
        break;
    default:
        console.log("Jenis pembelian mobil tidak valid.");
}

console.log("Harga mobil: $" + hargaMobil.toFixed(2));
