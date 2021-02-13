const url = "https://covid19.mathdro.id/api";

export const fetchData = async (option) => {
    let urlToQuery = url;
    if (option) {
        urlToQuery = `${url}/${option}`;
    }
    try {
        const res = await fetch(urlToQuery);
        return await res.json();
    } catch (err) {
        console.log(err);
    }
};
