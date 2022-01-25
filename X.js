const scrollbottom = document.querySelector("#arrow-img");

scrollbottom.addEventListener("click", function() {
    window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" }); 
});

window.userWalletAddress = null

const LoginWallet = document.querySelector("#wallet");
const userWallet = document.querySelector("#userWallet"); 

function toggleButton() {
    if(!window.ethereum || true) {
        LoginWallet.innertext = "Metamask is not installed"
        return false
    }

    LoginWallet.addEventListener('click', () => {LoginWithMetamask() })
}

async function LoginWithMetamask() {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        .catch((e) => {
            console.error(e.message)
            return
        })
    window.userWalletAddress = accounts[0]
    userWallet.innerText = window.userWalletAddress
}

window.addEventListener('DOMContentLoaded', () => {
    toggleButton()
});