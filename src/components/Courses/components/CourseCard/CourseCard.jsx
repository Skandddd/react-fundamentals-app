import React from "react";
import { Button } from "C:/Users/Skand/WebstormProjects/react-fundamentals-app/src/common/Button/Button.jsx";
import { getCourseDuration } from "C:/Users/Skand/WebstormProjects/react-fundamentals-app/src/components/Courses/components/CourseCard/helpers/getCourseDuration.js"; // Correct path
import { formatCreationDate } from "C:/Users/Skand/WebstormProjects/react-fundamentals-app/src/components/Courses/components/CourseCard/helpers/formatCreationDate.js";
import styles from "./styles.module.css";

export const CourseCard = ({ course, handleShowCourse, authorsList }) => {
  const { title, description, authors, duration, creationDate, id } = course;

  // Get authors' names from authorsList by IDs, handle undefined and empty cases
  const authorsNames =
    authors
      .map((authorId) => authorsList[authorId])
      .filter((name) => name) // Remove undefined or falsy values
      .join(", ") || "Unknown Authors"; // Fallback for empty list

  // Format duration and date
  const formattedDuration = getCourseDuration(duration);
  const formattedDate = formatCreationDate(creationDate);

  return (
    <div className={styles.cardContainer} data-testid="courseCard">
      <div className={styles.cardText}>
        <h2 data-testid="courseTitle">{title}</h2>
        <p data-testid="courseDescription">{description}</p>
      </div>
      <div className={styles.cardDetails}>
        <p className={styles.authors} data-testid="courseAuthors">
          <b>Authors: </b>
          {authorsNames.length > 50
            ? `${authorsNames.slice(0, 50)}...`
            : authorsNames}
        </p>
        <p data-testid="courseDuration">
          <b>Duration: </b>
          <span>{formattedDuration}</span>
        </p>
        <p data-testid="courseCreated">
          <b>Created: </b>
          <span>{formattedDate}</span>
        </p>
        <div className={styles.buttonsContainer}>
          <Button
            buttonText="Show Course"
            handleClick={() => handleShowCourse(id)}
            data-testid="showCourseButton"
          />
        </div>
      </div>
    </div>
  );
};
