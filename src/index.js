init = () => {

const form = document.querySelector('form');
const button = document.querySelector('button#butt');
const input = document.querySelector('input#track');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.reset();

    const url = `https://genius-song-lyrics1.p.rapidapi.com/search/?q=%3C${input.value}%3E&per_page=5&page=1`;
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a9e236959fmshe23de5b12eb5392p1be591jsn684b7c0f1d76',
		'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
	}
};
    

    fetch(url, options)
    .then(response => response.json())
    .then(response => {
    const value = response.hits[0].result.id;
    console.log(value);
    const p1 = document.querySelector('div#d t1');
    const p2 = document.querySelector('div#d t2');
    const p3 = document.querySelector('div#d t3');



    fetch(`https://genius-song-lyrics1.p.rapidapi.com/song/recommendations/?id=${value}`, options)
    .then(response => response.json())
    .then(response => {
        const short = response.song_recommendations.recommendations;
        const text1 = document.createTextNode(`${short[0].recommended_song.full_title}`);
        const text2 = document.createTextNode(short[1].recommended_song.full_title);
        const text3 = document.createTextNode(short[2].recommended_song.full_title);
        document.body.p1.appendChild(text1);
        document.body.p2.appendChild(text2); 
        document.body.p3.appendChild(text3); 

    });


    });
});




};



document.addEventListener('DOMContentLoaded', init);





