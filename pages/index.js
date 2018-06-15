// This is the Link API
import Link from 'next/link'
// import Header from "../components/Header"
import Head from 'next/head'
import EmployeeForm from '../components/Form';
import WrappedHorizontalLoginForm from '../components/Form';
import Hero from '../components/Hero';
// import '../static/App.css'; import '../static/App.css';
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.FN = this.FN.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  FN(event) {
    this.setState({fn: event.target.value});
    console.log("hi")
  }
  handleSubmit(event){}

  render() {

    return (
      <div>
        <Head>
          <title>Form</title>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css"/>
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css"
            rel="stylesheet"/>

          <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        <Hero>
          <div className="columns is-centered">
            <div className="column is-half ">
              <div className="box">

                <EmployeeForm FN={this.state.FN} ></EmployeeForm>

              </div>
            </div>
          </div>
        </Hero>
        <div className="container"></div>
        <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"></script>
        <script src="path/to/your/bundle.js"></script>

      </div>
    )
  }
}
export default Index
