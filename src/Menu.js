import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 600}}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Who We Are" {...a11yProps(0)} />
        <Tab label="Artists" {...a11yProps(1)} />
        <Tab label="Releases" {...a11yProps(2)} />
        <Tab label="Lessons" {...a11yProps(3)} />
        <Tab label="Contact" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        Who We Are
      </TabPanel>
      <TabPanel value={value} index={1}>
        Artists
      </TabPanel>
      <TabPanel value={value} index={2}>
        Releases
      </TabPanel>
      <TabPanel value={value} index={3}>
        Lessons
      </TabPanel>
      <TabPanel value={value} index={4}>
        Contact
      </TabPanel>
    </Box>
  );
}
