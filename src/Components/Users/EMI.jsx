


import React, { useState } from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";


const EMI = () => {
  const [carPrice, setCarPrice] = useState(1000000);
  const [downPayment, setDownPayment] = useState(carPrice * 0.25);
  const [tenure, setTenure] = useState(1);
  const [interestRate, setInterestRate] = useState(8.5);
  const [isYearly, setIsYearly] = useState(true);
  const [viewMode, setViewMode] = useState("graph");

  const loanAmount = carPrice - downPayment;
  const monthlyInterest = interestRate / 100 / 12;
  const months = Math.round(tenure * 12);
  const emi =
    (loanAmount * monthlyInterest * Math.pow(1 + monthlyInterest, months)) /
    (Math.pow(1 + monthlyInterest, months) - 1);
  
  const totalInterest = emi * months - loanAmount;
  const totalPayable = loanAmount + totalInterest;
  
  const pieData = [
    { name: "Principal", value: loanAmount, color: "#00bcd4" },
    { name: "Interest", value: totalInterest, color: "#ff9800" }
  ];

  const scheduleData = [];
  let balance = loanAmount;
  for (let i = 1; i <= tenure * 12; i++) {
    const interestForMonth = balance * monthlyInterest;
    const principalForMonth = emi - interestForMonth;
    balance -= principalForMonth;
    if (i === tenure * 12) balance = 0;
    if (i % 12 === 0 || i === tenure * 12) {
      scheduleData.push({
        month: i,
        interest: interestForMonth.toFixed(2),
        principal: principalForMonth.toFixed(2),
        balance: balance.toFixed(2),
      });
    }
  }

  return (
    <div>
      <div>
        <div className="  rounded-lg max-w-3xl  ">
          <div className="flex justify-between bg-[#D9D9D9] ">

          <h2 className="text-xl font-bold mb-4 ">
          Choose your EMI options - Hyundai Creta E 1.5 Petrol</h2>
          <button
                  //  onClick={toggleEmi}
                   className=" bg-gray-300 px-2 py- rounded-full"
                 >
                   X
                 </button>
          </div>
          <div className="flex justify-between items-start gap-16">
            <div className="w-1/2 space-y-4">
              <div>
                <label className="block mb-1">Car Price</label>
                <input
                  type="number"
                  className="w-full p-2 text-black rounded"
                  value={carPrice}
                  onChange={(e) => setCarPrice(Number(e.target.value))}
                />
              </div>
              <div>
                <label className="block mb-1">Down Payment (Min 25%)</label>
                <input
                  type="range"
                  className="w-full"
                  min={carPrice * 0.25}
                  max={carPrice}
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                />
                <p>₹{downPayment.toLocaleString()}</p>
              </div>
              <div className="flex justify-between items-center">
                <label className="block mb-1">Loan Tenure</label>
                <button className="px-2 py-1 bg-blue-500 rounded" onClick={() => setIsYearly(!isYearly)}>
                  {isYearly ? "Show in Months" : "Show in Years"}
                </button>
              </div>
              <input
                type="range"
                className="w-full"
                min="1"
                max="7"
                step="0.5"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
              />
              <p>{isYearly ? tenure + " Years" : months + " Months"}</p>
              <div>
                <label className="block mb-1">Interest Rate (%)</label>
                <input
                  type="range"
                  className="w-full"
                  min="5"
                  max="15"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                />
                <p>{interestRate}%</p>
              </div>
              <div className="text-center text-lg font-semibold">EMI: ₹{emi.toFixed(2)}</div>
            </div>
            <div className="w-1/2 flex flex-col items-center  ">
              <div className="flex gap-2 mb-4 self-end">
                <button className={`px-4 py-2 rounded ${viewMode === "graph" ? "bg-blue-500" : "bg-gray-700"}`} onClick={() => setViewMode("graph")}>Graph</button>
                <button className={`px-4 py-2 rounded ${viewMode === "schedule" ? "bg-blue-500" : "bg-gray-700"}`} onClick={() => setViewMode("schedule")}>Schedule</button>
              </div>
              {viewMode === "graph" ? (
                <>
                  <PieChart width={300} height={300}>
                    <Pie data={pieData} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" dataKey="value">
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Legend />
                  </PieChart>
                  <div className="text-center mt-4">
                    <p>Principal Amount: ₹{loanAmount.toLocaleString()}</p>
                    <p>Total Interest: ₹{totalInterest.toLocaleString()}</p>
                    <p>Total Payable: ₹{totalPayable.toLocaleString()}</p>
                  </div>
                </>
              ) : (
                <table className="w-full text-whit mt-4 border ">
                  <thead>
                    <tr className="bg-gray-400">
                      <th className="p-2">Month</th>
                      <th className="p-2">Interest (₹)</th>
                      <th className="p-2">Principal (₹)</th>
                      <th className="p-2">Balance (₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scheduleData.map((row, index) => (
                      <tr key={index}>
                        <td className="p-2">{row.month}</td>
                        <td className="p-2">{row.interest}</td>
                        <td className="p-2">{row.principal}</td>
                        <td className="p-2">{row.balance}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              <button className="bg-[#00857a] rounded-sm px-16 py-2 my-4 text-white">Get Emi Offers</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EMI;
