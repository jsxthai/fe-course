import React, { useState } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& > *": {
        marginTop: theme.spacing(2),
      },
      width: "auto",
    },
  })
);

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
