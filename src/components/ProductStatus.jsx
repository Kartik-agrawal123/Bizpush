import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";

import Select from "@mui/material/Select";

export default function ProductStatus(props) {
  const [productStatus, setProductStatus] = React.useState("active");

  const handleChange = (e) => {
    setProductStatus(e.target.value);
  };
  return (
    <>
      {props.status === "radio" && (
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group">
            <FormControlLabel
              value="active"
              control={<Radio />}
              label="Active"
            />
            <FormControlLabel value="draft" control={<Radio />} label="Draft" />
            <FormControlLabel
              value="assemble"
              control={<Radio />}
              label="Assembel"
            />
          </RadioGroup>
        </FormControl>
      )}
      {props.status === "select" && (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={productStatus}
            onChange={handleChange}>
            <MenuItem value="active">Active</MenuItem>
            <MenuItem value="draft">Draft</MenuItem>
            <MenuItem value="assembel">Assembel</MenuItem>
          </Select>
        </FormControl>
      )}
    </>
  );
}
