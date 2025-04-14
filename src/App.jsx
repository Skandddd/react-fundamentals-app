import React, { useState } from "react";
import styles from "./App.module.css";

// Импорт компонентов
import { Header } from "./components";
import { Courses } from "./components/Courses/Courses.jsx";
import { CourseInfo } from "./components/CourseInfo/CourseInfo.jsx";

function App() {
  // Мокированные данные для курсов и авторов
  const mockedAuthorsList = {
    1: "Author One",
    2: "Author Two",
    3: "Author Three",
  };

  const mockedCoursesList = [
    {
      id: 1,
      title: "Course 1",
      description: "Description for course 1",
      authors: [1, 2], // Ссылаемся на авторов из mockedAuthorsList
      duration: 120,
      creationDate: "01/01/2025",
    },
    {
      id: 2,
      title: "Course 2",
      description: "Description for course 2",
      authors: [2, 3], // Ссылаемся на авторов из mockedAuthorsList
      duration: 90,
      creationDate: "05/03/2024",
    },
  ];

  // Состояние для хранения ID выбранного курса
  const [showCourseId, setShowCourseId] = useState(null);

  // Функция для обновления showCourseId
  const handleShowCourse = (courseId) => {
    setShowCourseId(courseId);
  };

  return (
    <div className={styles.wrapper}>
      {/* Header */}
      <Header />

      <div className={styles.container}>
        {/* Если showCourseId есть, показываем CourseInfo, иначе Courses */}
        {showCourseId ? (
          <CourseInfo
            coursesList={mockedCoursesList}
            authorsList={mockedAuthorsList}
            showCourseId={showCourseId}
            onBack={() => setShowCourseId(null)} // Назад к списку курсов
          />
        ) : (
          <Courses
            coursesList={mockedCoursesList}
            authorsList={mockedAuthorsList}
            handleShowCourse={handleShowCourse}
          />
        )}
      </div>
    </div>
  );
}

export default App;
