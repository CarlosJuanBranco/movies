import axios from 'axios';

const getSearch = async (url) => {

    let searchResults = []

    await axios.get(url).then((res) => {
        const { data } = res;
        const { results } = data;
        searchResults = results;

    }).catch((error) => {
        console.log(error)
    })

    return { searchResults };
}

export default getSearch