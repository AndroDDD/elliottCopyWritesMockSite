import React from "react";
import { View } from "react-native";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Grid,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { isMobile } from "../../../routes/routerBlock";
import {
  handleHome,
  handleAbout,
  handlePortfolio,
  handleServices,
  handleContact,
  handleScheduleAppointment,
  handleLogin,
} from "./HeaderLogic";
import "./HeaderStyles.scss";

const HeaderBar: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <View style={{ width: "100%" }}>
      <AppBar position="static">
        <Toolbar className={"toolBar"}>
          <div className={"menuButton"}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <img
                src={require("../../Media/Icons/menuIconv1.1.png")}
                alt={"Menu Button Icon"}
                height={"45px"}
              />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              getContentAnchorEl={null}
              anchorReference={"none"}
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
              transformOrigin={{ vertical: "top", horizontal: "center" }}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              PaperProps={{
                style: styles2.menu,
              }}
            >
              {isMobile ? (
                <MenuItem style={styles2.menuItem} onClick={handleLogin}>
                  {"Login"}
                </MenuItem>
              ) : (
                []
              )}
              <MenuItem style={styles2.menuItem} onClick={handleHome}>
                {"Home"}
              </MenuItem>
              <MenuItem style={styles2.menuItem} onClick={handleAbout}>
                {"About"}
              </MenuItem>
              <MenuItem style={styles2.menuItem} onClick={handlePortfolio}>
                {"Portfolio"}
              </MenuItem>
              <MenuItem style={styles2.menuItem} onClick={handleServices}>
                {"Services"}
              </MenuItem>
              <MenuItem style={styles2.menuItem} onClick={handleContact}>
                {"Contact"}
              </MenuItem>
              <MenuItem onClick={handleScheduleAppointment}>
                {"Schedule Appointment"}
              </MenuItem>
            </Menu>
          </div>
          <div className={"headerBanner"}>
            <Grid container>
              <img
                src={require("../../Media/Icons/logoIconv1.png")}
                alt={"Header Banner"}
                height={"70px"}
              />
              <Grid item>
                <img
                  src={require("../../Media/Banners/logoBannerv2FrontHalf.png")}
                  alt={"Header Banner"}
                  height={"70px"}
                />
              </Grid>
              <Grid item>
                <img
                  src={require("../../Media/Banners/logoBannerv2EndHalf.png")}
                  alt={"Header Banner"}
                  height={"70px"}
                />
              </Grid>
            </Grid>
          </div>

          {isMobile ? (
            []
          ) : (
            <div className={"loginButton"}>
              <Button color="inherit">{"Login"}</Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </View>
  );
};

const styles2 = {
  menu: {
    color: "rgb(250, 144, 0)",
    backgroundColor: "rgb(0, 0, 50)",
    border: "solid 1px rgb(250, 144, 0)",
  },
  menuItem: { borderBottom: "solid 1px rgb(250, 144, 0)" },
};

export default HeaderBar;
