
import React from 'react';
// import {createContext} from 'react'

const MyContext= React.createContext({
    payslips: [],
    addPayslip: payslip => {}
  });
export default MyContext;
