import { useEffect, useState } from "react";
import { Grid, Paper } from "@material-ui/core";

import { Header } from "./Components/Header/Header";
import { Card } from "./Components/Card/Card";
import { Title } from "./Components/Title/Title";
import { fetchData } from "./apiCalls";

const App = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        (async () => {
            const {
                confirmed,
                recovered,
                deaths,
                lastUpdate,
            } = await fetchData();

            setData([
                { name: "confirmed", count: confirmed.value, lastUpdate },
                { name: "recovered", count: recovered.value, lastUpdate },
                { name: "deaths", count: deaths.value, lastUpdate },
            ]);
        })();
    }, []);
    if (!data.length) {
        return <p>Loading Data.....</p>;
    }
    return (
        <>
            <Header />
            <Title name="Global" />

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
                    <Paper> xs=8</Paper>
                </Grid>
            </Grid>
        </>
    );
};
export default App;
