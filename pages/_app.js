import App, {Container} from 'next/app'
import React from 'react';
import MyContext from '../config/Context';
import moment from 'moment'
export default class MyApp extends App {
  state = {
    fn: null,
    ln: null,
    AnnualSalary: null,
    Super: null,
    PeriodStart: null,
    TaxBrackets: [
      {
        startingAt: 0,
        upto: 18200,
        taxRate: 0,
        baseTax: 0
      }, {
        startingAt: 18201,
        upto: 37000,
        taxRate: .19,
        baseTax: 0
      }, {
        startingAt: 37001,
        upto: 87000,
        taxRate: .325,
        baseTax: 3572
      }, {
        startingAt: 87001,
        upto: 180000,
        taxRate: .37,
        baseTax: 19822
      }, {
        startingAt: 180001,
        upto: null,
        taxRate: .45,
        baseTax: 54232
      }
    ]
  };
  methods = {
    setFN: (value) => this.setState({fn: value}),
    setLN: (value) => this.setState({ln: value}),
    setAnnualSalary: (value) => this.setState({AnnualSalary: value}),
    setSuper: (value) => this.setState({Super: value}),
    setPeriodStart: (value) => {
      console.log("std", value, value.split(",").join("").split(" ")  )
      // this.setState({PeriodStart: value})
      const start=value.split(",").join("").split(" ")   
      console.log(start,"2", `${start[0]} ${start[1]} ${start[2]}`)
      let startD = new Date(`${start[0]} ${start[1]} ${start[2]}`) 
      let endD= new Date(moment(startD).add(1,'months').calendar());
      console.log(startD, endD, "find")
      this.setState({PeriodStart: startD,PeriodEnd:endD})


    },
    // this.setState({PeriodEnd: endD}) setPeriodStart: (value) => {   const start =
    // value     .split(",")     .join("")     .split(" ")   const startD = new
    // Date(start[0] + start[1] + start[2])   const endD = new
    // Date(moment(startD).add(1, 'months').calendar())   console.log(startD, endD)
    //  this.setState({PeriodStart: value})   // this.setState({PeriodEnd: endD}) },
    setEmployeeName: () => this.setState({employeeName: `${this.state.fn} ${this.state.ln}`})
  }
  render() {
    const {Component, pageProps} = this.props;
    return (
      <Container>
        <MyContext.Provider
          value={{
          state: this.state,
          methods: this.methods
        }}>
          <Component {...pageProps}/>
        </MyContext.Provider>
      </Container>
    );
  }

}
