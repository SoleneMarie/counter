import OneButton from "./OneButton";
const Buttons = (props) => {
  return (
    <>
      <main>
        <section className="counter">
          <div className="less">
            <OneButton
              set={props.set}
              counter={props.counter}
              value={-1}
              text="-"
            />
          </div>
          <div className="total">
            <span>{props.counter}</span>
          </div>
          <div className="more">
            <OneButton
              set={props.set}
              counter={props.counter}
              value={+1}
              text="+"
            />
          </div>
        </section>
        <div className="reset">
          <OneButton set={props.set} counter={0} value={+0} text="reset" />
        </div>
      </main>
    </>
  );
};

export default Buttons;
