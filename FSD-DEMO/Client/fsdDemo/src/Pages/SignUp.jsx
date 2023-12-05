import React, { useState } from "react";
import { Base } from "../Base/Base";


import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Form from "../Components/Form";





function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}





export default function SignUp(){

    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  
    return(
        <Base title={"Register Page"}>
                                                <Box sx={{ width: '100%' }}>
                      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                          <Tab label="Login" {...a11yProps(0)} />
                          <Tab label="SignUp" {...a11yProps(1)} />
                        </Tabs>
                      </Box>
                      <CustomTabPanel value={value} index={0}>
                           <Form btnName={"Login"}/>
                      </CustomTabPanel>
                      <CustomTabPanel value={value} index={1}>
                            <Form btnName={"SignUp"}/>
                      </CustomTabPanel>
                    </Box>
        </Base>
    )
}

