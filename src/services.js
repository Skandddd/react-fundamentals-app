const BASE_URL = "http://localhost:4000";

export const getCourses = async () => {
  try {
    const response = await fetch(`${BASE_URL}/courses/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    if (!response.ok) {
      const message = result?.result || "Unable to get courses!";
      throw new Error(message);
    }

    return result;
  } catch (error) {
    throw error;
  }
};

export const getAuthors = async () => {
  try {
    const response = await fetch(`${BASE_URL}/authors/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    if (!response.ok) {
      const message = result?.result || "Unable to get authors!";
      throw new Error(message);
    }

    return result;
  } catch (error) {
    throw error;
  }
};

export const createUser = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    if (!response.ok) {
      const message = result?.result || "Unable to sign up the user!";
      throw new Error(message);
    }

    return result;
  } catch (error) {
    throw error;
  }
};

export const login = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    if (!response.ok) {
      const message = result?.result || "Wrong login or password!";
      throw new Error(message);
    }

    return result;
  } catch (error) {
    throw error;
  }
};

export const createCourse = async (course) => {
  const token = localStorage.getItem("token");
  const response = await fetch(`${BASE_URL}/courses/add`, {
    method: "POST",
    body: JSON.stringify(course),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const result = await response.json();

  if (!response.ok) {
    const message = result?.result || "Unable to create course!";
    throw new Error(message);
  }

  return result;
};

export const deleteCourse = async (courseId) => {
  const token = localStorage.getItem("token");
  const response = await fetch(`${BASE_URL}/courses/${courseId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const result = await response.json();
    const message = result?.result || "Unable to delete course!";
    throw new Error(message);
  }
};

export const updateCourse = async (course) => {
  const token = localStorage.getItem("token");
  const response = await fetch(`${BASE_URL}/courses/${course.id}`, {
    method: "PUT",
    body: JSON.stringify(course),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const result = await response.json();

  if (!response.ok) {
    const message = result?.result || "Unable to update course!";
    throw new Error(message);
  }

  return result;
};
