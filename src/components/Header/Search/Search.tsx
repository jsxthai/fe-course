import SearchIcon from "@material-ui/icons/Search";
import {
  ButtonBase,
  createStyles,
  InputBase,
  makeStyles,
  Theme,
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    searchForm: {
      flex: 1,
      height: "46px",
      border: "1px solid #989586",
      borderRadius: "9999px",
      display: "flex",
      alignItems: "center",
      paddingLeft: "15px",
      fontSize: "1rem",
    },
    search: {
      marginLeft: "15px",
    },
  })
);

const Search = () => {
  const classes = useStyles();
  let history = useHistory();
  const textSearch = "text search";
  const handleSearch = () => {
    history.push("/search?text=" + textSearch);
  };

  return (
    <form action="" className={classes.searchForm}>
      <ButtonBase disableRipple onClick={handleSearch}>
        <SearchIcon style={{ color: "#73726c" }} />
      </ButtonBase>
      <InputBase
        fullWidth
        className={classes.search}
        placeholder="Search ..."
      ></InputBase>
    </form>
  );
};

export default Search;
