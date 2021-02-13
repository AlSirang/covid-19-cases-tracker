import { Typography, Paper } from "@material-ui/core";
import "./Card.css";

export const Card = ({ name, count, lastUpdate }) => {
    return (
        <div>
            <Paper className="card-style">
                <Typography variant="h3" className={name}>
                    {name}
                </Typography>
                <Typography variant="h6">{count}</Typography>
                <Typography>
                    {(new Date(lastUpdate)).toUTCString()}
                </Typography>
            </Paper>
        </div>
    );
};
