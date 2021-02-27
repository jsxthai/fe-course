import { gql } from "@apollo/client";
export const SEARCH = gql`
  query Search($filter: String!) {
    search(filter: $filter) {
      id
      name
      price
      image
      description
      user {
        name
      }
      CourseDetail {
        id
        text
        courseId
      }
      lecture {
        text
        courseId
        content {
          name
          video
          id
        }
      }
      categories {
        name
      }
    }
  }
`;
