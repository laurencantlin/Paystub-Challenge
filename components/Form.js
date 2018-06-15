import Link from 'next/link'
import {Row, Button, Input} from 'react-materialize'


class EmployeeForm extends React.Component {
  
  
  render() {
    
    return (
        <Row>
        <Input placeholder="John" s={12} label="First Name" onChange={this.props.FN}/>
        <Input placeholder="Smith" s={12} label="Last Name" />
        <Input s={12} label="Annual Salary" placeholder="$" />
       
        <Input type="number" label="Super Rate" s={12} placeholder="%" />
        <Input placeholder="Pick Date" type="date" label="Pay Period Start Date" s={12} onChange={function(e, value) {}}/>
        <Button waves='light'>Submit</Button>

    </Row>
    );
  }
}

// const WrappedHorizontalLoginForm = Form.create()(EmployeeForm);

// ReactDOM.render(<WrappedHorizontalLoginForm />, mountNode);

export default EmployeeForm