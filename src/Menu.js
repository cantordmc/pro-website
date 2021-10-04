import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Home from './Home';
import Artists from './Artists';
import Releases from './Releases';
import Lessons from './Lessons';
import Contact from './Contact';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Menu() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
        minHeight = {window.innerHeight-60}
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex',
  }}
    >
     <div style={{position: "sticky"}}>
      <Tabs
        orientation="vertical"
        value={value}
        textColor="secondary"
        indicatorColor="secondary"
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Overview" {...a11yProps(0)} />
        <Tab label="Artists" {...a11yProps(1)} />
        <Tab label="Releases" {...a11yProps(2)} />
        <Tab label="Lessons" {...a11yProps(3)} />
        <Tab label="Contact" {...a11yProps(4)} />
      </Tabs>
      </div>
      <TabPanel value={value} index={0}>
        <Box width={window.innerWidth-300}>
          <Container>
              <Home />
        </Container>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
       <Box width={window.innerWidth-300}>
        <Container>
            <Artists />
          </Container>
       </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Box width={window.innerWidth-300}>
       <Container>
            <Releases />
          </Container>
       </Box>
      </TabPanel>
      <TabPanel value={value} index={3}>
       <Box width={window.innerWidth-300}>
        <Container>
            <Lessons />
         </Container>
       </Box>
      </TabPanel>
      <TabPanel value={value} index={4}>
       <Box width={window.innerWidth-300}>
        <Container>
            <Contact />
          </Container>
       </Box>
      </TabPanel>
    </Box>
  );
}
