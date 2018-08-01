(function() {
   addEventListener("message",
                    function(e) {
                      e.source.postMessage(eval(e.data) + "");
                    },
                    true);
})();
