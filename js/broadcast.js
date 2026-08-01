// ======================================
// TechVision Live 24x7
// Broadcast Engine
// Version 1.0
// ======================================

const BroadcastEngine = {

    stories: [],

    currentIndex: 0,

    async start() {

        this.stories = DataLoader.news;

        if (!this.stories.length) {

            console.warn("No stories available.");

            return;

        }

        this.showStory();

        setInterval(() => {

            this.nextStory();

        }, 30000);

    },

    nextStory() {

        this.currentIndex++;

        if (this.currentIndex >= this.stories.length) {

            this.currentIndex = 0;

        }

        this.showStory();

    },

    showStory() {

        const story = this.stories[this.currentIndex];

        document.getElementById("category").innerHTML = story.category;

        document.getElementById("headline").innerHTML = story.headline;

        document.getElementById("summary").innerHTML = story.summary;

        document.getElementById("topicImage").src = story.image;

    }

};
