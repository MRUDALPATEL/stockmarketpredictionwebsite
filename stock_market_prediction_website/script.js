// script.js
document.addEventListener("DOMContentLoaded", function () {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js";
    script.async = true;
    script.innerHTML = `{
      "symbol": "NASDAQ:AAPL",
      "width": 300,
      "colorTheme": "dark",
      "isTransparent": true,
      "locale": "en"
    }`;
    document.getElementById("widget-1").appendChild(script);
});

document.addEventListener("DOMContentLoaded", function () {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js";
    script.async = true;
    script.innerHTML = `{
      "symbol": "NASDAQ:GOOGL",
      "width": 300,
      "colorTheme": "dark",
      "isTransparent": true,
      "locale": "en"
    }`;
    document.getElementById("widget-2").appendChild(script);
});

document.addEventListener("DOMContentLoaded", function () {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js";
    script.async = true;
    script.innerHTML = `{
      "symbol": "NASDAQ:NFLX",
      "width": 300,
      "colorTheme": "dark",
      "isTransparent": true,
      "locale": "en"
    }`;
    document.getElementById("widget-3").appendChild(script);
});



document.addEventListener("DOMContentLoaded", function () {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
    script.async = true;
    script.innerHTML = `{
        "feedMode": "all_symbols",
        "colorTheme": "dark",
        "isTransparent": false,
        "displayMode": "compact",
        "width": "1500",
        "height": "400",
        "locale": "en"
}`;
    document.getElementById("news-column").appendChild(script);
});


