// ==========================================
// TechVision Live 24x7
// Main Application
// ==========================================

(async function(){

    // Load all JSON data
    await DataLoader.initialize();

    // Start Clock
    ClockModule.start();

    // Start Breaking News Ticker
    TickerModule.start();

    // Start Broadcast
    BroadcastEngine.start();

})();
