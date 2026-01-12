// let a=document.getElementById("abcd")
// a.addEventListener("click",()=>{
//   alert("hey")
// })



let submit_inp = document.getElementById("input-email");
let submit_btn = document.getElementById("submit-btn");
function valid_email(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}
let js1 = document.getElementById("js1")
submit_btn.addEventListener("click", () => {
  if (valid_email(submit_inp.value)) {
    alert("form submitted successfully")
    submit_inp.value = ""
    return js1.style.display = "none";
  }
  setTimeout(() => {
    return js1.style.display = "none";
  }, 0);
  setTimeout(() => {
    return js1.style.display = "flex";
  }, 1000);
})


submit_btn.addEventListener("blur", () => {
  return js1.style.display = "none"
})


let rs_btn = document.getElementById("right-scroll-button")
let ls_btn = document.getElementById("left-scroll-button")
let cont_b = document.getElementById("cont-b")

rs_btn.addEventListener("click", () => {

  cont_b.scrollLeft += 200
  ls_btn.style.display = "block"

  if (cont_b.scrollLeft >=2000) {
    rs_btn.style.animation = " move2 0.5s 5 ease-in-out";
    setTimeout(() => {
      rs_btn.style.display = "none"
      rs_btn.style.animation = "move-r-2 0.5s 1 ease-in-out"
    }, 400);
  }


})
ls_btn.addEventListener("click", () => {

  cont_b.scrollLeft -= 200
  rs_btn.style.display="block"

  if (cont_b.scrollLeft <= 100) {
    ls_btn.style.animation = " move 0.5s 5 ease-in-out";
    setTimeout(() => {
      ls_btn.style.display = "none"
      ls_btn.style.animation = "move-r-1 0.5s 1 ease-in-out"
    }, 400);
  }

})


let ps1=document.getElementById("+sign-1")
let ps2=document.getElementById("+sign-2")
let ps3=document.getElementById("+sign-3")
let ps4=document.getElementById("+sign-4")
let ps5=document.getElementById("+sign-5")
let ps6=document.getElementById("+sign-6")

let que1=document.getElementById("que1")
let que2=document.getElementById("que2")
let que3=document.getElementById("que3")
let que4=document.getElementById("que4")
let que5=document.getElementById("que5")
let que6=document.getElementById("que6")
let que_head=[que1,que2,que3,que4,que5,que6]

function xyz(ps,psv){
  psv.style.display="none"
  ps.parentElement.addEventListener("click",()=>{
    let a=psv.style.display
    if(a!="none"){
    ps.style.transform="rotate(0deg)"
    psv.style.display="none";
  
  } else{
    ps.style.transform="rotate(45deg)"

 function li(name){name.style.display="none";}
 li(que1)
 li(que2)
 li(que3)
 li(que4)
 li(que5)
 li(que6)
 psv.style.display="block";
  }
psv.style.animation="list-height 0.5s 1 ease-in-out";
 
// if(a="block"){
//   ps.style.transform="rotate(45deg)"
// }
// else{
//   ps.style.transform="rotate(45deg)"

// }

})
}







xyz(ps1,que1)
xyz(ps2,que2)
xyz(ps3,que3)
xyz(ps4,que4)
xyz(ps5,que5)
xyz(ps6,que6)




