var limit = 6
var maxtrn = 3
var cturn = 0

var color = generateRandCol(6)

var squares = document.querySelectorAll(".square")
var pickColor = color[Math.floor(Math.random() * color.length)]

var msg = document.querySelector("#msg")
var display = document.querySelector("#display")
display.textContent = pickColor

var easy = document.querySelector("#easy")
var hard = document.querySelector("#hard")

easy.addEventListener("click",function(){
	easy.classList.add("selected")
	hard.classList.remove("selected")
	limit = 3
	maxtrn = 2
	reset()
})

hard.addEventListener("click",function(){
	hard.classList.add("selected")
	easy.classList.remove("selected")
	limit = 6
	maxtrn = 3
	reset()
})

var h1 = document.querySelector("h1")

var res = document.querySelector("#res")
res.addEventListener("click",reset)



for(var i = 0 ; i < squares.length ; i++){
	squares[i].style.backgroundColor = color[i]
	squares[i].addEventListener("click",clicked)
}


function clicked() {
	if (this.style.backgroundColor != "rgb(35, 35, 35)") {
		console.log("in")
		cturn ++
	}
	if(cturn <= maxtrn){ 
		console.log(cturn + " " + maxtrn)
		if(this.style.backgroundColor === pickColor){
			setAllcol()
			msg.textContent = "Correct!"
			res.textContent = "Play Again"
			h1.style.backgroundColor = this.style.backgroundColor
		}
		else {
			this.style.backgroundColor = "rgb(35, 35, 35)"
			msg.textContent = "Try Again"
			if(cturn === maxtrn){
				msg.textContent = "You Loose..."
				res.textContent = "Play Again"
			}
		}
	}
}

function setAllcol(){
	for(var i = 0 ; i < squares.length ; i++){
		squares[i].style.backgroundColor = pickColor
	}
}


function generateRandCol(lim){
	var arr = []
	for(var i = 0 ; i < lim ; i++){
		arr.push(randCol())
	}
	return arr
}

function randCol(){
	var r = Math.floor(Math.random() * 256)
	var g = Math.floor(Math.random() * 256)
	var b = Math.floor(Math.random() * 256)

	return "rgb("+r+", "+g+", "+b+")"
}

function reset() {
	color = generateRandCol(limit)
	cturn = 0
	pickColor = color[Math.floor(Math.random() * color.length)]
	display.textContent = pickColor
	for(var i = 0 ; i < squares.length ; i++){
		if(color[i]){
			squares[i].style.backgroundColor = color[i]
			squares[i].style.display = "block"
		}else{
			squares[i].style.display = "none"
		}
	}
	h1.style.backgroundColor = "#dc5539"
	res.textContent = "New Color"
	msg.textContent = "Begin!"
}