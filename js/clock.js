// ==========================================
// TechVision Live 24x7
// Clock Module
// Version 1.0
// ==========================================

const ClockModule = {

    start() {

        this.update();

        setInterval(() => {

            this.update();

        },1000);

    },

    update(){

        const now = new Date();

        const options = {

            weekday:"short",

            day:"2-digit",

            month:"short",

            year:"numeric"

        };

        const date = now.toLocaleDateString("en-US",options);

        const time = now.toLocaleTimeString("en-US",{

            hour12:true

        });

        const clock = document.getElementById("clock");

        if(clock){

            clock.innerHTML = `${date} | ${time}`;

        }

    }

};
