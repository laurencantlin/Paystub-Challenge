import Link from 'next/link'
import {Row, Input} from 'react-materialize'
import EmployeeForm from './Form'

class Hero extends React.Component {
  
  
  render() {
    
    return (
        <section className="hero is-fullheight is-primary">
        <div className="hero-body has-text-centered is-centered">
          <div className="container">
            <h1 className="title">
              Employee Details
            </h1>
            <h2 className="subtitle">
              Please fill out the form below
            </h2>
            <br/>
            {this.props.children}

          </div>
        </div>
      </section>
    );
  }
}

// const WrappedHorizontalLoginForm = Form.create()(EmployeeForm);

// ReactDOM.render(<WrappedHorizontalLoginForm />, mountNode);

export default Hero