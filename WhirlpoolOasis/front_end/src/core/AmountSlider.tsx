import { Slider } from "@mui/material";

function AmountSlider(props: { callback: Function }) {
  // change these values for live-net. They are very small due to test net tokens being given out in small quantities
  const marks = [
    { label: "0.1", value: 1 },
    { label: "1", value: 2 },
    { label: "10", value: 3 },
    { label: "100", value: 4 },
  ];
  function onChange(value: number) {
    props.callback(Number(marks[value - 1].label));
  }
  return (
    <div className="Slider">
      <Slider
        valueLabelFormat="Amount"
        aria-label="Amount"
        defaultValue={1}
        onChange={(_, value) => onChange(value as number)}
        step={1}
        valueLabelDisplay="off"
        marks={marks}
        min={1}
        max={4}
      />
    </div>
  );
}

export default AmountSlider;
