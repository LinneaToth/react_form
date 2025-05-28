//This component deals with submitting the form. It communicates using a bootstrap component called Modal. Logic decides what is shown, depending on validation and with successful submission with a simulated delay

import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { formSchema } from "../Validations/FormValidation";

export default function Submit({ formValues, setFormValues, defaultForm }) {
  const handleSubmit = function () {
    console.log(formValues);
    setFormValues(defaultForm);
    localStorage.clear();
  };

  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isValid, setIsValid] = useState(false);
  const [validationErrors, setValidationErrors] = useState([]);

  //Tests the input against validation schema with YUP
  const validateForm = async () => {
    try {
      const result = await formSchema.validate(formValues, {
        abortEarly: false,
      });
      return result;
    } catch (e) {
      return e.errors;
    }
  };

  const handleSubmitBtn = async function () {
    setShow(true);
    const result = await validateForm();
    const hasErrors = Array.isArray(result); //The result is only presented as an array if errors are detected

    //Send if ok, list errors if not
    if (!hasErrors) {
      handleSubmit();
      setIsValid(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    } else {
      setValidationErrors(result);
      setIsLoading(false);
      setIsValid(false);
    }
  };

  return (
    <>
      <Button onClick={handleSubmitBtn}>Submit Application</Button>
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {isLoading && isValid
              ? "Sending your application ..."
              : !isLoading && isValid
              ? "Thank you for your application!"
              : !isValid
              ? "Your application was not submitted"
              : ""}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-center w-100">
            {isLoading ? (
              <div className="spinner-border w-full" role="status">
                <span className="sr-only"></span>
              </div>
            ) : isValid ? (
              "Your application has been successfully submitted!"
            ) : (
              Array.isArray(validationErrors) && (
                <ul className="list-group">
                  {validationErrors.map((error) => {
                    return (
                      <li
                        key={uuidv4()}
                        className="list-group-item text-danger border-0">
                        {error}
                      </li>
                    );
                  })}
                </ul>
              )
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            disabled={isLoading}
            variant="primary"
            onClick={() => {
              setShow(false);
              setIsLoading(true);
            }}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
