
import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [netIncome, setNetIncome] = useState("");
  const [monthlyExpenses, setMonthlyExpenses] = useState("");
  const [currentBond, setCurrentBond] = useState("");

  const [remainingAmount, setRemainingAmount] = useState("");
  const [remainingPercentage, setRemainingPercentage] = useState("");
  const [currentStatus, setCurrentStatus] = useState("");
  const [amountEarn, setAmountEarn] = useState("");
  const [conclusion, setConclusion] = useState("Your conclusion");
  const[loginError, setLoginError]=useState("")


  const loginUser=()=>{
    if(validation()===true){
      calculate()
    }
  }
  function calculate() {
    const netIncomeNumber = Number(netIncome);
    const monthlyExpensesNumber = Number(monthlyExpenses);
    const currentBondNumber = Number(currentBond);

    const remainingAmount =
      netIncomeNumber - monthlyExpensesNumber - currentBondNumber;

    const remainingPercentage = (remainingAmount / netIncomeNumber) * 100;

    setRemainingAmount("R" + remainingAmount);
    setRemainingPercentage(remainingPercentage.toFixed(2) + "%");

    let currentStatus = "";

    if (remainingPercentage <= 30) {
      currentStatus = "Bad standing" + " " + name;
    } else if (remainingPercentage <= 50) {
      currentStatus = "Good standing" + " " + name;
    } else {
      currentStatus = "Excellent" + " " + name;
    }

    setCurrentStatus(currentStatus);

    let amountEarn = "";

    if (remainingPercentage <= 30) {
      amountEarn = netIncomeNumber + 2500;
    } else if (remainingPercentage <= 50) {
      amountEarn = netIncomeNumber + 1500;
    } else {
      amountEarn = netIncomeNumber + 0;
    }

    setAmountEarn(amountEarn);

    let conclusion = "";

    if (currentStatus.startsWith("Bad standing")) {
      conclusion =
        name + " You must cut some expenses. consider removing wants";
    } else if (currentStatus.startsWith("Good standing")) {
      conclusion =
        name + " Your expense-income ratio is healthy, keep it up.";
    } else {
      conclusion = "Amazing " + name + " You are building wealth";
    }

    setConclusion(conclusion);
  }

  const validation = ()=>{
if(name===""||lastName===""||email===""||netIncome===""||netIncome===""||monthlyExpenses===""||currentBond ===""){
  setLoginError("Please fill in all fields")
  return false
}
return true
  }

  return (
    <>
      <div id="red-line"></div>

      <div id="first-h1">
        <h1>EARN THIS ... TO AFFORD THIS ...</h1>
      </div>

      <div id="red-line"></div>

      <div className="main-section">
        <div className="personal-details">
          <h2>PERSONAL DETAILS</h2>

          <div className="mini-section">
            <label>First Name</label>
            <input
              id="name"
              type="text"
              placeholder="First Name"
              value={name}
              onChange={(event) => {setName(event.target.value);setLoginError("");}}
            />
          </div>

          <div className="mini-section">
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(event) => {setLastName(event.target.value);setLoginError("")}}
            />
          </div>

          <div className="mini-section">
            <label>Email Address</label>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(event) => {setEmail(event.target.value);setLoginError("")}}
            />
          </div>

          <div className="mini-section">
            <label>Net Income</label>
            <input
              id="netIncome"
              type="text"
              placeholder="R"
              value={netIncome}
              onChange={(event) => {setNetIncome(event.target.value);setLoginError("")}}
            />
          </div>

          <div className="mini-section">
            <label>Monthly Expenses</label>
            <input
              id="monthlyExpenses"
              type="text"
              placeholder="R"
              value={monthlyExpenses}
              onChange={(event) => {setMonthlyExpenses(event.target.value);setLoginError("")}}
            />
          </div>

          <div className="mini-section">
            <label>Current-bond/rent</label>
            <input
              id="currentBond"
              type="text"
              placeholder="R"
              value={currentBond}
              onChange={(event) => {setCurrentBond(event.target.value);setLoginError("")}}
            />
          </div>

          <div className="mini-section">
            <button id="calculateBtn" onClick={loginUser}>
              Calculate
            </button>
            <p>{loginError}</p>
          </div>
        </div>

        <div className="result-section">
          <h2>Your Results</h2>

          <div className="result-item">
            <label>Remaining Amount</label>
            <input
              type="text"
              placeholder="R"
              value={remainingAmount}
              readOnly
            />
          </div>

          <div className="result-item">
            <label>Remaining percentage</label>
            <input
              type="text"
              placeholder="%"
              value={remainingPercentage}
              readOnly
            />
          </div>

          <div className="result-item">
            <label>Current-status</label>
            <input
              type="text"
              placeholder="Your state"
              value={currentStatus}
              readOnly
            />
          </div>

          <div className="result-item">
            <label>Amount to Earn</label>
            <input
              type="text"
              placeholder="R"
              value={amountEarn}
              readOnly
            />
          </div>

          <div className="result-item">
            <label>Conclusion</label>
            <strong>{conclusion}</strong>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
