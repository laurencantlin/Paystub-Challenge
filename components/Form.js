import {Row, Button, Input} from 'react-materialize'
import MyContext from '../config/Context';
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

  handleSubmit=(event, value, setName)=> {
    event.preventDefault();
    if(this.state.PeriodStart){
      Router.push('/Paystub')

    }   
  }
 
  handlefnChange = (value, setFN) => {
    this.setState({
      fn: value
    }, () => setFN(this.state.fn))
  }
  handlelnChange = (value, setLN) => {
    this.setState({
      ln: value
    }, () => setLN(this.state.ln))
  }
  handleAnnualSalaryChange = (value, setAnnualSalary) => {
    this.setState({
      AnnualSalary: value
    }, () => setAnnualSalary(this.state.AnnualSalary))
  }
  handleSuperChange = (value, setSuper) => {
    this.setState({
      Super: value
    }, () => setSuper(this.state.Super))
  }
  handlePeriodStartChange = (value, setPeriodStart) => {
    console.log(value)
   
    this.setState({
      PeriodStart: value
    }, () => setPeriodStart(this.state.PeriodStart))
  }
  render() {

    return (
      <MyContext.Consumer>
          {(context) => (
              <React.Fragment>
                <div>
                  < form  onSubmit = {
                  this.handleSubmit
                } > 
                <Row>
                  <Input placeholder="John" required 	 s={12} onChange= {event => this.handlefnChange(event.target.value, context.methods.setFN)}label="First Name"/>
                  <Input placeholder="Smith" required s={12} label="Last Name" onChange= {event => this.handlelnChange(event.target.value, context.methods.setLN)}/>
                  <Input required	 s={12} type ="number" label="Annual Salary" placeholder="$" onChange= {event => this.handleAnnualSalaryChange(event.target.value, context.methods.setAnnualSalary)}/>
                  <Input required	 label="Super Rate" type="number" s={12} min='0' max='12' placeholder="%" step="1" maxLength='2' onChange= {event => this.handleSuperChange(event.target.value, context.methods.setSuper)}/>
                  <Input required	
                    placeholder="Pick Date"
                    type="date" 
                    label="Pay Period Start Date"
                    s={12}
                    onChange= {event => this.handlePeriodStartChange(event.target.value, context.methods.setPeriodStart)}/>

                  <Button  type="submit"  onSubmit={(event) => this.handleSubmit(event, event.target.value, context.methods.setName)} waves='light'>Submit</Button>
                
                </Row> 
                </form>
                </div>
              </React.Fragment>
            )}
      </MyContext.Consumer>
    );
  }
}

export default EmployeeForm