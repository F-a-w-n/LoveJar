let loveNotes = [
    'I love your big green eyes and the way that you look at me like nobody else',
    'I love the way it feels when you cuddle up close in my arms and sleep on me',
    'I love your jokes and your sense of humour, you\'re the funniest person i\'ve ever met',
    'I love your body, even the parts you hate the most',
    'I love the way you laugh, and sing, and all the different ways your voice can brighten my day',
    'I love how you\'re always there to reassure me and comfort me',
    'I love your face, and your little top lip (it\'s very yummy)',
    'I love the way you smile when it\'s just us joking around together',
    'I love boobies (yours), and butt (also yours)',
    'I love how you help me be a better person and get over the shitty way I was raised',
    'I love when you sleep and you convulse for a sec and I just pet you and calm you down like you\'re my baby',
    'I love the way the whole world stops when we\'re together',
    'I love your feet, even though you think they\'re stinky and gross and veiny and you won\'t let me see them',
    'I love the way you smell, when I smell or even think about your scent I almost cry',
    'I love how we tell each other everything all the time, because we\'re not just best friends to cover up our relationship in front of your parents',
    'I love holding hands, and hugging, and holding your arm, and any form of physical contact with you',
    'I love that our day plans are always each other',
    'I love when you cook, especially when you let me cook with you even though I\'m annoying',
    'I love when you\'re naked, and I\'m naked, and we\'re both naked, and we do stuff ;)',
    'I love going through life together, I hope we live long and happy lives together',
    'I love being yours, and having you be mine',
    'I love the way you taste, and the sounds you make when I taste you',
    'I love how weirded out you get by my deep masc voice',
    'I love feeling so connected to you through everything we do, like we think the same thing about everything',
    'I love your cute little hands and how they feel in my gross man hands before I get too sweaty and you let go but it\'s okay cause then I get your thigh :)',
    'I love you <3'
];

let shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffle(loveNotes);

let i=0;

let newnote = () => {
    setTimeout(function() {
    $('#plate').removeClass('front');
    $('#container').removeClass('beginning');
    $('.curvable').addClass('curved');
    setTimeout(function() {
        $('#container').addClass('hover');
        setTimeout(function() {
            $('#container').addClass('fly_away_first');
            setTimeout(function() {
                $('#container').addClass('fly_away');
                setTimeout(function(){
                    $('#plate').addClass('front');
                    $('#container').removeClass('fly_away fly_away_first hover').addClass('beginning');
                    $('.curvable').removeClass('curved');
                    if (i < loveNotes.length) {
                        $('#note').text(loveNotes[i]);
                        $('#note').css("width", "100%");
                        $('#note').css("text-align", "center");
                        i++;
                    } else {
                        shuffle(loveNotes);
                        i=0;
                        $('#note').text(loveNotes[i]);
                        $('#note').css("width", "100%");
                        $('#note').css("text-align", "center");
                    }
                },3000);
            }, 600);
        }, 2000);
    }, 2800);
    }, 200);

}