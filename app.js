// ----------------------------
// TECHVISION LIVE 24x7
// ----------------------------

// Live Clock
function updateClock() {

    const now = new Date();

    const options = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric"
    };

    const date = now.toLocaleDateString("en-US", options);

    const time = now.toLocaleTimeString("en-US", {
        hour12: true
    });

    document.getElementById("clock").innerHTML =
        date + " | " + time;

}

setInterval(updateClock, 1000);

updateClock();


// ----------------------------
// Broadcast Playlist
// ----------------------------

const broadcast = [

{
category:"🤖 BREAKING AI NEWS",
headline:"OpenAI, Google and Microsoft continue accelerating AI innovation.",
summary:"Stay updated with the latest developments in Artificial Intelligence from around the world."
},

{
category:"🚀 AI TOOL SPOTLIGHT",
headline:"Discover a new AI tool every minute.",
summary:"Learn about productivity, coding, image generation, automation and research tools."
},

{
category:"💻 GITHUB TRENDING",
headline:"Explore the most popular open-source repositories.",
summary:"Trending developer projects updated regularly."
},

{
category:"📰 TECH HEADLINES",
headline:"Technology changes every day.",
summary:"Major announcements from the technology industry appear here."
},

{
category:"💡 PROGRAMMING TIP",
headline:"Write clean code. Keep functions small.",
summary:"Readable code is easier to maintain than clever code."
},

{
category:"🧠 TECH FACT",
headline:"The first computer bug was an actual moth.",
summary:"Engineers found a moth inside a relay in 1947 and documented it."
},

{
category:"🌍 CYBER SECURITY",
headline:"Always enable Multi-Factor Authentication.",
summary:"One of the easiest ways to improve online security."
}

];

let current = 0;

function nextBroadcast(){

    document.getElementById("category").innerHTML =
        broadcast[current].category;

    document.getElementById("headline").innerHTML =
        broadcast[current].headline;

    document.getElementById("summary").innerHTML =
        broadcast[current].summary;

    current++;

    if(current >= broadcast.length){

        current = 0;

    }

}

setInterval(nextBroadcast,15000);

nextBroadcast();


// ----------------------------
// Breaking News Ticker
// ----------------------------

const tickerMessages=[

"🔴 Welcome to TechVision Live 24x7",

"🤖 AI is transforming every industry.",

"💻 Learn something new every day.",

"🚀 Stay tuned for live technology updates.",

"🌍 Thank you for watching."

];

let tickerIndex=0;

function updateTicker(){

    document.getElementById("ticker").innerHTML=
    tickerMessages[tickerIndex];

    tickerIndex++;

    if(tickerIndex>=tickerMessages.length){

        tickerIndex=0;

    }

}

setInterval(updateTicker,8000);

updateTicker();
