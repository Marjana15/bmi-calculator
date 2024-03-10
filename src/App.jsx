import React from 'react';
import BMIForm from '../src/components/BMIForm.jsx';
import Header from '../src/components/Header.jsx';
import './app.css';

export default function App() {
  return (
    <div className="app">
      <Header/>
      <span>Let's calculate your Body Mass Index. <br></br> Type the values below</span>
      <BMIForm />
    </div>
  );
}
