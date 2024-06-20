const TodayDate = () => {
  const date = new Date().toDateString().split(" ");
  const days = {
    Mon: "Monday,",
    Tue: "Tuesday,",
    Wed: "Wednesday,",
    Thu: "Thursday,",
    Fri: "Friday,",
    Sat: "Saturday,",
    Sun: "Sunday,",
  };

  const months = {
    Jan: "January",
    Feb: "February",
    Mar: "March",
    Apr: "April",
    May: "May",
    Jun: "June",
    Jul: "July",
    Aug: "August",
    Sep: "September",
    Oct: "October",
    Nov: "November",
    Dec: "December",
  };

  for (const key in days) {
    if (key === date[0]) {
      date[0] = days[date[0]];
    }
  }

  for (const key in months) {
    if (key === date[1]) {
      date[1] = months[date[1]];
    }
  }

  date[2] += ",";

  return date.join(" ");
};

export default TodayDate;
