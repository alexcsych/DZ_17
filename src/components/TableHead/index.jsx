import React, { Component } from "react";
import styles from "./TableHead.module.css";

class TableHead extends Component {
  render() {
    return (
      <thead>
        <tr className={styles.trForTH}>
          <th scope="col">S</th>
          <th scope="col">M</th>
          <th scope="col">T</th>
          <th scope="col">W</th>
          <th scope="col">T</th>
          <th scope="col">F</th>
          <th scope="col">S</th>
        </tr>
      </thead>
    );
  }
}

export default TableHead;
