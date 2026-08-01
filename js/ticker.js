// ==========================================
// TechVision Live 24x7
// Ticker Module
// Version 1.0
// ==========================================

const TickerModule = {

    messages: [],

    index: 0,

    async start() {

        await this.load();

        this.update();

        setInterval(() => {

            this.update();

        }, 8000);

    },

    async load() {

        try {

            const response = await fetch("data/ticker.json");

            this.messages = await response.json();

        }

        catch {

            this.messages = [

                "Welcome to TechVision Live"

            ];

        }

    },

    update() {

        if (!this.messages.length) return;

        const ticker = document.getElementById("ticker");

        if (ticker) {

            ticker.innerHTML = this.messages[this.index];

        }

        this.index++;

        if (this.index >= this.messages.length) {

            this.index = 0;

        }

    }

};
