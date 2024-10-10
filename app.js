const days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
const months = [
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

let a = new Date();

function dateFormat() {
  function dateFormat1() {
    return `${String(a.getMonth() + 1)}/${String(
      a.getDate()
    )}/${a.getFullYear()} ${String(a.getHours())}:${String(
      a.getMinutes()
    ).padStart(2, "0")}:${String(a.getSeconds()).padStart(2, "0")}`;
  }

  function dateFormat2() {
    const din = days[a.getDay()];
    return `${din} ${String(a.getDate())}/${String(
      a.getMonth() + 1
    )}/${a.getFullYear()} ${String(a.getHours())}.${String(
      a.getMinutes()
    ).padStart(2, "0")}`;
  }

  function dateFormat3() {
    const hour = a.getHours() % 12 || 12;
    const din = days[a.getDay()];
    return `${a.getFullYear()}-${String(a.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(a.getDate()).padStart(2, "0")} ${hour}:${String(
      a.getMinutes()
    ).padStart(2, "0")} ${din}`;
  }

  function dateFormat4() {
    const month = months[a.getMonth()];
    const hour = a.getHours() % 12 || 12;
    const ampm = a.getHours() >= 12 ? "PM" : "AM";
    return `${month} ${a.getDate()} ${a.getFullYear()} ${String(hour)}.${String(
      a.getMinutes()
    ).padStart(2, "0")}.${String(a.getSeconds()).padStart(2, "0")} ${ampm}`;
  }

  function dateFormat5() {
    const month = months[a.getMonth()];
    const hour = a.getHours() % 12 || 12;
    const ampm = a.getHours() >= 12 ? "PM" : "AM";
    return `${String(a.getDate()).padStart(
      2,
      "0"
    )} ${month} ${a.getFullYear()} at ${String(hour)}:${String(
      a.getMinutes()
    ).padStart(2, "0")} ${ampm}`;
  }

  return [
    dateFormat1(),
    dateFormat2(),
    dateFormat3(),
    dateFormat4(),
    dateFormat5(),
  ];
}

console.log(dateFormat().join("\n"));

module.exprots = {
  dateFormat,
  dateFormat1,
  dateFormat2,
  dateFormat3,
  dateFormat4,
  dateFormat5,
};
