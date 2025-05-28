import { useState, useEffect } from "react";
import Input from "./Input";
import Select from "./Select";
import Textarea from "./Textarea";
import Submit from "./Submit";
import ProgressNav from "./ProgressNav";

const salaryOptions = [
  "less than ₩500",
  "₩500-₩1000",
  "₩1000-₩2000",
  "more than ₩2000",
];

const defaultForm = {
  formName: "",
  age: 20,
  phoneNumber: "",
  isEmployed: false,
  salary: "",
  amount: 100,
  purpose: "",
  repayment: 10,
  comments: "",
};

export default function LoanForm() {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState({
    ...defaultForm,
  });

  useEffect(() => {
    const storedValues = localStorage.getItem("loanForm");
    if (storedValues) {
      setFormValues({ ...JSON.parse(storedValues) });
    }
  }, []);

  const handleInputChange = function (name, value) {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleBlur = function () {
    localStorage.setItem("loanForm", JSON.stringify(formValues));
  };

  const nextStep = () => {
    step < 3 && setStep((step) => step + 1);
  };

  const prevStep = () => {
    step > 1 && setStep((step) => step - 1);
  };

  return (
    <div className="container d-flex flex-column h-100 gap-3 overflow-auto">
      <h2 className="display-6">
        Apply for Loan{" "}
        {formValues.salary === "less than ₩500" && step === 2 ? (
          <span
            className="position-absolute top-0 start-50 translate-middle badge bg-danger"
            style={{ fontSize: "12px" }}>
            ⚠️ Low income may impact your credit{" "}
          </span>
        ) : (
          ""
        )}
      </h2>
      <form className="container d-flex flex-column h-100 gap-3 p-0">
        {step === 1 && (
          <>
            <Input
              inputType="text"
              name="formName"
              placeholder="Full name"
              description="Full name"
              handleChange={handleInputChange}
              handleBlur={handleBlur}
              formValues={formValues}
            />
            <Input
              inputType="text"
              name="phoneNumber"
              placeholder="Phone Number"
              description="Phone number"
              handleChange={handleInputChange}
              handleBlur={handleBlur}
              formValues={formValues}
            />
            <Input
              inputType="number"
              name="age"
              description="Age"
              handleChange={handleInputChange}
              handleBlur={handleBlur}
              formValues={formValues}
            />
            <Input
              inputType="checkbox"
              name="isEmployed"
              description="I am currently employed"
              handleChange={handleInputChange}
              handleBlur={handleBlur}
              formValues={formValues}
            />
          </>
        )}
        {step === 2 && (
          <>
            <Select
              options={salaryOptions}
              name="salary"
              placeholder="Choose range"
              description="Monthly income"
              handleChange={handleInputChange}
              handleBlur={handleBlur}
              formValues={formValues}></Select>

            <Input
              inputType="number"
              name="amount"
              description="Requested amount"
              handleChange={handleInputChange}
              handleBlur={handleBlur}
              formValues={formValues}
            />
            <Input
              inputType="text"
              name="purpose"
              placeholder="New graphics card?"
              description="Purpose of loan"
              handleChange={handleInputChange}
              handleBlur={handleBlur}
              formValues={formValues}
            />
            <Input
              inputType="number"
              name="repayment"
              description="Repayment period in years"
              handleChange={handleInputChange}
              handleBlur={handleBlur}
              formValues={formValues}
            />
          </>
        )}
        {step === 3 && (
          <>
            <Textarea
              name="comments"
              description="Enter any additional information regarding your application"
              handleChange={handleInputChange}
              handleBlur={handleBlur}
              formValues={formValues}
            />
            <Submit
              setFormValues={setFormValues}
              formValues={formValues}
              defaultForm={defaultForm}
            />
          </>
        )}
      </form>
      <ProgressNav prevStep={prevStep} nextStep={nextStep} step={step} />
    </div>
  );
}
