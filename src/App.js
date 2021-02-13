import { useEffect, useState } from "react";
import { Grid, Paper } from "@material-ui/core";
import { Chart } from "./Components/Chart/Chart";
import { Header } from "./Components/Header/Header";
import { Card } from "./Components/Card/Card";
import { Title } from "./Components/Title/Title";
import { fetchData } from "./apiCalls";

const App = () => {
    const [data, setData] = useState([]);
    const [country, setCountry] = useState("");
    useEffect(() => {
        (async () => {
            let res = "";
            if (country) {
                try {
                    res = await fetchData("countries", country);
                } catch (err) {
                    console.log(err.message);
                }
            } else {
                res = await fetchData();
            }

            if (res.confirmed) {
                const { confirmed, recovered, deaths, lastUpdate } = res;
                setData([
                    { name: "confirmed", count: confirmed.value, lastUpdate },
                    { name: "recovered", count: recovered.value, lastUpdate },
                    { name: "deaths", count: deaths.value, lastUpdate },
                ]);
            } else {
                setData({ message: res.error.message });
            }
        })();
    }, [country]);

    const handleCountrySubmit = (countryName) => {
        setCountry(countryName);
    };

    if (data.message) {
        return <p>{data.message}</p>;
    }
    if (!data.length) {
        return <p>Loading Data.....</p>;
    }

    return (
        <>
            <Header handleCountry={handleCountrySubmit} />
            <Title name={country ? country : "Global"} />
            <Grid container>
                <Grid item xs={12} sm={4}>
                    {data.map((d, i) => (
                        <Card
                            key={i}
                            name={d.name}
                            count={d.count}
                            lastUpdate={d.lastUpdate}
                        />
                    ))}
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Paper>
                        <Chart c={country} Data={data} />
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
};
export default App;
