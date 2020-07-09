import React, { Component, useState } from "react";
import Calendar from  'react-calendar';
import 'react-calendar/dist/Calendar.css';

class MyApp extends Component {
  state = {
    date: new Date(),
  };

  onChange = (date) => this.setState({ date });

  render() {
    return (
      <div>
        <Calendar onChange={this.onChange} value={this.state.date} />
      </div>
    );
  }
}

// functional Component
// const MyApp = ()=>{
//   const [date,setDate] = useState(new Date());

//   onChange = date => {
//    setDate(date)
//   }

//   return(
//     <Calendar onChange={onChange} value={date} />
//   )
  
// }



export default MyApp;
