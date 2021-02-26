import Pagination from "@material-ui/lab/Pagination";
import React, { useState } from "react";
import useStyles from "./styles";

export default function MyPagination({
  count,
  func,
}: {
  count: number;
  func: Function;
}) {
  const classes = useStyles();
  const [page, setPage] = useState(1);

  const handleChange = (event: any, value: number) => {
    setPage(value);
    func(value);
  };
  count = Math.ceil(count / 4);
  return (
    <div className={classes.root}>
      <Pagination
        count={count}
        showFirstButton
        showLastButton
        size="large"
        page={page}
        onChange={handleChange}
      />
    </div>
  );
}
