import Link from 'next/link'
import {Row, Button, Input} from 'react-materialize'
import Context from '../config/Context';
import EmployeeForm from './Form'
import MyProvider from '../provider/ContextProvider'
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