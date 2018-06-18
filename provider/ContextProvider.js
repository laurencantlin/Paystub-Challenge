import React, {Component} from 'react';
import MyContext from '../config/Context';

class MyProvider extends Component {
  // constructor(){     super()     this.state={         FN:"john",
  // LN:"smith"     } }
  state = {
    name: 'wes',
    fn: 'fn',
    LN: 'ln',
    AnnualSalary: 0,
    SuperRate: 0,
    PayPeriodStart: "mmddyyyy",
    age: 100,
    cool: true
  }
  methods = {
    setFN: (value) => this.setState({fn: value}),
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
