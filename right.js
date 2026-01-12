let ph=document.getElementById("ph")
let ph2=document.getElementById("ph2")
let iframe1=document.getElementById("iframe1")
let iframe2=document.getElementById("iframe2")
let exit=document.getElementById("exit")
let aboutme1=document.getElementById("aboutme1")
let aboutme2=document.getElementById("aboutme2")
let back1=document.getElementById("back1")


aboutme1.addEventListener("click",()=>{
aboutme1.style.display="none"
aboutme2.style.display="block"
})

back1.addEventListener("click",()=>{
    aboutme1.style.display="block"
aboutme2.style.display="none"
})

ph.addEventListener("click",()=>{
    iframe1.style.display="block"
    iframe2.style.display="none"
    exit.style.display="block"
})

exit.addEventListener("click",()=>{
    iframe1.style.display="none"
    iframe2.style.display="none"
    exit.style.display="none"
})

ph2.addEventListener("click",()=>{
    iframe2.style.display="block"
    iframe1.style.display="none"
    exit.style.display="block"
    alert("NetFlix clone is responsive, but Spotify clone is intensionally made Non-responsive So plese Preview it on only Desktop, OR you can go through Netflix Clone as it is responsive.")
})



let b1=document.getElementById("benifit1")
let b2=document.getElementById("benifit2")
let b3=document.getElementById("benifit3")
let b4=document.getElementById("benifit4")
let b5=document.getElementById("benifit5")
let b6=document.getElementById("benifit6")

let img1a=document.getElementById("img1a")
let img1b=document.getElementById("img1b")
let img2a=document.getElementById("img2a")
let img2b=document.getElementById("img2b")
let img3a=document.getElementById("img3a")
let img3b=document.getElementById("img3b")
let img4a=document.getElementById("img4a")
let img4b=document.getElementById("img4b")
let img5a=document.getElementById("img5a")
let img5b=document.getElementById("img5b")
let img6a=document.getElementById("img6a")
let img6b=document.getElementById("img6b")

function img_slider(a,b,c){

    a.addEventListener("mouseover",()=>{
        b.style.animation="ani1 1s 1 ease-in"
        c.style.animation="ani2 1s 1 ease-in"
        c.style.justifySelf="flex-end"
        b.style.transform="translateX(-100%)"
        c.style.transform="translateX(100%)"
    })
    a.addEventListener("mouseleave",()=>{
     setTimeout(() => {
        b.style.animation="rani1 1s 1 ease-in"
        c.style.animation="rani2 1s 1 ease-in"
        c.style.justifySelf="flex-end"
        b.style.transform="translateX(0px)"
        c.style.transform="translateX(0px)"
       }, 5000);
      
    })
    
}

img_slider(b1,img1a,img1b)
img_slider(b2,img2a,img2b)
img_slider(b3,img3a,img3b)
img_slider(b4,img4a,img4b)
img_slider(b5,img5a,img5b)
img_slider(b6,img6a,img6b)

