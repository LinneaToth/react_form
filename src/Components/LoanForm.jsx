import { useState } from "react";
import Input from "./Input";
import Select from "./Select";
import Textarea from "./Textarea";

const salaryOptions = [
  "less than $500",
  "$500-$1000",
  "$1000-$2000",
  "more than $2000",
];

export default function LoanForm() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    step < 3 && setStep((step) => step + 1);
  };

  const prevStep = () => {
    step > 1 && setStep((step) => step - 1);
  };

  return (
    <div className="container d-flex flex-column h-100 gap-4">
      {step === 1 && (
        <>
          <Input
            inputType="text"
            name="namn"
            placeholder="Full name"
            description="Full name"
          />
          <Input
            inputType="text"
            name="phoneNumber"
            placeholder="Phone Number"
            description="Phone number"
          />
          <Input inputType="number" name="age" description="Age" />
          <Input
            inputType="checkbox"
            name="isEmployed"
            description="I am currently employed"
          />
        </>
      )}
      {step === 2 && (
        <>
          <Select
            options={salaryOptions}
            name="salary"
            placeholder="Choose range"
            description="Monthly income"></Select>
          <Input
            inputType="number"
            name="amount"
            description="Requested amount"
          />
          <Input
            inputType="text"
            name="purpose"
            description="Purpose of loan"
          />
          <Input
            inputType="number"
            name="repayment"
            description="Repayment period in years"
          />
        </>
      )}
      {step === 3 && (
        <>
          <Textarea
            name="comments"
            description="Enter any additional information regarding your application"
          />
          <button className="btn bg-primary btn-lg ">SUBMIT</button>
        </>
      )}
      <nav className="container w-100 d-flex justify-content-between mt-auto">
        <button
          className="btn btn-primary btn-lg "
          onClick={prevStep}
          disabled={step === 1}>
          «
        </button>

        <button
          className="btn btn-primary btn-lg "
          onClick={nextStep}
          disabled={step === 3}>
          »
        </button>
      </nav>
      <div
        className="progress"
        role="progressbar"
        aria-label="Basic example"
        aria-valuenow="0"
        aria-valuemin="0"
        aria-valuemax="100">
        <div
          className="progress-bar bg-light border border-2 border-primary rounded"
          style={{
            width: `${step === 1 ? 33 : step === 2 ? 66 : 100}%`,
          }}></div>
      </div>
    </div>
  );
}
