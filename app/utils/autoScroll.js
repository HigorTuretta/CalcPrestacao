export function scrollToBottom(timedelay=0) {
    var scrollId;
    var height = 0;
    var minScrollHeight = 100;
    scrollId = setInterval(function () {
        if (height <= document.body.scrollHeight) {
            window.scrollBy(0, minScrollHeight);
        }
        else {
            clearInterval(scrollId);
        }
        height += minScrollHeight;
    }, timedelay);           
}