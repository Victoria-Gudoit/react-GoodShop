import { Slider } from "antd";

export const PriceSlider = ({ maxPrice, onChangePrice }) => (
  <>
    <h2>Максимальная цена:</h2>
    <Slider
      style={{ width: 500, fontWeight: 500 }}
      range={{
        draggableTrack: true,
      }}
      defaultValue={[0, 1000]}
      value={maxPrice}
      marks={{ 1: `$1`, 1000: `$1000` }}
      max={1000}
      onChange={onChangePrice}
    />
  </>
);
