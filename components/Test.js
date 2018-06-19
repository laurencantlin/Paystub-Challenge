import Link from 'next/link'
import {Row, Button, Input} from 'react-materialize'
import MyContext from '../config/Context';
import MyProvider from '../provider/ContextProvider'
import Router from 'next/router'

class Test extends React.Component {
  //   state={     name:'wes',     FN: 'fn',     LN: 'ln',     AnnualSalary: 0,
  // SuperRate: 0,     PayPeriodStart: "mmddyyyy",     age: 100,     cool: true }
  state = {
    // input: this.DEFAULT
  };
  componentDidMount() {
    console.log(this.state)
  }
  componentDidUpdate() {
    console.log(this.state)
  }
  

  handleSubmit=(event, value, setName)=> {
    console.log(this.state.MyContext)
    event.preventDefault();
    const newState=this.state

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
  handlelnChange = (value, setLN) => {
    // console.log(e.target.value)
    this.setState({
      ln: value
    }, () => setLN(this.state.ln))
  }
  handleAnnualSalaryChange = (value, setAnnualSalary) => {
    // console.log(e.target.value)
    this.setState({
      AnnualSalary: value
    }, () => setAnnualSalary(this.state.AnnualSalary))
  }
  handleSuperChange = (value, setSuper) => {
    // console.log(e.target.value)
    this.setState({
      Super: value
    }, () => setSuper(this.state.Super))
  }
  handlePeriodStartChange = (value, setPeriodStart) => {
    // console.log(e.target.value)
    this.setState({
      PeriodStart: value
    }, () => setPeriodStart(this.state.PeriodStart))
  }
  render() {

    return (
      <MyContext.Consumer>
        {/* {({newPaystub})=>()} */}
        {(context) => (
          <React.Fragment>
            <div>fn: {context.state.fn} ,<br/>
              ln: {context.state.ln} ,<br/>
              AnnualSalary: {context.state.AnnualSalary} ,<br/>
              Super: {context.state.Super} ,<br/>
              PeriodStart: {context.state.PeriodStart} ,<br/>
              age {context.state.age}
              <Button onClick={context.methods.increaseAge}>🔼</Button>
              {/* {({submitForm}) => ( */
            } 
            < form onSubmit = {
              this.handleSubmit
            } > 
            <Row>
              <Input placeholder="John" s={12} onChange= {event => this.handlefnChange(event.target.value, context.methods.setFN)}label="First Name"/>
              <Input placeholder="Smith" s={12} label="Last Name" onChange= {event => this.handlelnChange(event.target.value, context.methods.setLN)}/>
              <Input s={12} type ="number" label="Annual Salary" placeholder="$" onChange= {event => this.handleAnnualSalaryChange(event.target.value, context.methods.setAnnualSalary)}/>
              <Input label="Super Rate" s={12} placeholder="%" onChange= {event => this.handleSuperChange(event.target.value, context.methods.setSuper)}/>
              <Input
                placeholder="Pick Date"
                type="date"
                label="Pay Period Start Date"
                s={12}
                onChange= {event => this.handlePeriodStartChange(event.target.value, context.methods.setPeriodStart)}/>

              <Button  onClick={event => this.handleSubmit(event, event.target.value, context.methods.setName)} waves='light'>Submit</Button>
              <Input
                type="text"
                value={this.state.input}
                onChange={event => this.handleKeyPress(event.target.value, context.methods.setName)}
                placeholder="Change name..."/> 

            </Row> 
            </form>
           
            </div>

          </React.Fragment>
        )}
      </MyContext.Consumer>

    );
  }
}

export default Test