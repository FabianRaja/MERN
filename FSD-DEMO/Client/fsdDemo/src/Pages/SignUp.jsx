import React from "react";
import { Base } from "../Base/Base";


import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


export default function SignUp(){

    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return(
        <Base title={"Register Page"}>
                                <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    <Tabs value={value} onChange={handleChange} centered>
                        <Tab label="Login" />
                        <Tab label="SignUp" />
                        
                    </Tabs>
                    </Box>
        </Base>
    )
}