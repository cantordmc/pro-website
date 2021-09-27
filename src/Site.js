import React from 'react';

import Paper from 'material-ui/Paper';
import Box from '@mui/material/Box';

import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import Menu from './Menu';
import SearchAppBar from './SearchAppBar';
import { ThemeProvider} from '@material-ui/core';


const styles = {
};

export default class Site extends React.Component{
    render(){
        return(
            <Box>
                <SearchAppBar />
                <Menu />
            </Box>
        )
    }
}
