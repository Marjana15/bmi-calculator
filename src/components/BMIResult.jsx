import React from 'react';

function BMIResult({ message, bmi }) {
    return (
        <h2>{message} Your BMI is {bmi.toFixed(2)}</h2>
    );
}

export default BMIResult;
