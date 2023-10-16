init = () => {

const form = document.querySelector('form');
const button = document.querySelector('button#butt');
const input = document.querySelector('input#track');
const night = document.querySelector('div.nigh');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.reset();




    const url = `https://genius-song-lyrics1.p.rapidapi.com/search/?q=%3C${input.value}%3E&per_page=5&page=1`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '28ac770451mshcae1abce9c32d63p145300jsnf781a39791d6',
            'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
        }
    };
    

    fetch(url, options)
    .then(response => response.json())
    .then(response => {
    const value = response.hits[0].result.id;
    console.log(value);
    const p1 = document.querySelector('p.t1');
    const p2 = document.querySelector('p.t2');
    const p3 = document.querySelector('p.t3');
    const i1 = document.querySelector('img.img1');
    const i2 = document.querySelector('img.img2');
    const i3 = document.querySelector('img.img3');
    const divy = document.getElementById('d');



    fetch(`https://genius-song-lyrics1.p.rapidapi.com/song/recommendations/?id=${value}`, options)
    .then(response => response.json())
    .then(response => {
        const short = response.song_recommendations.recommendations;
        console.log(short);
        const text1 = short[0].recommended_song.full_title;
        const text2 = short[1].recommended_song.full_title;
        const text3 = short[2].recommended_song.full_title;
        p1.innerHTML = text1;
        p2.innerHTML = text2;
        p3.innerHTML = text3;
        i1.src = short[0].recommended_song.header_image_url;
        i2.src = short[1].recommended_song.header_image_url;
        i3.src = short[2].recommended_song.header_image_url;

        const myTimeout = setTimeout(greekSalad, 1000);

        function greekSalad() {
            divy.style.display = 'flex';
            window.scrollBy(0, 800);
        };


    });


    });
});

const heart = document.getElementById('fa');
const heart1 = document.getElementById('fa1');
const heart2 = document.getElementById('fa2');
heart.addEventListener('click', function() {
    if (heart.className==='fa fa-heart') {heart.classList.add('red')}
    else {heart.className='fa fa-heart'};
});


heart1.addEventListener('click', function() {
    if (heart1.className==='fa fa-heart') {heart1.classList.add('red')}
    else {heart1.className='fa fa-heart'};

});
heart2.addEventListener('click', function() {
    if (heart2.className==='fa fa-heart') {heart2.classList.add('red')}
    else {heart2.className='fa fa-heart'};
});

};



document.addEventListener('DOMContentLoaded', init);





