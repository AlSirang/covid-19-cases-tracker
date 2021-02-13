import { Typography } from "@material-ui/core";
import "./Title.css";
export const Title = ({ name }) => {
    return (
        <div className="center">
            <Typography variant="h4">{name} Statistics</Typography>
        </div>
    );
};
