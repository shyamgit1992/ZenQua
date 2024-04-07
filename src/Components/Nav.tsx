import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  Grid,
  IconButton,
  Paper,
  Tab,
  Tabs,
  Theme,
  Toolbar,
  Typography,
  WithStyles,
  createStyles,
  withStyles,
  withWidth,
} from "@material-ui/core";
import React from "react";
import "./Nav.css";
import MenuIcon from '@material-ui/icons/Menu';
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
import { NavLink } from "react-router-dom";
const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: "30px",

      //backgroundColor:'grey'
    },
    navbar: {
      display: "flex",
      backgroundColor: "grey",
    },
    navbar_box_logo: {
      display: "flex",
      width: "25%",
      //backgroundColor:'green'
      //justifyContent:'start',
      //gap:10
    },
    // navbar_box_center:{
    //     display:'flex',
    //     width:'33%',
    //     position:"static"
    //     //justifyContent:'center',
    //     //gap:5

    // },
    navbar_box_center: {
      display: "flex",
      width: "50%",
      //backgroundColor:'red',
      //position:"static",
      // alignSelf:'center',
      // justifySelf:'center',
      justifyContent: "center",
      // alignContent:'center',
      // alignItems:'center'

      //gap:5
    },
    customTab: {
      minWidth: "20px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.710rem",
      },
      [theme.breakpoints.between("sm", "md")]: {
        fontSize: "0.710rem",
      },
      [theme.breakpoints.between("md", "lg")]: {
        fontSize: "0.875rem",
      },
    },
    navbar_box_right: {
      display: "flex",
      width: "25%",
      justifyContent: "end",
      //backgroundColor:'pink',
      //flexWrap:'wrap'
      //gap:10
    },
    hide: {
      display: "none",
    },
    title: {},
    title2: {},
    paper: {
      [theme.breakpoints.down("sm")]: {
        width: "auto",
        height: "auto", // Adjust height for smaller screens
      },
      [theme.breakpoints.between("sm", "md")]: {
        width: "auto",
        height: "auto",
      },
      [theme.breakpoints.between("md", "lg")]: {
        width: "auto",
        height: "300",
      },
      //backgroundColor:'grey',
      justifyContent: "center",
      //textAlign:'center',
      alignItems: "center",
      //border: '5px solid grey',
      padding: "5px",
      paddingBottom: "0px",
    },
  });
interface NavProps extends WithStyles<typeof styles> {
  width: string;
}
interface NavState{
  value :number;
  drawerOpen:boolean;
}
class Nav extends React.Component<NavProps,NavState> {
  constructor(props: NavProps) {
    super(props);
    this.state = {
      value: 0,
      drawerOpen: false,
    }
  }
  handleDrawerToggle = ()=>{
    this.setState((prevState) => ({ drawerOpen: !prevState.drawerOpen }));

  }
  render() {
    const { classes,width } = this.props;
    const { value, drawerOpen } = this.state;
    const isMatch = width === 'xs'; // Check if the screen width is extra small or small
    return (
      
      <div>
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <Box className={classes.navbar_box_logo}>
              <Typography variant="h6" className={classes.title}>
                ZenQua
              </Typography>
            </Box>
            
            <Box className={classes.navbar_box_center}>
            {!isMatch && (
              <Tabs aria-label="simple tabs example">

                <Tab className={classes.customTab} label="Home" component={NavLink} to="/"/>
                <Tab className={classes.customTab} label="Experience" component={NavLink} to="/experience"/>
                <Tab className={classes.customTab} label="Resume" component={NavLink} to="/resume"/>
                <Tab className={classes.customTab} label="Skills" component={NavLink} to="/skills"/>
                <Tab className={classes.customTab} label="Contact" component={NavLink} to="/Contact"/>
              </Tabs>
            )}
            </Box>
            <Box className={classes.navbar_box_right}>
            {!isMatch && (
              <Tabs aria-label="simple tabs example">
              <Tab className={classes.customTab} label="Login" icon={<PersonIcon/>} />
              <Tab className={classes.customTab} label="Register" />
              </Tabs>
            )}
            
            </Box>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={this.handleDrawerToggle}
              className={isMatch ? '' : classes.hide}
            >
              <MenuIcon />
            </IconButton>
            
            
            {/* <Box className={classes.navbar_box}>

            </Box> */}
          </Toolbar>
        </AppBar>
        <Drawer open={drawerOpen} onClose={this.handleDrawerToggle}>
          <div onClick={this.handleDrawerToggle}>
            <Tabs
              className={classes.title}
              indicatorColor="secondary"
              textColor="inherit"
              value={value}
              onChange={(e, value) => this.setState({ value })}
              orientation="vertical"
            >
               <Tab label="Home" component={NavLink} to="/"/>
                <Tab label="Experience" component={NavLink} to="/experience"/>
                <Tab label="Resume" component={NavLink} to="/resume"/>
                <Tab label="Skills" component={NavLink} to="/skills"/>
                <Tab label="Contact" component={NavLink} to="/Contact"/>
                
                {/* <EmailIcon className={classes.icon} /> */}
              
                <Button startIcon={<EmailIcon/>}>shyam.gupta@zenQua.com</Button>
            </Tabs>
           
            
           
          </div>
        </Drawer>
        <Container>
          <Grid container className={classes.root} spacing={1}>
            <Grid item xs={12} sm={4} md={4}>
              <Paper style={{ position: "sticky" }} className={classes.paper}>
                <img
                  src="https://v4.mui.com/static/images/image-list/vegetables.jpg"
                  alt="Your Image"
                  style={{
                    backgroundSize: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Paper className={classes.paper}>
                <img
                  src="https://v4.mui.com/static/images/image-list/vegetables.jpg"
                  alt="Your Image"
                  style={{
                    backgroundSize: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Paper className={classes.paper}>
                <img
                  src="https://v4.mui.com/static/images/image-list/vegetables.jpg"
                  alt="Your Image"
                  style={{
                    backgroundSize: "fit",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}
export default withStyles(styles)(withWidth()(Nav));
