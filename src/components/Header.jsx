const Header = (props) => {
  return (
    <>
      <FontAwesomeIcon icon={faCalculator} />
      <h1>{props.title}</h1>
    </>
  );
};
export default Header;
