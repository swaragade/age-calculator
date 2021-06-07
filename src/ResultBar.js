import React from "react";

export default class ResultBar extends React.Component {
  getAge = () => {
    var now = new Date();

    var yearNow = now.getYear();
    var monthNow = now.getMonth();
    var dateNow = now.getDate();
    var dateString = this.props.dob;
    var dob = new Date(
      dateString.substring(0, 4),
      dateString.substring(5, 7),
      dateString.substring(8, 10)
    );
    if (dob > now) {
      return "Please provide past date";
    }

    console.log("dob", dob);
    var yearDob = dob.getYear();
    var monthDob = dob.getMonth();
    var dateDob = dob.getDate();
    var age = {};
    var ageString = "";
    var yearString = "";
    var monthString = "";
    var dayString = "";

    let yearAge = yearNow - yearDob;
    var monthAge = 0;

    if (monthNow >= monthDob) {
      monthAge = monthNow - monthDob;
    } else {
      yearAge--;
      monthAge = 12 + monthNow - monthDob;
    }
    var dateAge = 0;
    if (dateNow >= dateDob) {
      dateAge = dateNow - dateDob;
    } else {
      monthAge--;
      dateAge = 31 + dateNow - dateDob;

      if (monthAge < 0) {
        monthAge = 11;
        yearAge--;
      }
    }

    age = {
      years: yearAge,
      months: monthAge,
      days: dateAge,
    };

    if (age.years > 1) {
      yearString = " years";
    } else yearString = " year";
    if (age.months > 1) {
      monthString = " months";
    } else monthString = " month";
    if (age.days > 1) {
      dayString = " days";
    } else dayString = " day";

    if (age.years > 0 && age.months > 0 && age.days > 0)
      ageString =
        age.years +
        yearString +
        ", " +
        age.months +
        monthString +
        " and " +
        age.days +
        dayString +
        " old.";
    else if (age.years === 0 && age.months === 0 && age.days > 0)
      ageString = "Only " + age.days + dayString + " old!";
    else if (age.years > 0 && age.months === 0 && age.days === 0)
      ageString = age.years + yearString + " old. Happy Birthday!!";
    else if (age.years > 0 && age.months > 0 && age.days === 0)
      ageString =
        age.years + yearString + " and " + age.months + monthString + " old.";
    else if (age.years === 0 && age.months > 0 && age.days > 0)
      ageString =
        age.months + monthString + " and " + age.days + dayString + " old.";
    else if (age.years > 0 && age.months === 0 && age.days > 0)
      ageString =
        age.years + yearString + " and " + age.days + dayString + " old.";
    else if (age.years === 0 && age.months > 0 && age.days === 0)
      ageString = age.months + monthString + " old.";
    else ageString = "Oops! Could not calculate age!";
    return ageString;
  };

  render() {
    return (
      <div className="ui segment row center aligned">
        {this.props.dob ? this.getAge() : null}
      </div>
    );
  }
}
