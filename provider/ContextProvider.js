import React, {Component} from 'react';
import MyContext from '../config/Context';

class MyProvider extends Component {
  // constructor(){     super()     this.state={         FN:"john",
  // LN:"smith"     } }
  state = {
    name: 'wes',
    fn: 'fn',
    ln: 'ln',
    AnnualSalary: 0,
    Super: 0,
    PeriodStart: "mmddyyyy",
    age: 100,
    cool: true,
    addPaystub: this.addPaystub.bind(this)

  }
  addPaystub(paystub)
  {

    console.log(paystub)
    // Ids are used to optimize the React performance in the views
    const payslipId = this.state.lastPayslipId + 1;

    const payslips = [
      {...payslip, id: payslipId},
      ...this.state.payslipsContext.payslips
    ];

    this.setState({
      lastPayslipId: payslipId,
      payslipsContext: {...this.state.payslipsContext, payslips}
    });
  }

  methods = {
    setFN: (value) => this.setState({fn: value}),
    setLN: (value) => this.setState({ln: value}),
    setAnnualSalary: (value) => this.setState({AnnualSalary: value}),
    setSuper: (value) => this.setState({Super: value}),
    setPeriodStart: (value) => this.setState({PeriodStart: value}),
    setName: (value) => this.setState({ name: value }),
    increaseAge: () => this.setState({ age: ++this.state.age }),
  }
  componentWillMount() {  }
  render() {
    return (
      <MyContext.Provider
        value={{
        state: this.state,
        methods: this.methods
      }}>
        {this.props.children}</MyContext.Provider>
    );
  }
}
export default MyProvider
