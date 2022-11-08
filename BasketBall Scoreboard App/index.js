let homeScore = 0
let guestScore = 0 
const homeDisplay = document.getElementById('home-display')
const guestDisplay = document.getElementById('guest-display')

//score buttons home
const plusOneHome = document.getElementById("home-one")
const plusTwoHome = document.getElementById("home-two")
const plusThreeHome = document.getElementById("home-three")


//score buttons guest
const plusOneGuest = document.getElementById("guest-one")
const plusTwoGuest = document.getElementById("guest-two")
const plusThreeGuest = document.getElementById("guest-three")


plusOneHome.addEventListener("click", function() {
    homeScore += 1
    homeDisplay.textContent = homeScore
    highlight()
})
plusTwoHome.addEventListener("click", function() {
    homeScore += 2
    homeDisplay.textContent = homeScore
    highlight()
})
plusThreeHome.addEventListener("click", function() {
    homeScore += 3
    homeDisplay.textContent = homeScore
    highlight()
})
plusOneGuest.addEventListener("click", function() {
    guestScore += 1
    guestDisplay.textContent = guestScore
    highlight()
})
plusTwoGuest.addEventListener("click", function() {
    guestScore += 2
    guestDisplay.textContent = guestScore
    highlight()
})
plusThreeGuest.addEventListener("click", function() {
    guestScore += 3
    guestDisplay.textContent = guestScore
    highlight()
})
//shadow
function highlight() {
    if (homeScore > guestScore) {
        homeDisplay.classList.add("highlighter")
        guestDisplay.classList.remove("highlighter")
        
    } else if (homeScore < guestScore) {
        guestDisplay.classList.add("highlighter")
        homeDisplay.classList.remove("highlighter")
    } else {
        homeDisplay.classList.remove("highlighter")
        guestDisplay.classList.remove("highlighter")
    }
    
}

// new game
const newGame = document.getElementById("new-game")
newGame.addEventListener("click", function() {
    homeScore = 0
    guestScore = 0
    homeDisplay.textContent = homeScore
    guestDisplay.textContent = guestScore
    homeDisplay.classList.remove("highlighter")
    guestDisplay.classList.remove("highlighter")
})