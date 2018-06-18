import Link from 'next/link'
import {Row, Button, Input} from 'react-materialize'
import MyContext from '../config/Context';
import MyProvider from '../provider/ContextProvider'
import Router from 'next/router'

class EmployeeForm extends React.Component {
  //   state={     name:'wes',     FN: 'fn',     LN: 'ln',     AnnualSalary: 0,
  // SuperRate: 0,     PayPeriodStart: "mmddyyyy",     age: 100,     cool: true }
  state = {
    input: this.DEFAULT
  };

  handleSubmit(value, setName) {
   Router.push('/Paystub')
  }
  handleKeyPress(value, setName) {
    this.setState({
      input: value
    }, () => setName(this.state.input))
  }

  handlefnChange = (value, setFN) => {
    // console.log(e.target.value)
    this.setState({
      fn: value
    }, () => setFN(this.state.fn))
  }
  render() {

    return (
      <MyContext.Consumer>
        {(context) => (
          <React.Fragment>
            <div>hello {context.state.name} ,
                age {context.state.age}
              <Button onClick={context.methods.increaseAge}>🔼</Button>
              {/* {({submitForm}) => ( */
            } < form onSubmit = {
              this.handleSubmit
            } > <Row>
              <Input placeholder="John" s={12} onChange= {event => this.handlefnChange(event.target.value, context.methods.setFN)}label="First Name"/>
              <Input placeholder="Smith" s={12} label="Last Name"/>
              <Input s={12} label="Annual Salary" placeholder="$"/>

              <Input type="number" label="Super Rate" s={12} placeholder="%"/>
              <Input
                placeholder="Pick Date"
                type="date"
                label="Pay Period Start Date"
                s={12}
                onChange={function (e, value) {}}/>
              <Button type="submit" onClick={this.handleSubmit} waves='light'>Submit</Button>
              {/* <Actions> */}
              <Input
                type="text"
                value={this.state.input}
                onChange={event => this.handleKeyPress(event.target.value, context.methods.setName)}
                placeholder="Change name..."/> {/* </Actions> */}
            </Row> </form>
           
            </div>

          </React.Fragment>
        )}
      </MyContext.Consumer>

    );
  }
}

// const WrappedHorizontalLoginForm = Form.create()(EmployeeForm);
// ReactDOM.render(<WrappedHorizontalLoginForm />, mountNode);

export default EmployeeForm