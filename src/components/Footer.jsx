const Footer = (props) => {
  return (
    <>
      <footer>
        <span>
          Made with {props.with} by {props.by}
        </span>
      </footer>
    </>
  );
};
export default Footer;
