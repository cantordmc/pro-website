import React from 'react';

import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import Menu from './Menu';
import SearchAppBar from './SearchAppBar';

const styles = {
};

export default class Site extends React.Component{
    render(){
        return(
            <MuiThemeProvider>
                <Paper>
                    <SearchAppBar />
                    <Menu />
                </Paper>
            </MuiThemeProvider>
        )
    }
}
