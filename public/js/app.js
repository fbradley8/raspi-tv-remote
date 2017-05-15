$(function() {
    $('*[clickable]').each(function(index, element) {
        var self = $(element);
        self.click(function(e) {
            $.ajax('http://pizero:8080/press/' + self.attr('id'))
        });
    });
});