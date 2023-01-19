import React, { Component } from "react";
import Head from "../Head";
import TableHead from "../TableHead";
import Week from "../Week";
import styles from "./Month.module.css";

class Month extends Component {
  render() {
    const headContent = this.props.headContent;
    return (
      <div className={styles.container}>
        <Head headContent={headContent} />
        <table>
          <TableHead />
          <Week />
        </table>
      </div>
    );
  }
}

export default Month;
