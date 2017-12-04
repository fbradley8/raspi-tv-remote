$(function() {
    $('*[clickable]').each(function(index, element) {
        var self = $(element);
        self.click(function(e) {
            $.ajax('http://10.0.0.4:8080/press/' + self.attr('id'))
        });
    });
});