import { gql, request } from 'graphql-request'
Hygraph_API = 'https://ap-south-1.cdn.hygraph.com/content/cm3ilaa8k06om07w0msduj6rg/master'

export const GetListCourses = async (courseLevel) => {
    const query = gql`
 query ListCourse {
  courses(where: {courseLevel: `+courseLevel+`}) {
    id
    price
    courseLevel
    tag
    time
    name
    chapter {
      ... on Chapter {
        id
        title
        content {
          ... on ChapterContent {
            id
            content {
              text
            }
            description {
              text
            }
            output {
              text
            }
            title
            
          }
        }
      }
    }
    banner {
      url
    }
    author
    description {
      raw
      text
    }
  }
}
`

const data = await request(Hygraph_API, query)

return data.courses;
}
export const GetList = async (courseLevel) => {
  const query = gql`
query ListCourse {
courses{
  id
  price
  courseLevel
  tag
  time
  name
  chapter {
    ... on Chapter {
      id
      title
      content {
        ... on ChapterContent {
          id
          content {
            text
          }
          description {
            text
          }
          output {
            text
          }
          title
          
        }
      }
    }
  }
  banner {
    url
  }
  author
  description {
    raw
    text
  }
}
}
`

const data = await request(Hygraph_API, query)

return data.courses;
}

export const createUserControlCourse = async (courseId, email) => {
  const mutation = gql`
  mutation MyMutation {
  createUsercControllCourse(
    data: {course: {connect: {id: "`+courseId+`"}}, courseId: "`+courseId+`", userEmail: "`+email+`"}
  ) {
    id
  }
  publishManyUsercControllCoursesConnection(to: PUBLISHED) {
    edges {
      node {
        id
      }
    }
  }
}
  `
  const result = await request(Hygraph_API,mutation);
  return result;
}

export const checkUserControlCourse = async (courseId, email) => {
  const query = gql`
  query MyQuery {
  usercControllCourses(where: {courseId: "`+courseId+`", userEmail: "`+email+`"}) {
    id
    courseId
    completeChapter {
      ... on CompleteChapter {
        chapterId
        id
      }
    }
  }
}
  `
  const result = await request(Hygraph_API,query);
  return result.usercControllCourses;
}
export const markChapterCompleted = async (courseId, userEmail, chapterId) => {
  const mutation = gql`
    mutation MarkChapterCompleted($courseId: String!, $userEmail: String!, $chapterId: String!) {
      updateUsercControllCourse(
        where: { courseId: $courseId, userEmail: $userEmail }
        data: {
          completeChapter: {
            connect: [{ chapterId: $chapterId }]  // Dùng connect để liên kết chapterId mới vào mảng
          }
        }
      ) {
        id
        completeChapter {
          chapterId
        }
      }
    }
  `;

  const variables = {
    courseId,
    userEmail,
    chapterId
  };

  try {
    const result = await request(Hygraph_API, mutation, variables);
    console.log('Chapter completed:', result);
    return result;
  } catch (error) {
    // In chi tiết lỗi từ server
    if (error.response) {
      console.error('Server error response:', error.response);
      console.error('Error message:', error.response.errors);
    } else {
      console.error('Error marking chapter as completed:', error);
    }
    throw new Error('Error marking chapter as completed');
  }
};