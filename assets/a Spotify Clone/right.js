

let alert=document.getElementById("alert")
let alert_2=document.getElementById("alert-2")
let ok_btn=document.getElementById("ok-button")
let ok_btn_2=document.getElementById("ok-button-2")

ok_btn.addEventListener("click",()=>{
alert.style.display="none"
})
ok_btn_2.addEventListener("click",()=>{
    alert_2.style.display="none"
})

let btn1=document.getElementById("header-button1")
let btn2=document.getElementById("header-button2")
let btn3=document.getElementById("header-button3")

btn1.addEventListener("click",()=>{
    btn1.style.backgroundColor="white"
    btn1.style.color="black"
    btn2.style.backgroundColor="transparent"
    btn2.style.color="white"
    btn3.style.backgroundColor="transparent"
    btn3.style.color="white"
})
btn2.addEventListener("click",()=>{
    btn2.style.backgroundColor="white"
    btn2.style.color="black"
    btn1.style.backgroundColor="transparent"
    btn1.style.color="white"
    btn3.style.backgroundColor="transparent"
    btn3.style.color="white"
})
btn3.addEventListener("click",()=>{
    btn3.style.backgroundColor="white"
    btn3.style.color="black"
    btn2.style.backgroundColor="transparent"
    btn2.style.color="white"
    btn1.style.backgroundColor="transparent"
    btn1.style.color="white"
})
/* ================= SONG TITLES ================= */

let songs = document.querySelectorAll(".songs");

songs.forEach(element => {
    element.querySelector("h3").innerText = "xyz Name";
    element.querySelector("h4").innerText = "xyz author Name";
});

/* ================= SHOW ALL / SHOW LESS ================= */

function show(a, b, c) {
    let x = document.getElementById(a);
    let y = document.getElementById(b);
    let z = document.getElementById(c);

    x.addEventListener("click", () => {
        x.style.display = "none";
        y.style.display = "block";
        z.style.flexWrap = "wrap";
        z.style.gap = "5%";
    });

    y.addEventListener("click", () => {
        x.style.display = "block";
        y.style.display = "none";
        z.style.flexWrap = "nowrap";
        z.style.gap = "0%";
    });
}

show("show-all-1", "show-less-1", "trending-songs-head");
show("show-all-2", "show-less-2", "rs-head");
show("show-all-3", "show-less-3", "rps-head");
show("show-all-4", "show-less-4", "pa-head");
show("show-all-5", "show-less-5", "c-head");

/* ================= SONG CLICK → MUSIC PANEL ================= */

let all_songs = document.querySelectorAll(".songs");
let hero_section = document.getElementById("hero-section");
let music_panel = document.getElementById("forjs-music-panel");
let back_button_1 = document.getElementById("back-button-forjs");
let img_1 = document.getElementById("img-1-forjs");
let img_2 = document.getElementById("img-2-forjs");

all_songs.forEach(e => {
    e.addEventListener("click", () => {
        hero_section.style.display = "none";
        music_panel.style.display = "inline";
        img_1.src = e.querySelector("img").src;
        img_2.src = e.querySelector("img").src;
    });
});

back_button_1.addEventListener("click", () => {
    hero_section.style.display = "flex";
    music_panel.style.display = "none";
});

/* ================= RANDOM LIST IMAGES ================= */

let lists_img_src = {
    1: "assets/1.jfif",
    2: "assets/2.jfif",
    3: "assets/3.jfif",
    4: "assets/4.jfif",
    5: "assets/5.jfif",
    6: "assets/6.jfif",
    7: "assets/7.jfif",
    8: "assets/8.jfif",
    9: "assets/9.jfif",
    10: "assets/10.jfif",
    11: "assets/trending-songs-1.jfif",
    12: "assets/trending-songs-2.jfif",
    13: "assets/trending-songs-3.jfif",
    14: "assets/trending-songs-4.jfif",
    15: "assets/trending-songs-5.jfif",
    16: "assets/trending-songs-6.jfif",
    17: "assets/trending-songs-7.jfif",
    18: "assets/trending-songs-8.jfif",
    19: "assets/trending-songs-9.jfif",
    20: "assets/trending-songs-10.jfif"
};

let a = Object.keys(lists_img_src).map(Number);

document.querySelectorAll(".list-img").forEach(e => {
    let x = a.splice(Math.floor(Math.random() * a.length), 1)[0];
    e.src = lists_img_src[x];
});

/* ================= LIST SONG CLICK ================= */

document.querySelectorAll(".list-song").forEach(e => {
    e.addEventListener("click", () => {
        music_panel.scrollTop = 0;
        setTimeout(() => {
            img_1.src = e.querySelector("img").src;
            img_2.src = e.querySelector("img").src;
        }, 300);
    });
});

/* ================= SCROLL BUTTONS ================= */

function scrollBtn(l, r, box) {
    document.getElementById(l).addEventListener("click", () => {
        box.scrollBy(-350, 0);
    });
    document.getElementById(r).addEventListener("click", () => {
        box.scrollBy(350, 0);
    });
}

scrollBtn("left-btn-1", "right-btn-1", document.getElementById("trending-songs-head"));
scrollBtn("left-btn-2", "right-btn-2", document.getElementById("rs-head"));
scrollBtn("left-btn-3", "right-btn-3", document.getElementById("pa-head"));
scrollBtn("left-btn-4", "right-btn-4", document.getElementById("c-head"));

/* ================= PLAYER TIMER + SEEK (FINAL FIX) ================= */

let play_button = document.getElementById("play-button");
let pause_button = document.getElementById("pause-button");

let timer_js = document.getElementById("timer-js");
let knob = timer_js.querySelector("button");
let timer_container = timer_js.parentElement;

let timer_js_span = document.getElementById("timer-js-span");

const TOTAL_SECONDS = 155; // 2:35
let currentSeconds = 0;
let timer_id = null;
let isDragging = false;

function formatTime(sec) {
    let m = Math.floor(sec / 60);
    let s = sec % 60;
    return `${m}:${s < 10 ? "0" + s : s}`;
}

function updateUI(sec) {
    sec = Math.max(0, Math.min(sec, TOTAL_SECONDS));
    let percent = (sec / TOTAL_SECONDS) * 100;
    timer_js.style.width = percent + "%";
    timer_js_span.textContent = formatTime(sec);
}

/* play */
play_button.addEventListener("click", () => {
    play_button.style.display = "none";
    pause_button.style.display = "block";

    if (timer_id) return;

    timer_id = setInterval(() => {
        if (!isDragging && currentSeconds < TOTAL_SECONDS) {
            currentSeconds++;
            updateUI(currentSeconds);
        }
    }, 1000);
});

/* pause */
pause_button.addEventListener("click", () => {
    play_button.style.display = "block";
    pause_button.style.display = "none";
    clearInterval(timer_id);
    timer_id = null;
});

/* click seek */
timer_container.addEventListener("click", (e) => {
    let rect = timer_container.getBoundingClientRect();
    let x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    currentSeconds = Math.round((x / rect.width) * TOTAL_SECONDS);
    updateUI(currentSeconds);
});

/* drag seek */
knob.addEventListener("mousedown", (e) => {
    e.stopPropagation();
    isDragging = true;
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    let rect = timer_container.getBoundingClientRect();
    let x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    currentSeconds = Math.round((x / rect.width) * TOTAL_SECONDS);
    updateUI(currentSeconds);
});

document.addEventListener("mouseup", () => {
    isDragging = false;
});

/* init */
updateUI(0);
