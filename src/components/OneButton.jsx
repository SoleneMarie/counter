const OneButton = (props) => {
  return (
    <>
      <button
        onClick={() => {
          props.set(props.counter + props.value);
        }}
      >
        {props.text}
      </button>
    </>
  );
};

export default OneButton;
