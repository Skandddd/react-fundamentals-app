// Module 2:
// * use mockedAuthorsList and mockedCoursesList mocked data
// * remove useState for selected courseId
// * use hook useState for storing list of courses and authors
// * import Routes and Route from 'react-router-dom'
// * Add Routes to the container div (do not include Header to the Routes since header will not be changed with pages)
// ** TASK DESCRIPTION ** - https://react-fundamentals-tasks.vercel.app/docs/module-2/home-task/components#add-the-router-to-the-app-component

// Module 3:
// * the App component and BrowserRouter components should be wrapped with Redux 'Provider' in src/index.js
// * remove 'mockedAuthorsList' and 'mockedCoursesList' constants amd import and their use throughout the project
// * use selector from store/selectors.js to get user token from store
// * get courses and authors from the server. Use courses/all and authors/all GET requests.
// * save courses and authors to the store. Use 'setCourses' and 'setAuthors' actions from appropriate slices here 'src/store/slices'
// ** TASK DESCRIPTION ** - https://react-fundamentals-tasks.vercel.app/docs/module-3/home-task/components#app-component
import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import styles from "./App.module.css";
import {
  Header,
  Registration,
  Login,
  Courses,
  CourseInfo,
  CourseForm,
} from "./components";
import { useDispatch, useSelector } from "react-redux";
import { selectUserToken } from "./store/selectors";
import { getCourses, getAuthors } from "./services";
import { setCourses } from "./store/slices/coursesSlice";
import { setAuthors } from "./store/slices/authorsSlice";

function App() {
  const dispatch = useDispatch();
  const token = useSelector(selectUserToken);

  useEffect(() => {
    if (token && process.env.NODE_ENV !== "test") {
      const fetchData = async () => {
        try {
          const courses = await getCourses();
          const authors = await getAuthors();
          dispatch(setCourses(courses.result));
          dispatch(setAuthors(authors.result));
        } catch (error) {
          console.error("Error loading courses:", error);
        }
      };

      fetchData();
    }
  }, [token, dispatch]);

  return (
    <div className={styles.app}>
      <Header />
      <Routes>
        {!token ? (
          <>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Courses />} />
            <Route path="/courses/add" element={<CourseForm />} />
            <Route path="/courses/:courseId" element={<CourseInfo />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </div>
  );
}
export default App;

// Module 4:
// * rewrite old GET requests /courses/all with 'getCoursesThunk' from 'src/store/thunks/coursesThunk.js' using getCourses service from 'src/services.js'.
// * rewrite old GET requests /authors/all with 'getAuthorsThunk' from 'src/store/thunks/authorsThunk.js' using getAuthors service from 'src/services.js'.
// * wrap 'CourseForm' in the 'PrivateRoute' component
// * get authorized user info by 'user/me' GET request if 'localStorage' contains token
