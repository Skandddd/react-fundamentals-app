import React from "react";
import styles from "./styles.module.css"; // Подключите стили

export const Input = ({
  placeholderText,
  labelText,
  onChange,
  "data-testid": dataTestId,
}) => (
  <label className={styles.label}>
    {labelText}
    <input
      onChange={onChange}
      placeholder={placeholderText}
      className={styles.input}
      data-testid={dataTestId}
    />
  </label>
);
