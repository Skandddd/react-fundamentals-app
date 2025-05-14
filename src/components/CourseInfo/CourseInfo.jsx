// Module 2.
// * render component by route '/courses/:courseId'
// * use 'useParam' hook to get course id, remove prop 'showCourseId'
// * remove 'onBack' prop
// * use '<Link />' instead <Button /> component for 'BACK' button
// ** TASK DESCRIPTION ** - https://react-fundamentals-tasks.vercel.app/docs/module-2/home-task/components#course-info
// props description
// * 'coursesList' - list of all courses. You need it to get chosen course from the list
// * 'authorsList' - list of all authors. You need it to get authors' names for chosen course
// * 'showCourseId' - id of chosen course. Use it to find needed course on the 'coursesList'.

// Module 3.
// * remove props 'coursesList', 'authorsList'
// * use selectors from store/selectors.js to get coursesList, authorsList from store
import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getCoursesSelector, getAuthorsSelector } from "../../store/selectors";
import { formatCreationDate, getCourseDuration } from "../../helpers";
import styles from "./styles.module.css";
import buttonStyles from "../../common/Button/styles.module.css";

export const CourseInfo = () => {
  const { courseId } = useParams();
  const courses = useSelector(getCoursesSelector);
  const authors = useSelector(getAuthorsSelector);

  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    return <p data-testid="courseInfo">Course not found</p>;
  }

  const courseAuthors = course.authors.map((id) => {
    const author = authors.find((a) => a.id === id);
    return author ? author.name : "Unknown Author";
  });

  return (
    <div className={styles.container} data-testid="courseInfo">
      <h1>{course.title}</h1>
      <div className={styles.courseInfo}>
        <p className={styles.description}>{course.description}</p>
        <div>
          <p>
            <b>ID:</b> {course.id}
          </p>
          <p>
            <b>Duration:</b> {getCourseDuration(course.duration)}
          </p>
          <p>
            <b>Created:</b> {formatCreationDate(course.creationDate)}
          </p>
          <div>
            <b>Authors:</b>
            <ul className={styles.authorsList}>
              {courseAuthors.map((name, idx) => (
                <li key={idx}>{name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.backButtonContainer}>
        <Link to="/courses" className={buttonStyles.button}>
          Back
        </Link>
      </div>
    </div>
  );
};

// props description
// * 'coursesList' - list of all courses. You need it to get chosen course from the list
// * 'authorsList' - list of all authors. You need it to get authors' names for chosen course
// * 'showCourseId' - id of chosen course. Use it to find needed course on the 'coursesList'.
