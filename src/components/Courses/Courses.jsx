import React, { useState } from "react";

import styles from "./styles.module.css";
import { CourseCard } from "./components";
import { formatCreationDate, getCourseDuration } from "../../helpers";
import { Button } from "../../common";
import { SearchBar } from "../SearchBar/SearchBar";
import { EmptyList } from "../EmptyList/EmptyList";

// Module 1:
// * render list of components using 'CourseCard' component for each course
// * render 'ADD NEW COURSE' button (reuse Button component)
// ** TASK DESCRIPTION ** - https://react-fundamentals-tasks.vercel.app/docs/module-1/home-task/components#courses-component
// * render EmptyCourseList component when no courses
// ** TASK DESCRIPTION ** - https://react-fundamentals-tasks.vercel.app/docs/module-1/home-task/components#emptycourselist-component
// * DO NOT map authors to the course inside Courses.jsx component (DO it inside CourseCard)

// Module 2:
// * render this component by route '/courses'
// * navigate to this component if 'localStorage' contains user's token
// * navigate to the route courses/add by clicking 'Add New Course' button, use 'Link' component from 'react-router-dom'
// ** TASK DESCRIPTION ** - https://react-fundamentals-tasks.vercel.app/docs/module-2/home-task/components#courses

// Module 3:
// * stop using mocked courses and authors data
// * delete props 'coursesList' and 'authorsList'
// * use useSelector to get courses and authors from the store
// ** TASK DESCRIPTION ** - https://react-fundamentals-tasks.vercel.app/docs/module-3/home-task/components#courses-component

// Module 4:
// navigate to '/courses/add' route by clicking 'ADD NEW COURSE' button in the 'EmptyCourseList'.
// show message 'You don't have permissions to create a course. Please log in as ADMIN' by clicking ADD NEW COURSE button in the 'EmptyCourseList'.
// ** TASK DESCRIPTION ** - https://react-fundamentals-tasks.vercel.app/docs/module-4/home-task/components#emptycourselist-component

// Module 5:
// * proposed cases for unit tests:
//   ** Courses should display amount of CourseCard equal length of courses array.
//   ** CourseForm should be shown after a click on the "Add new course" button.

export const Courses = ({ coursesList, authorsList, handleShowCourse }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCourses, setFilteredCourses] = useState(coursesList);

  const handleSearch = () => {
    const term = searchTerm.trim().toLowerCase();

    if (term === "") {
      setFilteredCourses(coursesList);
      return;
    }

    const filtered = coursesList.filter(
      (course) =>
        course.title.toLowerCase().includes(term) ||
        course.id.toLowerCase().includes(term)
    );

    setFilteredCourses(filtered);
  };

  const handleSearchTermChange = (term) => {
    setSearchTerm(term);
    if (term === "") {
      setFilteredCourses(coursesList);
    }
  };

  const courses = filteredCourses.map((course) => ({
    id: course.id,
    title: course.title,
    description: course.description,
    creationDate: course.creationDate,
    duration: course.duration,
    authors: course.authors,
  }));

  return (
    <>
      <div className={styles.panel}>
        <SearchBar
          searchTerm={searchTerm}
          onSearchTermChange={handleSearchTermChange}
          onSearch={handleSearch}
        />
        <Button buttonText="ADD NEW COURSE" />
      </div>
      {courses.length === 0 ? (
        <EmptyList />
      ) : (
        courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            authorsList={authorsList}
            handleShowCourse={handleShowCourse}
          />
        ))
      )}
    </>
  );
};
