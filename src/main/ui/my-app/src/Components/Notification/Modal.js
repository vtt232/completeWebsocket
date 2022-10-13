import '../../styles/App.css';
function Modal(props) {
  let { children, close, ...rest } = props;
  console.log(children)

  if (!children) {
    children = <p>This is a example modal</p>;
  }

  return (
    <div id="modal-dialog" {...rest}>
      <div className="flex flex-col justify-center items-center">
        {children}
        <button onClick={close}>
          Close
        </button>
      </div>
    </div>
  );
}
export default Modal;