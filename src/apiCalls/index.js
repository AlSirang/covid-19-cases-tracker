const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
    try {
        const res = await fetch(url);
        return await res.json();
    } catch (err) {
        console.log(err);
    }
};
