import { AppBar, Toolbar, Typography } from "@mui/material";
import * as React from "react";
import "./Header.css";

const Header: React.FunctionComponent<{}> = () => {
  return (
    <div>
      <AppBar position="relative" className="navbar">
        <Toolbar>
          <Typography variant="h5">Git Users</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
