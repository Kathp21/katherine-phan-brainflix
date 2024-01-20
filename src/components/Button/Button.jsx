import "./Button.scss";

function Button({buttonText, variant}) {
  return <button className={`button ${variant}`}>{buttonText}</button>;
}

export default Button;
