// This is the Link API
import Link from 'next/link'
// import Header from "../components/Header"
import Head from 'next/head' 
import EmployeeForm from '../components/Form';
import WrappedHorizontalLoginForm from '../components/Form';
// import '../static/App.css';
// import '../static/App.css';
const Index = () => (
<div>
    <Head>
        <title>Form</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="container">
    {/* <WrappedHorizontalLoginForm></WrappedHorizontalLoginForm> */}
    <EmployeeForm></EmployeeForm>    </div>
</div>
)

export default Index
