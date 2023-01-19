import React, { Component } from "react";
import Head from "../Head";
import TableHead from "../TableHead";
import styles from "./Month.module.css";

class Month extends Component {
  render() {
    const headContent = this.props.headContent;
    return (
      <div className={styles.container}>
        {headContent}
        <Head headContent={headContent} />
        <TableHead />
      </div>
    );
  }
}

export default Month;
