function ModalHead() {
  return (
    <div className="modals__head is-flex is-justify-content-space-between ">
      <img
        className="modals__logo"
        src={process.env.REACT_APP_IMAGES_SRC + 'logo.jpg'}
        alt="logo"
      />
      <button className="modals__close" aria-label="close" data-bulma-modal="close"></button>
    </div>
  );
}

export default ModalHead;
