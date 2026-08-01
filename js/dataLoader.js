// ======================================
// TechVision Live 24x7
// Data Loader
// Version 1.0
// ======================================

const DataLoader = {

    news: [],

    tools: [],

    async initialize() {

        await Promise.all([

            this.loadNews(),

            this.loadTools()

        ]);

    },

    async loadNews() {

        try {

            const response = await fetch("data/news.json");

            this.news = await response.json();

        }

        catch (e) {

            console.error(e);

        }

    },

    async loadTools() {

        try {

            const response = await fetch("data/tools.json");

            this.tools = await response.json();

        }

        catch (e) {

            console.error(e);

        }

    }

};
