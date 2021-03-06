import React from 'react';
import Head from 'next/head'
import EmployeeForm from '../components/Form';
import Hero from '../components/Hero';

class Index extends React.Component {

  render() {
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

        <Hero title='Employee Details' subtitle='Please fill out the form below'>
          <div className="columns is-centered">
            <div className="column is-half ">
              <div className="box">
                <EmployeeForm ></EmployeeForm>
              </div>

            </div>
          </div>
        </Hero>
        <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"></script>
        <script src="path/to/your/bundle.js"></script>
        
      </div>
    )
  }
}
export default Index
