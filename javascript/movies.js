const url = 'https://imdb8.p.rapidapi.com/title/find?q=game';

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '5cbe992ba7msh863033afc478086p1287c7jsn7f6d12c41f9d',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    }
};

fetch(url , options)
    .then(response => response.json())
    .then(myJson => {
        console.log(myJson);
        document.querySelector('#recommendations')
        
    })





// try {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     console.log(result);
// } catch (error) {
//     console.error(error);
// }