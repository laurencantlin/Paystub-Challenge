import React, {Component} from "react";
import Head from 'next/head'
import Hero from '../components/Hero';
import Slip from '../components/Table';
import Wrapper from '../components/Wrapper';
class Paystub extends Component {
  handleChange(event) {
    this.setState({value: event.target.value});
  }

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
        <Hero title="Employee Paystub" subtitle="See paystub below.">
          <div className="columns is-centered">
            <div className="column is-half ">
              <div className="box">
                <Wrapper>
                  <Slip></Slip>
                </Wrapper>
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
export default Paystub;