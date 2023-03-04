let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');


const apiURL = 'http://api.quotable.io/random';

try {

} catch (error) {

}

async function getQuote() {

    try {
        btn.innerText = 'Loading...';
        btn.disabled = true;
        quote.innerText = 'updating...';
        person.innerText = 'updating...';
        const response = await fetch(apiURL);
        const data = await response.json();
        const quoteContent = data.content;
        const quoteAuthor = data.author;
        quote.innerText = quoteContent;
        person.innerText = quoteAuthor;
        btn.innerText = 'New Quote';
        btn.disabled = false;
        console.log(data);

    } catch (error) {
        console.log(error);
        quote.innerText = 'An error occurred,try again later';
        person.innerText = 'An error occurred';
        btn.innerText = 'New Quote';
        btn.disabled = false;
    }

}

btn.addEventListener('click', getQuote);