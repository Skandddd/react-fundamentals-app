import React from "react";
import { CourseCard } from "./components"; // Подключаем CourseCard
import { Button } from "../../common"; // Подключаем кнопку
import styles from "./styles.module.css"; // Подключите стили

export const Courses = ({ coursesList, authorsList, handleShowCourse }) => {
  return (
    <div className={styles.panel}>
      <Button
        buttonText="Add New Course"
        handleClick={() => {}}
        data-testid="addCourseButton"
      />
      {coursesList.length > 0 ? (
        coursesList.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            authorsList={authorsList} // 👈 добавлено!
            handleShowCourse={handleShowCourse}
          />
        ))
      ) : (
        <div data-testid="emptyContainer">
          <h2>Your List Is Empty</h2>
          <p>Please use "Add New Course" button to add your first course</p>
          <Button
            buttonText="Add New Course"
            handleClick={() => {}}
            data-testid="addCourse"
          />
        </div>
      )}
    </div>
  );
};
