import React from 'react';
import Link from 'next/link'
import Head from 'next/head'
import EmployeeForm from '../components/Form';
import Hero from '../components/Hero';
import Wrapper from '../components/Wrapper';
import Router from 'next/router'
import Slip from '../components/Table';
import MyContext from '../config/Context';

class Index extends React.Component {
  componentDidMount() {
    console.log("indexpage mounted", ContextProvider, MyContext)
  }
  // componentDidUpdate() {
  //   console.log("indexpage updated:",this.state, )
  // }
  
  render() {
    // const {Component, pageProps} = this.props;

    return (
      <div>
        <Head>
          <title>index</title>
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
            <EmployeeForm ></EmployeeForm>
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
