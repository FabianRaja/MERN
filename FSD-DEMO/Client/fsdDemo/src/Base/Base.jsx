import React from "react";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";

export const Base=({title,children})=>{
  const navigate=useNavigate();
    return(
        <div>
            <div>
                          <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                      <Toolbar>
                        <IconButton
                          size="large"
                          edge="start"
                          color="inherit"
                          aria-label="menu"
                          sx={{ mr: 2 }}
                          onClick={()=>navigate("/")}
                        >
                        
                        Home
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                          Short Notes
                        </Typography>
                        <Button color="inherit" onClick={()=>navigate("/login")}>Login</Button>
                        <Button color="inherit" onClick={()=>navigate("/register")}>Login/SignUp</Button>
                        <Button color="inherit" onClick={()=>navigate("/user")}>Profile</Button>
                        <Button color="inherit">Logout</Button>
                      </Toolbar>
                    </AppBar>
                  </Box>
            </div>
            <div>
                <h1>{title}</h1>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}
