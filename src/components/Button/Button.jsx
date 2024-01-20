import "./Button.scss";
function Button() {
  const createAlert = () => {
    //Do some code
    alert("Hey!");
  };
  return <button onClick={createAlert} className="button">UPLOAD</button>;
}

export default Button;
