(function () {
  const client = window.TAHA_ADSENSE_CLIENT || "";
  if (!/^ca-pub-\d{8,}$/.test(client)) return;
  if (document.querySelector("script[data-taha-adsense-loader]")) return;

  const script = document.createElement("script");
  script.async = true;
  script.crossOrigin = "anonymous";
  script.dataset.tahaAdsenseLoader = "true";
  script.src =
    "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" +
    encodeURIComponent(client);
  document.head.appendChild(script);
})();
