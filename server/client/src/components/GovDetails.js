import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import { url } from '../globals';


const styles = theme => ({
    root: {
      display: 'flex',
      flexGrow: 1,
      flexWrap: 'wrap',
      // ...theme.typography.subheading,
      // height: 24,
      // boxSizing: 'content-box',
      // width: 'auto',
      // overflow: 'hidden',
      // textOverflow: 'ellipsis',
      // whiteSpace: 'nowrap',
      // paddingLeft: 16,
      // paddingRight: 16,
    },
    container: {
      maxWidth: 700,
      marginTop: 30,
      margin: "auto"
    },
    popperClose: {
      pointerEvents: 'none'
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
    center: {
      textAlign: 'center'
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing.unit * 2,
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    },
});

class GovDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            classes: props.classes,
            munLevel: this.props.history.location.state.munLevel,
            munName: this.props.history.location.state.munName,
            muns_list: [],
            munIssues: []
        }
        // this.get_issues = this.get_issues.bind(this);
        // this.handleClick = this.handleClick.bind(this);
    }

    // get_category_mun = _ => {
    //     fetch(url + '/munDetails/' + this.state.mun_level + '/' + this.state.mun_name)
    //     .then(response => response.json())
    //     .then(response => this.setState({ muns_list: response.data }))
    //     .catch(err => console.log(err))
    // }

    getMunIssues = _ => {
        fetch(url + '/munDetailsIssues/' + this.state.munLevel + '/' + this.state.munName)
        .then(response => response.json())
        .then(response => this.setState({ munIssues: response.data }))
        .catch(err => console.log(err))
    }

    handleClick = () => {
        this.setState({ open: !this.state.open });
    }

    componentWillMount() {
        console.log(this.state.munLevel);
        console.log(this.state.munName);
        this.getMunIssues();
      }

    render() {
        return(
            <div>
                {/* {this.state.issues_list[1].id} */}
                {/* <List>
                    {this.state.muns_list.map(issue => 
                    <ListItem> 
                        <ListItemText key={issue.id} primary={issue.id} secondary={issue.category} />
                    </ListItem>
                    )}
                </List> */}
                <List>
                    {this.state.munIssues.map(issue => 
                    <ListItem button onClick={this.handleClick}> 
                        <ListItemText inset primary={issue.heading} />
                        {this.state.open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    // <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                    //     <List component="div" disablePadding>
                    //     <ListItem button className={classes.nested}>
                    //         <ListItemText inset primary={issue.content} />
                    //     </ListItem>
                    //     </List>
                    // </Collapse>
                    )}
                </List>
                {/* {this.state.issues_list.map(issue =>
                    if(this.state.mun_level == "City") {
                        this.setState({})
                    }
                )} */}
            </div>
        );
    }
}

export default withStyles(styles)(GovDetails);