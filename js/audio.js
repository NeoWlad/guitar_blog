const player = new Plyr('#player', {
    invertTime: false,
});
player.source = {
    type: 'audio',
    sources: [
        {
            src: 'GetAMoveOn.mp3', // Путь к треку по умолчанию
            type: 'audio/mp3'
        }
    ]
};
$(function() {
    // Включение трека по клику
    $('.change-audio').click(function(){
        $('.change-audio').removeClass('active');
        $(this).addClass('active');   
        let audiourl = $(this).attr('data-audio');
        player.source = {
            type: 'audio',
            sources: [
                {
                    src: audiourl,
                    type: 'audio/mp3'
                }
            ]
        };       
        player.play();
    });
    // Переключение трека на следующий по окончанию   
    player.on('ended', event => {
        let nextaudio = $('.change-audio.active').next(".change-audio");
        let urlnextaudio = nextaudio.attr('data-audio');
        if (!urlnextaudio) {
            player.stop();    
            } else {
            $('.change-audio').removeClass('active');
            nextaudio.addClass('active');
            player.source = {
                type: 'audio',
                sources: [
                    {
                        src: urlnextaudio,
                        type: 'audio/mp3'
                    }
                ]
            };       
            player.play();    
        }
    });   
});