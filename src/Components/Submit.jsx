import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import { formSchema } from "../Validations/FormValidation";

export default function Submit({ formValues, setFormValues, defaultForm }) {
  const handleSubmit = function () {
    setFormValues(defaultForm);
    localStorage.clear();
  };

  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isValid, setIsValid] = useState(false);
  const [validationErrors, setValidationErrors] = useState([]);

  const validateForm = async () => {
    try {
      const result = await formSchema.validate(formValues, {
        abortEarly: false,
      });
      return result;
    } catch (e) {
      console.log(e.errors);
      return e.errors;
    }
  };

  const handleSubmitBtn = async function () {
    setShow(true);
    const result = await validateForm();
    const hasErrors = Array.isArray(result);

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
                      <li className="list-group-item text-danger border-0">
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
            variant="secondary"
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
