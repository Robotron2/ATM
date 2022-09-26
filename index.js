let mainBal;

const withDrawBtn = document.getElementById("withdrawBtn")
const balanceBtn = document.getElementById("balBtn")
const transferBtn = document.getElementById("transferBtn")
const airBtn = document.getElementById("airBtn")

const withDraw1k = document.getElementById("oneThousand")
const withDraw2k = document.getElementById("twoThousand")
const withDraw5k = document.getElementById("fiveThousand")
const withDraw10k = document.getElementById("tenThousand")

const transfer1k = document.getElementById("transferOneThousand")
const transfer2k = document.getElementById("transferTneThousand")
const transfer5k = document.getElementById("transferFiveThousand")
const transfer10k = document.getElementById("transferTenThousand")

transfer1k.addEventListener("click", () => {
    alert("working")
})

if (localStorage.getItem("balance")) {
    mainBal = parseInt(localStorage.getItem("balance"))
} else {
    localStorage.setItem("balance", 10000)
}
let currentBal = parseInt(localStorage.getItem("balance"))


let displayScreen = document.getElementById("displayDiv")

withDraw10k.addEventListener("click", () => {
    let dbBal = parseInt(localStorage.getItem("balance"))

    parsedWithdraw10k = parseInt(document.getElementById("tenThousand").value)

    // console.log(typeof(currentBal))
    if (parsedWithdraw10k <= dbBal) {
        displayScreen.innerHTML = `Your withdrawal of $${parsedWithdraw10k} was successful`
        currentBal = currentBal - parsedWithdraw10k
        localStorage.setItem("balance", currentBal)
        mainBal = currentBal

    } else {
        displayScreen.innerHTML = `Insufficient funds`
    }
})

withDraw5k.addEventListener("click", () => {
    let dbBal = parseInt(localStorage.getItem("balance"))

    parsedWithdraw5k = parseInt(document.getElementById("fiveThousand").value)

    // console.log(typeof(currentBal))
    if (parsedWithdraw5k <= dbBal) {
        displayScreen.innerHTML = `Your withdrawal of $${parsedWithdraw5k} was successful`
        currentBal = currentBal - parsedWithdraw5k
        localStorage.setItem("balance", currentBal)
        mainBal = currentBal

    } else {
        displayScreen.innerHTML = `Insufficient funds`
    }
})

withDraw2k.addEventListener("click", () => {
    let dbBal = parseInt(localStorage.getItem("balance"))

    parsedWithdraw2k = parseInt(document.getElementById("twoThousand").value)

    // console.log(typeof(currentBal))
    if (parsedWithdraw2k <= dbBal) {
        displayScreen.innerHTML = `Your withdrawal of $${parsedWithdraw2k} was successful`
        currentBal = currentBal - parsedWithdraw2k
        localStorage.setItem("balance", currentBal)
        mainBal = currentBal

    } else {
        displayScreen.innerHTML = `Insufficient funds`
    }
})
withDraw1k.addEventListener("click", () => {
    let dbBal = parseInt(localStorage.getItem("balance"))

    parsedWithdraw1k = parseInt(document.getElementById("oneThousand").value)

    // console.log(typeof(currentBal))
    if (parsedWithdraw1k <= dbBal) {
        displayScreen.innerHTML = `Your withdrawal of $${parsedWithdraw1k} was successful`
        currentBal = currentBal - parsedWithdraw1k
        localStorage.setItem("balance", currentBal)
        mainBal = currentBal

    } else {
        displayScreen.innerHTML = `Insufficient funds`
    }
})




balanceBtn.addEventListener("click", () => {
    displayScreen.innerHTML = `Your balance is ${mainBal}`
})