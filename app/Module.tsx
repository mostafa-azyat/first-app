import "./Form.css";

export default function Module({ isVisiblity, errorMessage = null }) {
  if (isVisiblity) {
    return (
      <div id="modal">
        <div id="modal-content">
          <h1 style={{ color: errorMessage ? "red" : "green" }}>
            {errorMessage != null
              ? errorMessage
              : "the form has been submitted Successfull"}
          </h1>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
