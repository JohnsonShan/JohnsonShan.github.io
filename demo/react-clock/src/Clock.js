import React from 'react';

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = { date: new Date() };
  
      this.state.x = window.innerWidth;
      this.state.y = window.innerHeight;
      this.state.square_edge = Math.min(this.state.x, this.state.y);
      this.state.font_size = this.state.square_edge * 0.1;
      this.state.second_deg = this.state.date.getSeconds() * 6 + 180 + this.state.date.getMilliseconds() * 0.006;
      this.state.minute_deg = this.state.date.getMinutes() * 6 + 180 + this.state.date.getSeconds() * 0.06;
      this.state.hour_deg = this.state.date.getHours() * 30 + 180 + this.state.date.getMinutes() / 2;
  
    }
  
    componentDidMount() {
      this.timerID = setInterval(() => this.tick(), 100);
      window.addEventListener('resize', () => this.tick());
  
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
      window.removeEventListener('resize', () => this.tick());
  
    }
  
    tick() {
  
  
      this.setState({
  
        date: new Date(),
        x: window.innerWidth,
        y: window.innerHeight,
        square_edge: Math.min(this.state.x, this.state.y) * 0.8,
        font_size: this.state.square_edge * 0.05 + "px",
        second_deg: this.state.date.getSeconds() * 6 + 180 + this.state.date.getMilliseconds() * 0.006,
        minute_deg: this.state.date.getMinutes() * 6 + 180 + this.state.date.getSeconds() * 0.06,
        hour_deg: this.state.date.getHours() * 30 + 180 + this.state.date.getMinutes() / 2
      });
  
  
    }
  
    render() {
  
      // console.log("Second_deg = " + this.state.second_deg);
      // console.log("Minute_deg = " + this.state.minute_deg);
      // console.log("hour_deg = " + this.state.hour_deg);
      // console.log("square_edge = " + this.state.square_edge);
      const second_rotate = "rotate(" + this.state.second_deg + " " + (this.state.square_edge * 0.5) + " " + (this.state.square_edge * 0.5) + ")";
      const minute_rotate = "rotate(" + this.state.minute_deg + " " + (this.state.square_edge * 0.5) + " " + (this.state.square_edge * 0.5) + ")";
      const hour_rotate = "rotate(" + this.state.hour_deg + " " + (this.state.square_edge * 0.5) + " " + (this.state.square_edge * 0.5) + ")";
      const tick_rotate_0 = "rotate(0 " + (this.state.square_edge * 0.5) + " " + (this.state.square_edge * 0.5) + ")";
      const tick_rotate_1 = "rotate(30 " + (this.state.square_edge * 0.5) + " " + (this.state.square_edge * 0.5) + ")";
      const tick_rotate_2 = "rotate(60 " + (this.state.square_edge * 0.5) + " " + (this.state.square_edge * 0.5) + ")";
      const tick_rotate_3 = "rotate(90 " + (this.state.square_edge * 0.5) + " " + (this.state.square_edge * 0.5) + ")";
      const tick_rotate_4 = "rotate(120 " + (this.state.square_edge * 0.5) + " " + (this.state.square_edge * 0.5) + ")";
      const tick_rotate_5 = "rotate(150 " + (this.state.square_edge * 0.5) + " " + (this.state.square_edge * 0.5) + ")";
      const tick_rotate_6 = "rotate(180 " + (this.state.square_edge * 0.5) + " " + (this.state.square_edge * 0.5) + ")";
      const tick_rotate_7 = "rotate(210 " + (this.state.square_edge * 0.5) + " " + (this.state.square_edge * 0.5) + ")";
      const tick_rotate_8 = "rotate(240 " + (this.state.square_edge * 0.5) + " " + (this.state.square_edge * 0.5) + ")";
      const tick_rotate_9 = "rotate(270 " + (this.state.square_edge * 0.5) + " " + (this.state.square_edge * 0.5) + ")";
      const tick_rotate_10 = "rotate(300 " + (this.state.square_edge * 0.5) + " " + (this.state.square_edge * 0.5) + ")";
      const tick_rotate_11 = "rotate(330 " + (this.state.square_edge * 0.5) + " " + (this.state.square_edge * 0.5) + ")";
      return (
  
        <div>
          <div style={{textAlign:"center"}}>
            <h1>Hello, world!</h1>
            <h2>Window x, y is {this.state.x + ", " + this.state.y}</h2>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          </div>
            <div style={{ display: "block", margin: "auto", width: this.state.square_edge, height: this.state.square_edge, border: "1px solid black" }}>
              <svg width="100%" height="100%" >
                <circle cx="50%" cy="50%" r="50%" fill="black" />
                <circle cx="50%" cy="50%" r="49%" fill="grey" />
                <circle cx="50%" cy="50%" r="47%" fill="black" />
                <circle cx="50%" cy="50%" r="46.5%" fill="white" />
                <text x="50%" y="25%" textAnchor="middle" fontSize={this.state.font_size}>HKT</text>
                <text x="50%" y="30%" textAnchor="middle" fontSize={this.state.font_size}>UTC+8</text>
  
                <rect x="49%" y="5%" width="2%" height="4%" fill="black" transform={tick_rotate_0} />
                <rect x="49.5%" y="5%" width="1%" height="3%" fill="black" transform={tick_rotate_1} />
                <rect x="49.5%" y="5%" width="1%" height="3%" fill="black" transform={tick_rotate_2} />
                <rect x="49%" y="5%" width="2%" height="4%" fill="black" transform={tick_rotate_3} />
                <rect x="49.5%" y="5%" width="1%" height="3%" fill="black" transform={tick_rotate_4} />
                <rect x="49.5%" y="5%" width="1%" height="3%" fill="black" transform={tick_rotate_5} />
                <rect x="49%" y="5%" width="2%" height="4%" fill="black" transform={tick_rotate_6} />
                <rect x="49.5%" y="5%" width="1%" height="3%" fill="black" transform={tick_rotate_7} />
                <rect x="49.5%" y="5%" width="1%" height="3%" fill="black" transform={tick_rotate_8} />
                <rect x="49%" y="5%" width="2%" height="4%" fill="black" transform={tick_rotate_9} />
                <rect x="49.5%" y="5%" width="1%" height="3%" fill="black" transform={tick_rotate_10} />
                <rect x="49.5%" y="5%" width="1%" height="3%" fill="black" transform={tick_rotate_11} />
  
  
                <rect x="49.5%" y="38%" width="1%" height="50%" fill="red" transform={second_rotate} />
                <rect x="49%" y="40%" width="2%" height="45%" fill="black" transform={minute_rotate} />
                <rect x="48.5%" y="42%" width="3%" height="30%" fill="black" transform={hour_rotate} />
                <circle cx="50%" cy="50%" r="1%" fill="white" />
              </svg>
            </div>
  
        </div>
      );
    }
  }

  export default Clock;