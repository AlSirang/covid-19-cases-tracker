import { useEffect, useState } from "react";
import { fetchData } from "../../apiCalls";
import { Line } from "react-chartjs-2";

export const Chart = () => {
    const [dailyData, setData] = useState([]);
    useEffect(() => {
        (async () => {
            const d = await fetchData("daily");
            setData(
                d.map((i) => ({
                    confirmed: i.confirmed.total,
                    deaths: i.deaths.total,
                    recovered: i.recovered.total,
                    date: i.reportDate,
                }))
            );
        })();
    }, []);

    return (
        <>
            <Line
                data={{
                    labels: dailyData.map((o) =>
                        new Date(o.date).toLocaleDateString()
                    ),
                    datasets: [
                        {
                            label: "Confirmed",
                            data: dailyData.map((o) => o.confirmed),
                            borderColor: "#3131ad",
                            fill: true,
                        },
                        {
                            label: "Recovered",
                            data: dailyData.map((o) => o.recovered),
                            borderColor: "#095809",
                            fill: true,
                        },
                        {
                            label: "Deaths",
                            data: dailyData.map((o) => o.deaths),
                            borderColor: "#ff0000",
                            fill: true,
                        },
                    ],
                }}
            />
        </>
    );
};
