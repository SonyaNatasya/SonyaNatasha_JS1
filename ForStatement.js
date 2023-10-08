let buku = {
    judul: "Dia Adalah Dilanku Tahun 1990",
    penulis: "Pidi Baiq",
    tahunTerbit: 2014,
    genre: "Romance",
};

for (let prop in buku) {
    console.log(prop + ": " + buku[prop]);
}
