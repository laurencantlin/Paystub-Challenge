import Link from 'next/link'
import {Row, Button, Input} from 'react-materialize'
import EmployeeForm from './Form'
class Wrapper extends React.Component {
  render() {
    return (
      <div>
    {this.props.children}   

      </div>
    );
  }
}
export default Wrapper