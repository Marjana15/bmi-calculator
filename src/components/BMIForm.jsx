import React, { useState } from 'react';
import BMIResult from '../components/BMIResult.jsx';

function BMIForm() {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBMI] = useState('');
    const [message, setMessage] = useState('');

    function calculateBMI() {
        const h = height / 100;
        const bmiValue = weight / (h * h);
        setBMI(bmiValue);

        let message = '';
        if (bmiValue < 16) message = 'Severe Thinness.';
        else if (bmiValue < 17) message = 'Moderate Thinness.';
        else if (bmiValue < 18.5) message = 'Mild Thinness.';
        else if (bmiValue < 25) message = 'Healthy weight.';
        else if (bmiValue < 30) message = 'Overweight.';
        else if (bmiValue < 35) message = 'Obese Class I.';
        else if (bmiValue < 40) message = 'Obese Class II.';
        else message = 'Obese Class III.';
        setMessage(message);
    }

    return (
        <div>
        <div className="area-input">
            <input value={weight} type="text" placeholder="Weight (in kg)" onChange={(e) => setWeight(e.target.value)} />
            <input value={height} type="text" placeholder="Height (in cm)" onChange={(e) => setHeight(e.target.value)} />
            <button onClick={calculateBMI}>Calculate</button>
        </div>
        {bmi && <BMIResult message={message} bmi={bmi} />}
        </div>
    );
}

export default BMIForm;
