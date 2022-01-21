const allQuotes = document.querySelector('.quotes');
const loader = document.querySelector('.loader');

const getQuotes = async(page, limit) => {
    try{
        const data = await axios.get(`https://api.javascripttutorial.net/v1/quotes/?page=${page}&limit=${limit}`);
        return data;
    } catch(e){
        console.log(e);
    }
}

const showQuotes = (quotes) => {
    for(const quote of quotes){
        const newQuoteEl = document.createElement('blockquote');
        newQuoteEl.classList.add('quote');
        newQuoteEl.innerHTML = `
            <span>${quote.id})</span>
            ${quote.quote}
            <footer>${quote.author}</footer>
        `;
        allQuotes.append(newQuoteEl);
    }
};

const hideLoader = () => {
    loader.classList.remove('show')
}

const showLoader = () => {
    loader.classList.add('show');
}