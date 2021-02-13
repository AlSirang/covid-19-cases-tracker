const url = "https://covid19.mathdro.id/api";

export const fetchData = async (option, country="") => {
    let urlToQuery = url;
    switch (option) {
        case "countries":
            urlToQuery = `${url}/countries/${country}`;
            break;
        case "daily":
            urlToQuery = `${url}/daily`;
            break;
        default:
            break;
    }

    try {
        const res = await fetch(urlToQuery);
        return await res.json();
    } catch (err) {
        console.log(err);
    }
};
