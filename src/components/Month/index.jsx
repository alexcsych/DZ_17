import React, { Component } from "react";
import Head from "../Head";
import TableHead from "../TableHead";
import styles from "./Month.module.css";

class Month extends Component {
  render() {
    const headContent = this.props.headContent;
    const monthDaysTable = this.props.monthDaysTable;
    return (
      <div className={styles.container}>
        <Head headContent={headContent} />
        <table className={styles.tableContent}>
          <TableHead />
          <tbody>{monthDaysTable}</tbody>
        </table>
      </div>
    );
  }
}

export default Month;
