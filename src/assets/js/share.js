/*
  Progressive enhancement for the post share row.

  The intent links in the markup work on their own with JavaScript off. This
  file only adds the two controls that cannot work without it, and each stays
  hidden unless the browser actually supports the API behind it.
*/
(function () {
    "use strict";

    var root = document.querySelector(".post-share");
    if (!root) {
        return;
    }

    var url = root.getAttribute("data-share-url");
    var title = root.getAttribute("data-share-title");

    // Native share sheet. This is how most sharing actually happens on a phone.
    var nativeBtn = root.querySelector(".share-native");
    if (nativeBtn && typeof navigator.share === "function") {
        nativeBtn.hidden = false;
        nativeBtn.addEventListener("click", function () {
            navigator.share({ title: title, url: url }).catch(function () {
                // Dismissing the sheet rejects the promise. Not an error.
            });
        });
    }

    // Copy link. Needs a secure context, which the deployed site has.
    var copyBtn = root.querySelector(".share-copy");
    if (copyBtn && navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
        copyBtn.hidden = false;
        copyBtn.addEventListener("click", function () {
            navigator.clipboard.writeText(url).then(function () {
                var original = copyBtn.getAttribute("data-label") || copyBtn.textContent;
                copyBtn.setAttribute("data-label", original);
                copyBtn.textContent = "Copied";
                copyBtn.classList.add("is-copied");
                window.setTimeout(function () {
                    copyBtn.textContent = original;
                    copyBtn.classList.remove("is-copied");
                }, 2000);
            }).catch(function () {
                // Clipboard write can be refused by permissions policy.
            });
        });
    }
})();
