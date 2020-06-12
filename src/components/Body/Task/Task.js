import React from "react";
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import TaskBody from "../TaskBody/TaskBody";
import { firstUpperCase } from "../../../util/util";
import "./Task.css";
import { makeStyles } from "@material-ui/core/styles";
import * as actions from '../../../actions/actionCreators';
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",

    height: "80vh",
    width: "50vw"
  },
  button: {
    textTransform: "none",
    width: "100%",
    marginTop: "0.25vh",
    marginBottom: "0.25vh"
  }
}));

const Task = ({ task }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const state = useSelector(state => state.boards);
  const dispatch = useDispatch();
  const moveTask = to => dispatch(actions.moveTask(task, task.status)(to))

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const otherBoards = Object.keys(state).filter(key => key !== task.status);
  const moveItemTo = (
    <div className={"actionButtons"}>
      {otherBoards.map(otherBoard => (
        <Button
          color={"primary"}
          variant={"contained"}
          onClick={() => moveTask(otherBoard)}
          className={classes.button}
        >
          {`Move to ${firstUpperCase(otherBoard)}`}
        </Button>
      ))}
    </div>
  );
  console.log("Task", task);
  return (
    <>
      <div className="taskCard" onFocus={() => console.log("focused on card")}>
        <Button
          color="inherit"
          onClick={handleClick}
          className={classes.button}
        >
          {firstUpperCase(task.title)}
        </Button>

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
        >
          <div className={classes.paper}>
            <TaskBody task={task}></TaskBody>
            {moveItemTo}
          </div>
        </Popover>
      </div>
    </>
  );
};

export default Task;
