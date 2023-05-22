import React from "react";
import styles from "@/styles/Button.module.css";

export default function Button({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  return (
    <button className={styles.genericButton} {...props}>
      {children}
    </button>
  );
}
