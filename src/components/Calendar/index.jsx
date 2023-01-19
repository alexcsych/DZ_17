import { Component } from "react";
import {
  getDate,
  getDay,
  getMonth,
  startOfMonth,
  startOfWeek,
  endOfMonth,
  getWeek,
  getYear,
  addDays,
  parse,
  isSameDay,
  isSameMonth,
} from "date-fns";
import styles from "./Calendar.module.css";
import CurrentDate from "../CurrentDate";
import Month from "../Month";

const WEEK_DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const MONTH = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date(),
      date: new Date(),
    };
  }
  render() {
    const { date, currentDate } = this.state;
    // поточне число
    const currentDay = getDate(currentDate);
    // поточний рік
    const currentYear = getYear(currentDate);
    // день тижня
    const currentWeekday = WEEK_DAYS[getDay(currentDate)];
    // назва місяцю
    const currentMonth = MONTH[getMonth(currentDate)];
    // номер початкового тижня місяця (як тиждень першого дня місяці)
    const startWeek = getWeek(startOfMonth(date));
    // номер кінцевого тижня місяця (як тиждень останнього дня місяці)
    const endWeek = getWeek(endOfMonth(date));
    const monthDays = [];
    for (let i = startWeek; i <= endWeek; i++) {
      const weekDays = [];
      // отримати дату першого дня тижня по номеру тижня
      let startWeekDay = startOfWeek(
        parse(`${i}`, "w", new Date(getYear(date), 0, 1))
      );
      // отримати всі 7 дат тижня по першому дню тижня
      for (let j = 0; j < 7; j++) {
        let dataWeek = getDate(addDays(startWeekDay, j));
        weekDays.push(
          (i === 0 && dataWeek > 8) || (i === endWeek && dataWeek < 7)
            ? ""
            : dataWeek
        );
      }
      monthDays.push(weekDays);
    }

    const monthDaysTable = monthDays.map((u, i) => (
      <tr key={i}>
        {u.map((a, j) =>
          a === currentDay ? (
            <td className={styles.currentDay} key={j}>
              {a}
            </td>
          ) : (
            <td key={j}>{a}</td>
          )
        )}
      </tr>
    ));

    const headContent = `${currentMonth} ${currentYear}`;

    return (
      <div className={styles.flexContainer}>
        <CurrentDate currentDay={currentDay} currentWeekday={currentWeekday} />
        <Month headContent={headContent} monthDaysTable={monthDaysTable} />
      </div>
    );
  }
}

export default Calendar;
