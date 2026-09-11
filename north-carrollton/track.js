(function () {
  function send(event, file) {
    var body = JSON.stringify({
      event: event,
      path: location.pathname,
      file_slug: file || "",
      referrer: document.referrer || "",
    });
    try {
      if (navigator.sendBeacon) {
        navigator.sendBeacon("/api/event", new Blob([body], { type: "application/json" }));
        return;
      }
    } catch (e) {}
    try {
      fetch("/api/event", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: body,
        keepalive: true,
      });
    } catch (e2) {}
  }
  send("page_view", "");
  document.addEventListener(
    "click",
    function (e) {
      var node = e.target;
      if (!node || !node.closest) return;
      var a = node.closest("a");
      if (!a) return;
      var href = a.getAttribute("href") || "";
      if (href.indexOf("Grant-Money-Brief") !== -1) send("file_download", "brief");
      else if (href.indexOf("PAYOUTS") !== -1) send("file_download", "payouts");
      else if (href.indexOf("WINONA-BANK") !== -1) send("file_download", "bank");
      else if (href.indexOf(".zip") !== -1) send("zip_download", "archive");
      else if (href.indexOf("VARIABLES") !== -1) send("file_download", "variables");
    },
    true,
  );
})();
