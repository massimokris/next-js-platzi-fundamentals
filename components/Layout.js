import React from "react";
import Navbar from "@components/Navbar";
// import Footer from './Footer'
import styles from "@components/layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
      <footer className="footer"> This is footer </footer>
      <style jsx>{`
        .footer {
          background-color: red;
        }
      `}</style>
    </div>
  );
};

export default Layout;
