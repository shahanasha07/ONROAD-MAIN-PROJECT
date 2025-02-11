
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { PieChart, Pie, Cell, Tooltip } from "recharts";

function EMI() {

    const location = useLocation();
    const car = location.state?.car;

    const [downPayment, setDownPayment] = useState(0);
    const [loanAmount, setLoanAmount] = useState(999810);
    const [interestRate, setInterestRate] = useState(8);
    const [tenure, setTenure] = useState(60);

    const calculateEMI = () => {
        const monthlyRate = interestRate / 100 / 12;
        const emi =
            (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
            (Math.pow(1 + monthlyRate, tenure) - 1);
        return emi.toFixed(2);
    };

    const emi = calculateEMI();
    const totalInterest = (emi * tenure - loanAmount).toFixed(2);
    const totalAmount = (emi * tenure).toFixed(2);

    const data = [
        { name: "Principal", value: loanAmount },
        { name: "Interest", value: totalInterest },
    ];

    return (
        <div>
            <div className="p-6 max-w-lg mx-auto bg-gray-900 text-white rounded-2xl shadow-lg">
                <h2 className="text-xl font-bold text-center mb-4">EMI Calculator</h2>
                <div className="mb-4">
                    <label>Down Payment: ₹{downPayment}</label>

                    <input
                        type="range"
                        min='88'
                        max={car.price}
                        value={downPayment}
                        onChange={(e) => setDownPayment(e.target.value)}
                        className="w-full cursor-pointer"
                    />
                </div>
                <div className="mb-4">
                    <label>Interest Rate: {interestRate}%</label>
                    <input
                        type="range"
                        min="1"
                        max="100"
                        value={interestRate}
                        onChange={(e) => setInterestRate(e.target.value)}
                        className="w-full cursor-pointer"
                    />

                </div>
                <div className="mb-4">
                    <label>Tenure: {tenure} months</label>

                  <input
                        type="range"
                        min="1"
                        max="100"
                        value={tenure}
                        onChange={(e) => setTenure(e.target.value)}
                        className="w-full cursor-pointer"
                    />

                </div>
                <div className="text-center">
                    <h3 className="text-2xl font-bold">₹{emi} / month</h3>
                    <p className="text-gray-400">For {Math.round(tenure / 12)} years</p>
                </div>
                <PieChart width={300} height={200} className="mx-auto mt-4">
                    <Pie data={data} dataKey="value" outerRadius={70} fill="#8884d8">
                        <Cell fill="#82ca9d" />
                        <Cell fill="#ff7300" />
                    </Pie>
                    <Tooltip />
                </PieChart>
                <div className="mt-4 text-center">
                    <p>Principal: ₹{loanAmount}</p>
                    <p>Interest: ₹{totalInterest}</p>
                    <p>Total Payable: ₹{totalAmount}</p>
                </div>
            </div>
        </div>
    )
}

export default EMI
