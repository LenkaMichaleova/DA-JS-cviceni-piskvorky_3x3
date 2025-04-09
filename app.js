import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4'

const hry = document.querySelectorAll('.hra');

hry.forEach((hra) => {
	const policka = Array.from(hra.querySelectorAll(".policko")).map((pole) => {
		if (pole.classList.contains("kolecko")) {
			return "o"
		} else if (pole.classList.contains("krizek")) {
			return "x"
		}
		return "_"
	})
	const vysledek = hra.querySelector('.vysledek')
	const vitez = findWinner(policka)
	//console.log(vysledek)
	//console.log(vitez)

	if (vitez === "o" || vitez === "x") {
		vysledek.textContent = `Vyhrál hráč se symbolem ${vitez}.`
	} else if (vitez === "tie"){
		vysledek.textContent = `Hra skončila remízou.`
	} else {
		vysledek.textContent = `Hra ještě probíhá.`
	}
})