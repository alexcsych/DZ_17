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
        weekDays.push(getDate(addDays(startWeekDay, j)));
      }
      monthDays.push(weekDays);
    }

    // перевірка, чи співпадають 2 дати (щоб підсвітити поточну дату в календарі)
    const isTheSameDay1 = isSameDay(currentDate, new Date(2022, 0, 19));
    const isTheSameDay2 = isSameDay(currentDate, currentDate);

    // перевірка, чи відноситься дата до виводимого справа місяця
    // (щоб відображати дати поточного місяця і не відображати або притіняти дати попереднього/наступного місяців)
    const isTheSameMonth1 = isSameMonth(date, new Date(2021, 0, 7));
    const isTheSameMonth2 = isSameMonth(date, new Date(2023, 0, 7));

    const headContent = `${currentMonth} ${currentYear}`;

    return (
      <div className={styles.flexContainer}>
        <CurrentDate currentDay={currentDay} currentWeekday={currentWeekday} />
        <Month headContent={headContent} />
      </div>
    );
  }
}

export default Calendar;
