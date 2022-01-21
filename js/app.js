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