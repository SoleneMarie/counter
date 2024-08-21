const Buttons = (props) => {
  return (
    <>
      <main>
        <section className="counter">
          <div className="less">
            <button
              onClick={() => {
                props.set(props.counter - 1);
              }}
            >
              -
            </button>
          </div>
          <div className="total">
            <span>{props.counter}</span>
          </div>
          <div className="more">
            <button
              onClick={() => {
                props.set(props.counter + 1);
              }}
            >
              +
            </button>
          </div>
        </section>
        <div className="reset">
          <button
            onClick={() => {
              props.counter(0);
            }}
          >
            Reset
          </button>
        </div>
      </main>
    </>
  );
};

export default Buttons;
