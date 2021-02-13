import { Typography, Paper } from "@material-ui/core";
import CountUp from "react-countup";
import "./Card.css";

export const Card = ({ name, count, lastUpdate }) => {
    return (
        <div>
            <Paper className="card-style">
                <Typography variant="h3" className={name}>
                    {name}
                </Typography>
                <Typography variant="h6">
                    <CountUp start={0} end={count} delay={0.5} separator="," />
                </Typography>
                <Typography>{new Date(lastUpdate).toDateString()}</Typography>
            </Paper>
        </div>
    );
};
