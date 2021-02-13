import { useEffect, useState } from "react";
import { fetchData } from "../../apiCalls";
import { Line, Bar } from "react-chartjs-2";

const lineChart = (dailyData) => {
    return (
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
    );
};

const barChart = (confirmed, recovered, deaths) => {
    return (
        <Bar
            data={{
                labels: ["Confirmed", "Recovered", "Deaths"],
                datasets: [
                    {
                        label: "Cases",
                        data: [confirmed.count, recovered.count, deaths.count],
                        backgroundColor: ["#3131ad", "#095809", "#ff0000"],
                        borderColor: ["#3131ad", "#095809", "#ff0000"],
                        borderWidth: 1,
                    },
                    
                ],
            }}
            options={{
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                            },
                        },
                    ],
                },
            }}
        />
    );
};
export const Chart = ({ Data, c }) => {
    const [dailyData, setData] = useState([]);
    const [, sa] = useState(c);
    useEffect(() => {
        (async () => {
            if (!c) {
                const d = await fetchData("daily");
                setData(
                    d.map((i) => ({
                        confirmed: i.confirmed.total,
                        deaths: i.deaths.total,
                        recovered: i.recovered.total,
                        date: i.reportDate,
                    }))
                );
            }
        })();
        // if 'c'changes rerender
        sa(c);
    }, [c]);

    return <>{c ? barChart(...Data) : lineChart(dailyData)}</>;
};
