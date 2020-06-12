import React, { useState, useEffect } from "react";
import "./TaskBody.css";
import TextField from "@material-ui/core/TextField";
import * as actions from "../../../actions/actionCreators";
import { useDispatch } from "react-redux";
import { firstUpperCase } from "../../../util/util";



const TaskBody = props => {
  const [text, setText] = useState();
  const dispatch = useDispatch();
  const addDescription = description =>
    dispatch(
      actions.addDescription(props.task.status, props.task.title)(description)
    );
  const setTaskDescripton = event => {
    setText(event.target.value);
    addDescription(event.target.value);
  };
  useEffect(() => setText(props.task.description), [props]);

  return (
    <>
      <div className={"container"}>
        <h5>{firstUpperCase(props.task.title)}</h5>

        <div className={"taskBody"}>
          <TextField
            className={"description"}
            variant={"outlined"}
            multiline={true}
            label={"Text Description"}
            value={text}
            onChange={event => setTaskDescripton(event)}
          ></TextField>
        </div>
      </div>
    </>
  );
};

export default TaskBody;
