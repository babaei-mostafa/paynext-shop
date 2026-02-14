import { Form } from "react-bootstrap";

const QuantityPicker = ({ value, countInStock, onChange }) => {
  return (
    <Form.Control as="select" value={value} onChange={onChange}>
      {countInStock > 0 &&
        [...Array(countInStock).keys()].map((elem) => (
          <option key={elem + 1} value={elem + 1}>
            {elem + 1}
          </option>
        ))}
    </Form.Control>
  );
};

export default QuantityPicker;
