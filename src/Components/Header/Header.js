import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },

    title: {
        flexGrow: 1,
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
    },
}));
export const Header = () => {
    const classes = useStyles;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Covid-19 Tracker
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};
