import { ButtonBase, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import { useHistory } from "react-router-dom";
import useStyles from "./styles";

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
