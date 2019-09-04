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

const mapStateToProps = state => ({});
  
const mapDispatchToProps = dispatch => ({
    saveStudent: (studentName, studentCode) => dispatch(ACTIONS.saveStudent(studentName, studentCode))
});

class FirstStep extends Component {
  constructor() {
      super();
      this.state = {
          studentName: "",
          studentCode: ""
      }
  }

  handleSubmit = event => {
    this.setState({studentName: "", studentCode: ""});
    if (this.state.studentName !== "" && this.state.studentCode !== "") {
      this.props.saveStudent(this.state.studentName, this.state.studentCode);
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
                label="Student Name"
                id="margin-dense"
                value={this.state.studentName}
                className={classes.textField}
                margin="dense"
                name="name"
                onChange={(e) => this.handleChange(e, "studentName")}
              />   
        <p></p>       
          <TextField
                label="Student Code"
                id="margin-dense"
                value={this.state.studentCode}
                className={classes.textField}
                margin="dense"
                name="code"
                onChange={(e) => this.handleChange(e, "studentCode")}
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
  )(withStyles(styles)(FirstStep));