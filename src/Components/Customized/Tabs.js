import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Middle } from "./middle";
import image12 from "../../images/image12.jpg";
import image11 from "../../images/image11.jpg";
import image13 from "../../images/image13.jpg";
import image14 from "../../images/image14.jpg";
function TabPanel(props) {
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
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,

    "& .MuiButtonBase-root": {
      color: "#8e8e90",
      fontSize:17,
      textTransform: "none",
      "&:hover": {
        color: "#008900",
      },
    },
    "& .MuiTabs-indicator": {
      backgroundColor: "#008900",
      color: "#008900",
    },
    "& .MuiTabs-root": {
      marginLeft:'5.4%'
    },
    [theme.breakpoints.down("xs")]:{
      display:'flex',
      flexDirection:'column',
      "& .MuiTab-root": {
        marginleft:'70%',
      },

    }
  },
}));

export default function TabContent() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Maixima tabs"
      >
        <Tab label="Constant Innovation" {...a11yProps(0)} />
        <Tab label="Trader-built" {...a11yProps(1)} />
        <Tab label="Passionate Community" {...a11yProps(2)} />
        <Tab label="Dedicated Support" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Middle
          image={image14}
          titleMiddle="We turn real feedback into real-time innovation"
          middleSubtitle=" Developed specifically with feedback from traders like you with the
            latest addition to the Maxima site is a web-based software that
            features a fascinating trading experience. It's perfect for those
            who want to trade equities and derivatives while accessing essential
            tools from their everyday browser."
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Middle
          image={image12}
          titleMiddle="Built by the trading phanatics"
          middleSubtitle="The Maxima platform was designed with the help of
          avid and experienced traders driven to make sure the platform remains
          one of the most intereactive on the market."
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Middle
          image={image11}
          titleMiddle="Join a community of passionate traders"
          middleSubtitle="Build a more informed strategy with the help from our community of traders.
          Our in-platform chat rooms, social media discussion on @Maxima,
          and workshops not only expand your knowledge — but your trading network  and networth too.."
        />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Middle
          image={image13}
          titleMiddle="Answers to your toughest trading questions"
          middleSubtitle=" Our platform is filled with resources written by traders who know the ins and outs of the
          market. And all content is availabe day and night to help you when you need it the most. You can
          get in touch at 039780788691 or share your screen with our in-app chat."
          to="/support"
        />
      </TabPanel>
    </div>
  );
}
