import React, { Component } from "react";

import {
  withStyles,
  TextField,
  Button,
} from "@material-ui/core";
import ACTIONS from "../modules/action";
import { connect } from "react-redux";

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: `${theme.spacing(4)}px 0 ${theme.spacing(2)}px`
  }
});

const mapStateToProps = state => ({ });
  
const mapDispatchToProps = dispatch => ({
    saveClass: (className, classCode) => dispatch(ACTIONS.saveClass(className, classCode))
});

class SecondStep extends Component {
  constructor() {
      super();
      this.state = {
          className: "",
          classCode: ""
      }
  }

  handleSubmit = event => {
    this.setState({className: "", classCode: ""});
    if (this.state.className !== "" && this.state.classCode !== "") {
      this.props.saveClass(this.state.className, this.state.classCode);
    }
    event.preventDefault();
  };

  handleChange = (event, stateName) => {
    this.setState({ [stateName]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>           
          <TextField
                label="Class Name"
                id="margin-dense"
                value={this.state.className}
                className={classes.textField}
                margin="dense"
                name="name"
                onChange={(e) => this.handleChange(e, "className")}
              />   
        <p></p>       
          <TextField
                label="Class Code"
                id="margin-dense"
                value={this.state.classCode}
                className={classes.textField}
                margin="dense"
                name="code"
                onChange={(e) => this.handleChange(e, "classCode")}
              />
            <p></p>
            <Button onClick={this.handleSubmit}>Save</Button>
      </div>
    );
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(SecondStep));