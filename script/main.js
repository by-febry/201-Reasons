document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'C')) {
        e.preventDefault();
    }
});
const messages = [
    "You.",
    "Your smile.",
    "Your eyes.",
    "Humour.",
    "Your yap.",
    "Your voice.", 
    "The way you love.", 
    "Your clingy side.",
    "Your cute tampo.",
    "Your random 'I miss you'.",
    "The way you care.",
    "Your jealousy moments.",
    "Your loving words.",
    "How you comfort me.",
    "Your sleepy voice",
    "You spoil me.",
    "You validate me.",
    "Your deep affection.",
    "Your playfulness.",
    "You understand me.",
    "You accept me.",
    "Your patience.",
    "The way you trust.",
    "You check on me.",
    "You apologize.",
    "Sweet Compliments.",
    "How you miss me.",
    "You bring peace.",
    "Sleepy rants.",
    "Your soft baby.",
    "Your Genuine effort.",
    "You reassure me.",
    "Dark jokes.",
    "You're my home.",
    "You make life fun.",
    "Your beautiful soul.",
    "You make me better.",
    "Your giggle.",
    "Your stubborn love.",
    "Our deep talks.",
    "Your random thoughts.",
    "Your random calls.",
    "How you say sorry.",
    "Your cute drawings.",
    "Random gifts.",
    "Your warm presence.",
    "Your Concert.",
    "The way you tease.",
    "Your random tampo.",
    "Your sleepy murmurs.",
    "Your cats.",
    "Nymeria",
    "Charlotte,",
    "Your reassuring words.",
    "You never lie.",
    "You wait.",
    "Your little quirks.",
    "Your soft laughter.",
    "Your sincere love.",
    "Favorite hooman.",
    "Your morning laziness.",
    "Your cute tantrums.",
    "Your fights.",
    "The way you panic.",
    "Your soft breathing.",
    "Your well-being.",
    "The way you call my name.",
    "Your honest feelings.",
    "You never fake it.",
    "You challenge me.",
    "Your competetive spirit.",
    "Your endless support.",
    "Your reactions.",
    "Your small sacrifices.",
    "Your sinceriy always.",
    "Your natural beauty.",
    "Your silly side.",
    "Your little shyness.",
    "Your overthinking habits.",
    "The way you explain.",
    "Your peace",
    "Your deep thoughts.",
    "Your worries.",
    "Your need for reassurance.",
    "Your emotional depth.",
    "Your indecisiveness.",
    "Your overcare.",
    "24/7.",
    "Your emotional honesty.",
    "How you ask twice .",
    "Your way of stalking me.",
    "Your what-if scenarios.",
    "Your lambing.",
    "Your little sighs.",
    "The way you observe.",
    "How you stress.",
    "Your sudden silence.",
    "Your thoughtful processing.",
    "Your overlove.",
    "Your love despite fear.",
    "Your little 'I hate you'.",
    "Your attention to details.",
    "Your random food cravings.",
    "Your tsk.",
    "Your deep late-night talks.",
    "Your serious overthinking.",
    "Your little voice changes.",
    "Your confidence in me.",
    "Your body.",
    "Your passion.",
    "Your dedication.",
    "How you always come back.",
    "The way you protect our love.",
    'Your "Im the girlfriend" moments.',
    "Your strength.",
    "Your energy.",
    "Your creativty.",
    "Your words.",
    "Your ability to make me laugh.",
    "Your positive energy.",
    "Your courage.",
    "Gentle.",
    "Intelligent.",
    "Your appreciation.",
    "Your belief in me.",
    "Your love for your fam.",
    "You remember our moments.",
    "Your trustworthy.",
    "Your dedication to your goals.",
    "Your charm.",
    "Your respect.",
    "Your beliefs.",
    "You don't judge me.",
    "Our bond.",
    "Your grace.",
    "Our wild moments.",
    "Your effort.",
    "Your maturity.",
    "Your flaws.",
    "Your lips.",
    "Your responsible.",
    "Entertaining.",
    "Your affectionate.",
    "Your hair.",
    "Your special.",
    "How you make me feel needed.",
    "Your unique.",
    "You motivate me.",
    "Everything you do for me.",
    "You make sure I feel well.",
    "Your the reaons why my days are good.",
    "Your quiet life.",
    "You make me believe in myself.",
    "Your the reason why I smile.",
    "The way you talk about the things that you love.",
    "Your generous.",
    "Your always there for me.",
    "Your calls.",
    "You boost my confidence.",
    "You amazing.",
    "You beautiful.",
    "Your not judgemental.",
    "Your the reason I sleep happu.",
    "Our long talks.",
    "You make me giggle.",
    "You make me blush.",
    "You make me feel like I'm the luckiest person.",
    "Your my other half.",
    "Your deserve the world.",
    "You don't make me feel left out.",
    "You always thinkg about me.",
    "You make sure I'm not sad.",
    "Your hopeful.",
    "Your smart.",
    "Your cuteness.",
    "You lift my spirits.",
    "Your wholesome.",
    "Your loyal.",
    "Your generous.",
    "You make me feel worthy of love.",
    "You check up on me.",
    "Your small 'I love yous'.",
    "Your persistence.",
    "Your ace.",
    "Your soft heart.",
    "Your gorgeous.",
    "Your elegant.",
    "Your makeup.",
    "You make my heart melt.",
    "Your growth.",
    "Your ups and down.",
    "Your aim.",
    "My immortal.",
    "Our plans.",
    "Your My alarm.",
    "Your everything.",
    "Everything about you is perfect.",
    "Your my entire universe.",
    "You are your own person.",
    "Your worthy.",
    "Your existence.",
]


