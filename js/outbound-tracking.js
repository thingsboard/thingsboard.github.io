function _gaLt(event) {

    /* If GA is blocked or not loaded, or not main|middle|touch click then don't track */
    if (!ga.hasOwnProperty("loaded") || ga.loaded != true || (event.which != 1 && event.which != 2)) {
        return;
    }

    var el = event.srcElement || event.target;

    /* Loop up the DOM tree through parent elements if clicked element is not a link (eg: an image inside a link) */
    while (el && (typeof el.tagName == 'undefined' || el.tagName.toLowerCase() != 'a' || !el.href)) {
        el = el.parentNode;
    }

    /* if a link with valid href has been clicked */
    if (el && el.href) {

        var link = el.href;

        /* Only if it is an external link */
        if (link.indexOf(location.host) == -1 && !link.match(/^javascript\:/i)) {

            /* Is actual target set and not _(self|parent|top)? */
            var target = (el.target && !el.target.match(/^_(self|parent|top)$/i)) ? el.target : false;

            /* Assume a target if Ctrl|shift|meta-click */
            if (event.ctrlKey || event.shiftKey || event.metaKey || event.which == 2) {
                target = "_blank";
            }

            var hbrun = false; // tracker has not yet run

            /* HitCallback to open link in same window after tracker */
            var hitBack = function() {
                /* run once only */
                if (hbrun) return;
                hbrun = true;
                window.location.href = link;
            };

            if (target) { /* If target opens a new window then just track */
                ga(
                    "send", "event", "Outgoing Links", link,
                    document.location.pathname + document.location.search
                );
            } else { /* Prevent standard click, track then open */
                event.preventDefault ? event.preventDefault() : event.returnValue = !1;
                /* send event with callback */
                ga(
                    "send", "event", "Outgoing Links", link,
                    document.location.pathname + document.location.search, {
                        "hitCallback": hitBack
                    }
                );

                /* Run hitCallback again if GA takes longer than 1 second */
                setTimeout(hitBack, 1000);
            }
        }
    }
}

var _w = window;
/* Use "click" if touchscreen device, else "mousedown" */
var _gaLtEvt = ("ontouchstart" in _w) ? "click" : "mousedown";
/* Attach the event to all clicks in the document after page has loaded */
_w.addEventListener ? _w.addEventListener("load", function() {document.body.addEventListener(_gaLtEvt, _gaLt, !1)}, !1)
    : _w.attachEvent && _w.attachEvent("onload", function() {document.body.attachEvent("on" + _gaLtEvt, _gaLt)});
