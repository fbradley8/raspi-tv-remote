$(function() {
    $('*[clickable]').each(function(index, element) {
        var self = $(element);
        self.click(function(e) {
            // chrome.runtime.sendMessage({key: self.attr('id')});
            $.ajax('http://raspberrypi:8080/press/' + self.attr('id'))
        });
    });
});