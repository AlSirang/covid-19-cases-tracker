import { AppBar, Toolbar, Typography, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useState } from "react";
import { useStyles } from "./HeaderStyles";

export const Header = ({ handleCountry }) => {
    const classes = useStyles();
    const [usrInput, setInput] = useState("");
    const handleChange = (e) => {
        setInput(e.target.value);
    };
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.title} variant="h5" noWrap>
                        Covid-19 Cases Tracker
                    </Typography>
                    <div className={classes.search}>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleCountry(usrInput);
                            }}>
                            <div className={classes.searchIcon}></div>

                            <InputBase
                                placeholder="Country..."
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                onChange={handleChange}
                                value={usrInput}
                                inputProps={{ "aria-label": "search" }}
                            />
                            <button type="submit" className={classes._btn}>
                                <SearchIcon />
                            </button>
                        </form>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};
