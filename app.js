// ===============================
// TECHVISION LIVE 24x7
// Version 1.0
// ===============================

// ---------- LIVE CLOCK ----------

function updateClock(){

const now=new Date();

document.getElementById("clock").innerHTML=

now.toLocaleDateString("en-US",{

weekday:"short",

day:"2-digit",

month:"short",

year:"numeric"

})

+" | "+

now.toLocaleTimeString("en-US");

}

setInterval(updateClock,1000);

updateClock();


// ---------- TV PLAYLIST ----------

const scenes=[

{

category:"🤖 BREAKING AI NEWS",

headline:"Artificial Intelligence is transforming every industry.",

summary:"Follow the latest AI breakthroughs, product launches and technology innovations from around the world.",

image:"https://picsum.photos/seed/ai/900/700"

},

{

category:"🚀 AI TOOL OF THE HOUR",

headline:"Discover powerful AI tools for everyday productivity.",

summary:"New AI tools help developers, students and businesses work smarter.",

image:"https://picsum.photos/seed/tools/900/700"

},

{

category:"💻 GITHUB TRENDING",

headline:"Open Source projects are changing the future.",

summary:"Explore trending repositories created by developers across the globe.",

image:"https://picsum.photos/seed/github/900/700"

},

{

category:"📰 TECHNOLOGY NEWS",

headline:"Technology never sleeps.",

summary:"Stay informed with important announcements from the technology industry.",

image:"https://picsum.photos/seed/news/900/700"

},

{

category:"🌍 CYBER SECURITY",

headline:"Protect your digital identity.",

summary:"Cyber security awareness helps keep your accounts and data safe.",

image:"https://picsum.photos/seed/security/900/700"

},

{

category:"💡 PROGRAMMING TIP",

headline:"Write code for humans first.",

summary:"Readable code is easier to maintain, debug and improve over time.",

image:"https://picsum.photos/seed/programming/900/700"

},

{

category:"🧠 TECH FACT",

headline:"The first website is still online today.",

summary:"Created by Tim Berners-Lee in 1991, it explained the World Wide Web project.",

image:"https://picsum.photos/seed/history/900/700"

}

];

let currentScene=0;

function changeScene(){

const scene=scenes[currentScene];

document.getElementById("category").innerHTML=scene.category;

document.getElementById("headline").innerHTML=scene.headline;

document.getElementById("summary").innerHTML=scene.summary;

document.getElementById("topicImage").src=scene.image;

currentScene++;

if(currentScene>=scenes.length){

currentScene=0;

}

}

changeScene();

setInterval(changeScene,15000);


// ---------- BREAKING NEWS ----------

const ticker=[

"🔴 Welcome to TECHVISION LIVE 24x7",

"🤖 Artificial Intelligence continues to reshape industries worldwide.",

"💻 Open Source software powers millions of applications every day.",

"🚀 Technology evolves faster than ever before.",

"🌍 Thank you for watching TECHVISION LIVE.",

"📡 More exciting features are coming soon."

];

let tickerIndex=0;

function updateTicker(){

document.getElementById("ticker").innerHTML=ticker[tickerIndex];

tickerIndex++;

if(tickerIndex>=ticker.length){

tickerIndex=0;

}

}

updateTicker();

setInterval(updateTicker,8000);
