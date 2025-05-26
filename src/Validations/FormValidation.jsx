import * as yup from "yup";

const phoneRegExp =
  /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;

export const formSchema = yup.object().shape({
  formName: yup
    .string()
    .min(3, "Name must be at least three characters long")
    .max(200, "Name cannot exceed 200 characters"),
  age: yup
    .number()
    .min(18, "You must be at least 18 years of age")
    .max(150, "Please check your age")
    .required("Age is required")
    .integer(),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, "Please enter a valid phone number"),
  isEmployed: yup.boolean(),
  salary: yup
    .string()
    .oneOf(
      ["less than ₩500", "₩500-₩1000", "₩1000-₩2000", "more than ₩2000"],
      "Please choose an income range"
    )
    .required("Salary range is required"),
  amount: yup.number().required("Amount of loan is required").integer(),
  purpose: yup.string().required("Please tell us the purpose of the loan"),
  repayment: yup.number().required("Repayment period is required").integer(),
  comments: yup.string().optional(),
});
