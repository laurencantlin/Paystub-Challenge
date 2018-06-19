import Link from 'next/link'
import {Row, Button, Input} from 'react-materialize'
import MyContext from '../config/Context';
// import MyProvider from '../provider/ContextProvider'
import Router from 'next/router'

class EmployeeForm extends React.Component {
    state={     
      name:null,
      fn: null,
      ln: null,    
      AnnualSalary: null,
      Super: null,       
      PeriodStart: null,     
    }
  componentDidMount() {
    // console.log("form component mounted")
  }

  componentDidUpdate() {
    console.log("Form component updated:", this.state )
    // this.calculatePaystub()
  }

  handleSubmit=(event, value, setName)=> {
    event.preventDefault();
    Router.push('/Paystub')

    // if(this.state.fn&&this.state.ln&&this.state.AnnualSalary&&this.state.Super&&this.state.PeriodStart){
    //   console.log(this.state, "sub")
    //   event.preventDefault();
    //  Router.push('/Paystub')
    // }
    // else{alert("fill out all fields")}
  }
 
  // calculatePaystub = () => {
  //   console.log("calc",this.state)
  //   return <div>hi</div>

  // }
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
        {/* <div className="form"> */}
          {(context) => (
              <React.Fragment>
                <div>
                  {/* fn: {context.fn} ,<br/>
                  ln: {context.state.ln} ,<br/>
                  AnnualSalary: {context.state.AnnualSalary} ,<br/>
                  Super: {context.state.Super} ,<br/>
                  PeriodStart: {context.state.PeriodStart} ,<br/>
                  age {context.state.age}
                  <Button onClick={context.methods.increaseAge}>🔼</Button>
                  {/* {({submitForm}) => ( */
                } 
                < form  onSubmit = {
                  this.handleSubmit
                } > 
                <Row>
                  <Input placeholder="John" required 	 s={12} onChange= {event => this.handlefnChange(event.target.value, context.methods.setFN)}label="First Name"/>
                  <Input placeholder="Smith" required s={12} label="Last Name" onChange= {event => this.handlelnChange(event.target.value, context.methods.setLN)}/>
                  <Input required	 s={12} type ="number" step='5000' label="Annual Salary" placeholder="$" onChange= {event => this.handleAnnualSalaryChange(event.target.value, context.methods.setAnnualSalary)}/>
                  <Input required	 label="Super Rate" type="number" s={12} min='0' max='12' placeholder="%" step="1" maxlength='2' onChange= {event => this.handleSuperChange(event.target.value, context.methods.setSuper)}/>
                  <Input required	
                    placeholder="Pick Date"
                    type="date" 
                    label="Pay Period Start Date"
                    s={12}
                    onChange= {event => this.handlePeriodStartChange(event.target.value, context.methods.setPeriodStart)}/>

                  <Button  type="submit"  onSubmit={(event) => this.handleSubmit(event, event.target.value, context.methods.setName)} waves='light'>Submit</Button>
                  {/* <Input */}
                    {/* type="text"
                    value={this.state.input}
                    onChange={event => this.handleKeyPress(event.target.value, context.methods.setName)}
                    placeholder="Change name..."/>  */}

                </Row> 
                </form>
              
                </div>

              </React.Fragment>
            )}
  {/* </div>   */}
      </MyContext.Consumer>
    );
  }
}

export default EmployeeForm