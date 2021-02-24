import React from "react";
import { useParams } from "react-router-dom";

const CourseDetail = (): JSX.Element => {
  let { id }: { id: string } = useParams();

  if (id === "10") {
    return <h1>not found course: {id}</h1>;
  }

  return <div>{id}</div>;
};

export default CourseDetail;
