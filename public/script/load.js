const copybtn = document.querySelector(".copy-btn")
const token_address = document.getElementById("token-address")


copybtn.addEventListener("click",copyAddress)

function copyAddress(){
    token_address.select()
    token_address.setSelectionRange(0, 999999)

    navigator.clipboard.writeText(token_address.value)

    alert("Token Address Copied !!!")
}