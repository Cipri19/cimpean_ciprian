//Cache the DOM
var buton = document.getElementById("button")
var body = document.getElementById("body")
var nume = document.getElementById("Nume")	
var prenume = document.getElementById("Prenume")
var img = document.getElementById("img")
var asteptari = document.getElementById("Asteptari")
var an = document.getElementById("anNastere")

const d = new Date()
var year = d.getFullYear()

buton.addEventListener("click", ViataNoua)
an.addEventListener("mouseover", displayAge)

function displayAge()
{
	an.innerHTML = year - an.innerHTML
}

function ViataNoua()
{
	nume.innerHTML = "Nume: Costel "
	prenume.innerHTML = "Prenume: vulcanizare"
	imd.innerHTML = "functie:java "
	asteptari.innerHTML = "Experiente:<ol> <li> work and travel </li><li> internship </li> </ol>"
	img.src = "garfield1.jpg"
	body.style.backgroundColor = "red"
	body.style.color = "blue"
	img.style.opacity = "70%"
	img.style.borderWidth = "25px"
	img.style.height = "200px"
	img.style.width = "300px"
	//opacitate imagine
	
	//grosimea marginilor imaginii
}