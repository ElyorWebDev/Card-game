const cards=document.querySelectorAll(".card1")
console.log(cards);

let cardOn1,cardOn2;
let yop=false;
let hisob=0;
let score=0;
let span=document.querySelector(".score");


function flipC(e){
        let clickC=e.target;
        score++;
        span.textContent=score;
  
        if(clickC!==cardOn1 && !yop){
            clickC.classList.add("flip");
            if(!cardOn1){
                return cardOn1=clickC;
            }
            cardOn2=clickC;
            yop=true;
            console.log("working");
            let cardOnImg=cardOn1.querySelector("img").src,
            cardOn2Img=cardOn2.querySelector("img").src;
            console.log(cardOnImg);
            console.log(cardOn2Img);
            matchCard(cardOnImg,cardOn2Img)
        }

}


function matchCard(img1,img2){
    
    if(img1===img2){
        hisob++;
        if(hisob==6){
           setTimeout(() => {
            console.log("res fun");
            return res();
           }, 1000);
        }
      
            
       
       
            cardOn1.removeEventListener("click",flipC)
            cardOn2.removeEventListener("click",flipC)
       
        
        cardOn1=cardOn2="";
        
        return yop=false;

    }
    console.log("match working");
    setTimeout(() => {
        cardOn1.classList.add("shake");
        cardOn2.classList.add("shake");
    }, 400);
    setTimeout(() => {
        cardOn1.classList.remove("shake","flip");
        cardOn2.classList.remove("shake","flip");
        cardOn1=cardOn2="";
        return yop=false;
    }, 1000);
      
  

}

function res(){
    score=0;
    span.textContent=""
    hisob=0;
    cardOn1=cardOn2="";
    let arr=[1,2,3,4,5,6,1,2,3,4,5,6];
    arr.sort(()=>Math.random() > 0.5 ? 1:-1);
    console.log(arr);
    cards.forEach((card,index)=>{
        card.classList.remove("flip");
        let imgIn=card.querySelector("img");
        imgIn.src=`./assets/media/images (${arr[index]}).png`
        card.addEventListener("click",flipC)
    })
}
res()
cards.forEach(card=>{
    // card.classList.add("flip")
    
    card.addEventListener("click",flipC)
    
})