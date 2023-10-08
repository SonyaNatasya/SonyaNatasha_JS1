let totalBelanja = 500.000;
let diskon = 0;

if (totalBelanja >= 100) {
    console.log("Anda berhak mendapatkan diskon.");

    if (totalBelanja >= 100 && totalBelanja < 300.000) {
        diskon = 0.1; // Diskon 5% untuk total belanja antara 100 dan 200
    } else if (totalBelanja >= 200 && totalBelanja < 300) {
        diskon = 0.2; // Diskon 10% untuk total belanja antara 200 dan 300
    } else {
        diskon = 0.15; // Diskon 15% untuk total belanja 500 atau lebih
    }

    let nilaiDiskon = totalBelanja * diskon;
    let totalBayar = totalBelanja - nilaiDiskon;

    console.log("Total belanja: $" + totalBelanja.toFixed(2));
    console.log("Diskon: $" + nilaiDiskon.toFixed(2));
    console.log("Total yang harus dibayar: $" + totalBayar.toFixed(2));
} else {
    console.log("Anda tidak mendapatkan diskon.");
    console.log("Total yang harus dibayar: $" + totalBelanja.toFixed(2));
}
