import { useState, useMemo } from "react";
function Calculator() {
  const [Height, setHeight] = useState(150);
  const [Weight, setWeight] = useState(50);

  function eventChangeHeight(event: React.ChangeEvent<HTMLInputElement>) {
    const inputheight = event.target.value;
    setHeight(Number(inputheight));
  }

  function eventChangeWeight(event: React.ChangeEvent<HTMLInputElement>) {
    const inputWeight = event.target.value;
    setWeight(Number(inputWeight));
  }

  const output = useMemo(() => {
    const metersHeight = Height / 100;
    return Weight / (metersHeight * metersHeight);
  }, [Weight, Height]);

  const Foot = useMemo(() => {
    const HeightinFoot = Height * 0.032808399;
    return HeightinFoot.toFixed(2);
  }, [Height]);
  let wellNess;

  if (output < 18) {
    wellNess = "UnderWeight";
  } else if (output >= 18.5 && output <= 24.9) {
    wellNess = "Healthy!";
  } else if (output > 24.9) {
    wellNess = "Overweight";
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 container-calculator">
          <div className="form-group">
            <h1 className="my-3 bg-success text-white p-3 rounded text-center">
              Body Mass Index Calculator
            </h1>
            <div className="bg-secondary-subtle text-dark p-3 rounded my-3">
              <label htmlFor="customRange1" className="form-label">
                Height {Height} cm or {Foot} ft
              </label>
              <input
                min={100}
                max={260}
                onChange={eventChangeHeight}
                type="range"
                className="form-range"
                id="customRange1"
              />
              <label htmlFor="customRange2" className="form-label">
                Weight {Weight} kg
              </label>
              <input
                min={40}
                max={200}
                onChange={eventChangeWeight}
                type="range"
                className="form-range"
                id="customRange2"
              />
            </div>
            <div className="text-center bg-secondary text-white p-3 mb-3 rounded">
              <h1>{wellNess}!</h1>
              <h1>BMI: {output.toFixed(2)} </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Calculator;
