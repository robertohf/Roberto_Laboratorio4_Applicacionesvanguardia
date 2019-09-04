import React, { Component } from "react";

import {
  withStyles,
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

const mapStateToProps = state => ({
    sname: state.studentName, scode: state.studentCode, cname: state.className, ccode: state.classCode
});
  
const mapDispatchToProps = dispatch => ({
    getInfo: () => dispatch(ACTIONS.getInfo())
});

class ThirdStep extends Component {
  constructor() {
      super();
      this.state = {
          sname: "",
          scode: "",
          cname: "",
          ccode: "",
      };
  }
  
  componentDidMount() {
    this.props.getInfo();
  }

  render() {
    return (
      <div>
          <p>Student name: {this.props.sname} </p>
          <p>Student code: {this.props.scode} </p>
          <p>Class name: {this.props.cname} </p>
          <p>Class code: {this.props.ccode} </p>
      </div>
    );
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(ThirdStep));