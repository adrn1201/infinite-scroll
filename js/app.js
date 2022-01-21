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

let currentPage = 1;
const limit = 10;
let total = 0;

const hasMoreQuotes = (page, limit, total) => {
    const startIndex = (page - 1) * limit + 1;
    return total === 0 || startIndex < total;
};

const loadQuotes = async (page, limit) => {

    // show the loader
    showLoader();

    // 0.5 second later
    setTimeout(async () => {
        try {
            // if having more quotes to fetch
            if (hasMoreQuotes(page, limit, total)) {
                // call the API to get quotes
                const response = await getQuotes(page, limit);
                // show quotes
                showQuotes(response.data);
                // update the total
                total = response.total;
            }
        } catch (error) {
            console.log(error.message);
        } finally {
            hideLoader();
        }
    }, 500);

};