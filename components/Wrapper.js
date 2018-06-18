import Link from 'next/link'
import {Row, Button, Input} from 'react-materialize'
import Context from '../config/Context';
import EmployeeForm from './Form'
import MyProvider from '../provider/ContextProvider'
class Wrapper extends React.Component {
  render() {
    return (
      // <Wrapper>
        <MyProvider>
          {/*
                All children components can access data inide
                DataStorage component. This is useful when
                multiple components need to access data or deep
                levels of parent -> children
              */}
    {this.props.children}   </MyProvider>
      // </Wrapper>
    );
  }
}
export default Wrapper