// membuat pilihan computer
function getPilihanComputer() {
  const comp = Math.random();

  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}

// rules nya :
function getHasil(comp, player) {
  if (player == comp) return "SERI!";
  if (player == "gajah") return comp == "orang" ? "MENANG!" : "KALAH!";
  if (player == "orang") return comp == "gajah" ? "KALAH!" : "MENANG!";
  if (player == "semut") return comp == "orang" ? "KALAH" : "MENANG!";
}

// membuat event pada saat gambar di click
// pilih gajah
const pGajah = document.querySelector(".gajah");
pGajah.addEventListener("click", function () {
  const pilihanComputer = getPilihanComputer();
  const pilihanPlayer = pGajah.className;
  const hasil = getHasil(pilihanComputer, pilihanPlayer);

  const imgComputer = document.querySelector(".img-komputer");
  imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

  const info = document.querySelector(".info");
  info.innerHTML = hasil;
});
// pilih orang
const pOrang = document.querySelector(".orang");
pOrang.addEventListener("click", function () {
  const pilihanComputer = getPilihanComputer();
  const pilihanPlayer = pOrang.className;
  const hasil = getHasil(pilihanComputer, pilihanPlayer);

  const imgComputer = document.querySelector(".img-komputer");
  imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

  const info = document.querySelector(".info");
  info.innerHTML = hasil;
});
// pilih semut
const pSemut = document.querySelector(".semut");
pSemut.addEventListener("click", function () {
  const pilihanComputer = getPilihanComputer();
  const pilihanPlayer = pSemut.className;
  const hasil = getHasil(pilihanComputer, pilihanPlayer);

  const imgComputer = document.querySelector(".img-komputer");
  imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

  const info = document.querySelector(".info");
  info.innerHTML = hasil;
});

// membuat event pada saat gambar di click (versi lebih efektif,membuat langsung 3 pilihan):
// const pilihan = document.querySelectorAll("li img");
// pilihan.forEach(function (pil) {
//   pil.addEventListener("click", function () {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pil.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const imgComputer = document.querySelector(".img-komputer");
//     imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

//     const info = document.querySelector(".info");
//     info.innerHTML = hasil;
//   });
// });
