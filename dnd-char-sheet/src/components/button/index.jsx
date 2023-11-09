const Button = ({ text, count, handleClick }) => {
  return (
    <>
      Clicked {count} times.
      <br />
      <button onClick={handleClick}>{text}</button>
    </>
  );
};

export default Button;
