import "./button.css";

const Button = (props) => {
  const {handleOnClick , children , styleClass } = props;



  return (
    <button onClick={handleOnClick} className={`btn ${styleClass}`}>
      {children}
    </button>
  )
}
export default Button;