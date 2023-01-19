import React, { Component } from "react";
import styles from "./Head.module.css";

class Head extends Component {
  render() {
    const headContent = this.props.headContent;
    return <p className={styles.headContent}>{headContent}</p>;
  }
}

export default Head;
