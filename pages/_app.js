import App, {Container} from 'next/app'
import React from 'react';
import MyContext from '../config/Context';

export default class MyApp extends App {
  state = {
    employeeDetails: {
      fn: 'fn',
      ln: 'ln',
      AnnualSalary: 0,
      Super: 0,
      PeriodStart: "mmddyyyy",
      setFN: (value) => this.setState({fn: value}),
      setLN: (value) => this.setState({ln: value}),
      setAnnualSalary: (value) => this.setState({AnnualSalary: value}),
      setSuper: (value) => this.setState({Super: value}),
      setPeriodStart: (value) => this.setState({PeriodStart: value}),
      setName: (value) => this.setState({ name: value }),
      increaseAge: () => this.setState({ age: ++this.state.age }),
    },
    employeePaystub: {
      paystub: {},
      newPaystub: this
        .newPaystub
        .bind(this)
    },
    fn: 'fna',
      ln: 'lna',
      AnnualSalary: 0,
      Super: 0,
      PeriodStart: "mmddyyyy",
  };
  methods = {
    setFN: (value) => this.setState({fn: value}),
    setLN: (value) => this.setState({ln: value}),
    setAnnualSalary: (value) => this.setState({AnnualSalary: value}),
    setSuper: (value) => this.setState({Super: value}),
    setPeriodStart: (value) => this.setState({PeriodStart: value}),
    setName: (value) => this.setState({ name: value }),
    increaseAge: () => this.setState({ age: ++this.state.age }),
  }
  newPaystub(paystub){
    console.log("newpaystub")
    this.setState({
        employeePaystub:{paystub}
    })
  }
componentDidUpdate(){
  console.log("mounted", this.state)
}

  render() {const {Component, pageProps} = this.props;

    return (
      <Container>
        <MyContext.Provider  value={{
        state: this.state,
        methods: this.methods
      }}>
          <Component {...pageProps}/>
        </MyContext.Provider>
      </Container>
    );
  }

}
