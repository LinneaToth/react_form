import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

export default function Submit({ handleSubmit }) {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const sendDelay = function () {
    setShow(true);
    handleSubmit();
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <>
      <Button onClick={sendDelay}>Submit Application</Button>
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {isLoading
              ? "Sending your application ..."
              : "Thank you for your application!"}{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-center w-100">
            {isLoading ? (
              <div className="spinner-border w-full" role="status">
                <span className="sr-only"></span>
              </div>
            ) : (
              "Your application has been successfully submitted!"
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
