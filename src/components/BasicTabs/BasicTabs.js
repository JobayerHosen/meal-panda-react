import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import { useHistory } from "react-router";

export default function BasicTabs(props) {
  const { categories } = props;
  const [value, setValue] = useState("all");
  const history = useHistory();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    history.push(newValue);
  };

  return (
    <Box sx={{ width: "100%", borderBottom: 1, borderColor: "divider" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        textColor="primary"
        indicatorColor="primary"
        aria-label="Category Tab"
      >
        {categories.map((category) => (
          <Tab key={category} value={category} label={category} />
        ))}
      </Tabs>
    </Box>
  );
}
