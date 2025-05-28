//This component handles taking us through the steps of the form

export default function ProgressNav({ prevStep, nextStep, step }) {
  return (
    <>
      <nav className="container w-100 d-flex justify-content-between mt-auto">
        <button
          className="btn btn-secondary btn-lg text-white"
          onClick={prevStep}
          disabled={step === 1}>
          «
        </button>

        <button
          className="btn btn-secondary btn-lg text-white"
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
    </>
  );
}
