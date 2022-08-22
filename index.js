let playerName=[];
//fun for select player
function selectPlayer(e) {
    playerName.unshift(e.target.parentElement.children[0].innerText);
}
//adding player
[...document.getElementsByClassName('player-selection-btn')].forEach(element => {
    element.addEventListener('click', (e) => {
        selectPlayer(e);
        addPlayerName(e);
    });
});
//add player fun
function addPlayerName(e) {
    let parent=document.getElementById('player-container');
    if([...parent.children].some(element => element.getAttribute('id')=="noticeOfList")){
        parent.firstElementChild.remove();
    }
    if (playerName.length<=5) {
        let newOne=document.createElement('li');
        newOne.setAttribute('class','mt-3');
        newOne.innerText=playerName[0];
        parent.appendChild(newOne);
        e.target.setAttribute('disabled',true);
    }else{
        alert('you have added 5 player')
    }

}
//calculate player price
document.getElementById("priceCalBtn").addEventListener("click", function(e){
    playerPriceCal();
});
//calculate subtotal price
document.getElementById("totalPriceCalBtn").addEventListener("click", function(e){
    subTotal();
});
//player price fun
function playerPriceCal() {
    if(document.getElementById('playerPriceIndex').value.match(/^[a-zA-Z]+$/)){
        alert('give a valid price');
        document.getElementById('playerPriceIndex').value='';
    }else{
        let parentElement = document.getElementById('priceRes');
        let ammount=parseInt(document.getElementById("playerPriceIndex").value)*playerName.length;
        parentElement.innerText = ammount;
    }

}
//subtotal price fun
function subTotal() {
    let playerPriceValue=document.getElementById('priceRes').innerText;
    console.log(playerPriceValue);
    let managerPrice=parseInt(document.getElementById("managerPrice").value);
    let coachPrice=parseInt(document.getElementById("coachPrice").value);
    if(document.getElementById("managerPrice").value.match(/^[a-zA-Z]+$/) || document.getElementById("coachPrice").value.match(/^[a-zA-Z]+$/)){
        alert('give a valid price');
        document.getElementById("managerPrice").value='';
        document.getElementById("coachPrice").value='';
    }else{
        if(playerPriceValue==""){
            let subTotal=managerPrice+coachPrice;
            document.getElementById("totalPriceRes").innerText=subTotal;
        }else{
            let subTotal=managerPrice+coachPrice+parseInt(playerPriceValue);
            document.getElementById("totalPriceRes").innerText=subTotal;
        }
        
    }

}