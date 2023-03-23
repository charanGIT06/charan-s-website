const AlertButton = ({ message, alertType }) => {
  return `<div className={'alert alert-${alertType} alert-dismissible'} role="alert">
      <div>${message}</div>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>`;
};

export default AlertButton;
