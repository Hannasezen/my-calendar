<template>
  <div id="app">
    <header class="flex-row" id="header">
      <div class="title flex-row">
        <img src="./assets/logo.png" alt="Logo" class="logo">
        <h1>Vue-calendar</h1>
      </div>
      <div class="month">
        <currentMonth></currentMonth>
      </div>
    </header>
    <div id="day-bar">
      <div>Mon</div>
      <div>Tue</div>
      <div>Wed</div>
      <div>Thu</div>
      <div>Fri</div>
      <div>Sat</div>
      <div>Sun</div>
    </div>
    <div id="calendar">
      <div v-for="week in weeks" class="calendar-week">
        <CalendarDay v-for="day in week" :day="day"></CalendarDay>
      </div>
    </div>
    <EventForm></EventForm>
  </div>
</template>

<script>
import CalendarDay from './CalendarDay';
import CurrentMonth from './CurrentMonth';
import EventForm from './EventForm';

export default {
  computed: {
    month() {
      return this.$store.state.currentMonth;
    },
    year() {
      return this.$store.state.currentYear;
    },
    days() {
      // Generating all days in current month
      let days = [];
      let currentDay = this.$moment(`${this.year}-${this.month}-1`, 'YYYY-M-DD');     
      
      do {
        days.push(currentDay);
        currentDay = this.$moment(currentDay).add(1, 'days');
      } while ((currentDay.month() + 1) === this.month)

      // Add previous days to start
      currentDay = this.$moment(days[0]);

      const SUNDAY = 0;
      const MONDAY = 1;

      if(currentDay.day() !== MONDAY) {
        do {
          currentDay = this.$moment(currentDay).subtract(1, 'days');
          days.unshift(currentDay);
        } while (currentDay.day() !== MONDAY)
      }

      // Add foloowing days to the end
      currentDay = this.$moment(days[days.length - 1]);

      if(currentDay.day() !== SUNDAY) {
        do {
          currentDay = this.$moment(currentDay).add(1, 'days');
          days.push(currentDay);
        } while (currentDay.day() !== SUNDAY)
      }

      return days;
    },
    weeks() {
      let weeks = [];
      let week = [];

      for (let day of this.days) {
        week.push(day);
        if (week.length === 7) {
          weeks.push(week);
          week = [];
        }
      }
      return weeks;
    }
  },
  components: {
    CalendarDay,
    CurrentMonth,
    EventForm
  }
}
</script>

<style>
  header.flex-row {
    justify-content: space-around;
  }

  #app .title .logo {
    width: 50px;
    margin: 10px;
  }
</style>