let currentPage = 0;
let isLastPage = false;

function showMessage() {
    const messageContainer = document.querySelector('.message');
    const historyContainer = document.querySelector('.message-history');

    if (!historyContainer) {
        console.error("Error: '.message-history' container is missing in the HTML.");
        return;
    }

    if (currentPage > 0) {
        const newMessage = document.createElement('div');
        newMessage.classList.add('history-item');
        newMessage.innerHTML = `<strong>${currentPage}.</strong> ${messages[currentPage - 1]}`;
        historyContainer.appendChild(newMessage);
    }

    messageContainer.textContent = messages[currentPage];

    isLastPage = currentPage === messages.length - 1;

    if (isLastPage) {
        document.querySelector('.next-button').style.display = 'block';
        document.querySelector('.bg_heart').style.cursor = 'default';
    } else {
        document.querySelector('.next-button').style.display = 'none';
        document.querySelector('.bg_heart').style.cursor = 'pointer';
    }
}

document.querySelector('.bg_heart').addEventListener('click', function () {
    if (!isLastPage) {
        currentPage++;
        showMessage();
    }
});

document.addEventListener("DOMContentLoaded", showMessage);


var love = setInterval(function() {
    var r_num = Math.floor(Math.random() * 40) + 1;
    var r_size = Math.floor(Math.random() * 65) + 10;
    var r_left = Math.floor(Math.random() * 100) + 1;
    var r_bg = Math.floor(Math.random() * 25) + 100;
    var r_time = Math.floor(Math.random() * 5) + 5;
    
    $('.bg_heart').append("<div class='heart' style='width:" + r_size + "px;height:" + r_size + "px;left:" + r_left + "%;background:rgba(255," + (r_bg - 25) + "," + r_bg + ",1);animation:love " + r_time + "s ease'></div>");
    
    $('.bg_heart').append("<div class='heart' style='width:" + (r_size - 10) + "px;height:" + (r_size - 10) + "px;left:" + (r_left + r_num) + "%;background:rgba(255," + (r_bg - 25) + "," + (r_bg + 25) + ",1);animation:love " + (r_time + 5) + "s ease'></div>");
    
    $('.heart').each(function() {
        var top = parseFloat($(this).css("top"));
        var width = parseFloat($(this).css("width"));
        if (top <= -100 || width >= 150) {
            $(this).remove();
        }
    });
}, 500);


function clearMusicState() {
    localStorage.removeItem('musicPlaying');
    localStorage.removeItem('musicCurrentTime');
}

window.onload = function() {
    clearMusicState(); 
}

function setupMusic() {
    
    if (!localStorage.getItem('initialLoad')) {
        clearMusicState();
        localStorage.setItem('initialLoad', 'true');
        music.currentTime = 0;
    }

    const isMusicPlaying = localStorage.getItem('musicPlaying') === 'true';
    const musicCurrentTime = localStorage.getItem('musicCurrentTime') || 0;

    if (isMusicPlaying) {
        music.currentTime = parseFloat(musicCurrentTime);
        music.play().catch(error => console.log('Playback failed', error));
    }

    music.addEventListener('play', () => {
        localStorage.setItem('musicPlaying', 'true');
    });

    music.addEventListener('pause', () => {
        localStorage.setItem('musicPlaying', 'false');
    });

    setInterval(() => {
        localStorage.setItem('musicCurrentTime', music.currentTime);
    }, 1000);

    document.addEventListener('click', function startMusic() {
        music.play().catch(error => {
            console.log('Autoplay prevented', error);
        });
        document.removeEventListener('click', startMusic);
    });
}

document.addEventListener('DOMContentLoaded', setupMusic);