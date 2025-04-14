import React from "react";
import { Button } from "C:/Users/Skand/WebstormProjects/react-fundamentals-app/src/common/Button/Button.jsx"; // Adjusted path
import { getCourseDuration } from "C:/Users/Skand/WebstormProjects/react-fundamentals-app/src/components/Courses/components/CourseCard/helpers/getCourseDuration.js"; // Correct path
import { formatCreationDate } from "C:/Users/Skand/WebstormProjects/react-fundamentals-app/src/components/Courses/components/CourseCard/helpers/formatCreationDate.js"; // Correct path
import styles from "./styles.module.css";

export const CourseInfo = ({
  coursesList,
  authorsList,
  onBack,
  showCourseId,
}) => {
  // Find the course or provide a fallback
  const course = coursesList.find((course) => course.id === showCourseId) || {
    id: "N/A",
    title: "Course Not Found",
    description: "No course data available.",
    authors: [],
    duration: 0,
    creationDate: new Date().toISOString(),
  };

  // Map author IDs to names, handle undefined and empty cases
  const authorsNames =
    course.authors
      .map((authorId) => authorsList[authorId])
      .filter((name) => name) // Remove undefined or falsy values
      .join(", ") || "Unknown Authors"; // Fallback for empty list

  // Format duration and date
  const formattedDuration = getCourseDuration(course.duration);
  const formattedDate = formatCreationDate(course.creationDate);

  return (
    <div className={styles.container} data-testid="courseInfo">
      <h1 data-testid="courseInfoTitle">{course.title}</h1>
      <div className={styles.courseInfo}>
        <p data-testid="courseInfoDescription">{course.description}</p>
        <p data-testid="courseInfoId">
          <b>ID: </b>
          {course.id}
        </p>
        <p className={styles.authors} data-testid="courseInfoAuthors">
          <b>Authors: </b>
          {authorsNames.length > 50
            ? `${authorsNames.slice(0, 50)}...`
            : authorsNames}
        </p>
        <p data-testid="courseInfoDuration">
          <b>Duration: </b>
          {formattedDuration}
        </p>
        <p data-testid="courseInfoCreated">
          <b>Created: </b>
          {formattedDate}
        </p>
      </div>
      <div className={styles.buttonsContainer}>
        <Button
          buttonText="Back"
          handleClick={onBack}
          data-testid="backButton"
        />
      </div>
    </div>
  );
};
