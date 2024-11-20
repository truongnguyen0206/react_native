import { gql, request } from 'graphql-request'
Hygraph_API = ''

export const GetListCourses = async (courseLevel) => {
    const query = gql`
      query ListCourse {
  courses(where: {courseLevel: `+courseLevel+`}) {
    id
    price
    courseLevel
    tag
    time
    author
    banner {
      url
    }
    name
    chapter {
      ... on Chapter {
        id
      }
    }
  }
}
`

const data = await request(Hygraph_API, query)

return data.courses;
}