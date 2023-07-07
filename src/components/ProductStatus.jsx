import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { padding } from "@mui/system";

export default function ProductStatus(props) {
  const [productStatus, setProductStatus] = React.useState("active");

  const handleChange = (e) => {
    setProductStatus(e.target.value);
  };

  const [value, setValue] = React.useState("active");

  const handleChanges = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {props.status === "radio" && (
        <Box sx={{ width: "100%" }}>
          <Tabs
            style={{
              fontWeight: "bold",
            }}
            value={value}
            onChange={handleChanges}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab
              style={{
                textColor: "myColor",
                fontWeight: "bolder",
                textTransform: "capitalize",
                paddingBottom: "2rem",
              }}
              value="active"
              label="Active"
            />
            <Tab
              style={{
                fontWeight: "bolder",
                textTransform: "capitalize",
                paddingBottom: "2rem",
              }}
              value="draft"
              label="Draft"
            />
            <Tab
              style={{
                fontWeight: "bolder",
                textTransform: "capitalize",
                paddingBottom: "2rem",
              }}
              value="assemble"
              label="Assemble"
            />
          </Tabs>
        </Box>
      )}
      {props.status === "select" && (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={productStatus}
            onChange={handleChange}
          >
            <MenuItem value="active">Active</MenuItem>
            <MenuItem value="draft">Draft</MenuItem>
            <MenuItem value="assembel">Assembel</MenuItem>
          </Select>
        </FormControl>
      )}
    </>
  );
}
