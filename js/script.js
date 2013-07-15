$(document).ready(function() {
    $('article:first-child').addClass('visible').fadeIn(1000);

    $('#android-rooted-list a').click(function() {
        $('article.visible').removeClass('visible').removeClass('gayab').hide();
        $('li.active').removeClass('active');
        $('#android-rooted').addClass('visible').fadeIn(1000);
        $('#android-rooted-list').addClass('active');
        
        
    });
    $('#no-task-killer-list a').click(function() {
        $('article.visible').removeClass('visible').removeClass('gayab').hide();
        $('li.active').removeClass('active');
        $('#no-task-killer').removeClass('gayab').addClass('visible').fadeIn(1000);
        $('#no-task-killer-list').addClass('active');
    });
});
