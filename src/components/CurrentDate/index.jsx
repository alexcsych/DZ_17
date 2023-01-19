import React, { Component } from "react";
import styles from "./CurrentDate.module.css";

class CurrentDate extends Component {
  render() {
    const day = this.props.currentDay;
    const weekDay = this.props.currentWeekday;
    return (
      <div className={styles.container}>
        <p className={styles.currentWeekday}>{weekDay}</p>
        <p className={styles.currentDay}>{day}</p>
      </div>
    );
  }
}

export default CurrentDate;
