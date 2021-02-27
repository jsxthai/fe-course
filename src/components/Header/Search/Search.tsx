import { ButtonBase, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import { useHistory } from "react-router-dom";
import useStyles from "./styles";

const Search = () => {
  const classes = useStyles();
  let history = useHistory();

  const handleSearch = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      keySearch: { value: string };
      //
    };
    const keySearch = target.keySearch.value;
    history.push("/search/" + keySearch);
  };

  return (
    <form className={classes.searchForm} onSubmit={handleSearch}>
      <ButtonBase disableRipple>
        <SearchIcon style={{ color: "#73726c" }} />
      </ButtonBase>
      <InputBase
        fullWidth
        name="keySearch"
        className={classes.search}
        placeholder="Search ..."
      ></InputBase>
    </form>
  );
};

export default Search;
