import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import Fade from "@material-ui/core/Fade";
import "./TextInput.css";

const TextInput = props => {
  const [textBox, setTextBox] = useState();
  const [text, setText] = useState("");
  const [label, setLabel] = useState(props.label);
  const [textBoxBlurred, setTextBoxBlurred] = useState(false);

  const toggleTextBox = () => {
    setTextBox(!textBox);
    return props.toggleParagraph && props.toggleParagraph();
  };
  const onInput = e => {
    setText(e.target.value);
  };
  const onSubmit = () => {
    if (text) {
      props.submit(text);
      setText("");
    }
    setTextBoxBlurred(!textBoxBlurred);
    toggleTextBox();
  };
  const onKeyPressSubmit = e => e.keyCode == 13 && onSubmit();

  const handleTextBoxBlur = () => {
    props.secondLabel && setLabel(props.secondLabel);
    toggleTextBox();
  };

  const handleFocus = () => {
    label !== props.label && setLabel(props.label);
  };

  return (
    <div className={"textInput"}>
      {textBox && (
        <Fade in={textBox}>
          <TextField
            label={label}
            variant="outlined"
            onChange={typing => onInput(typing)}
            onKeyDown={onKeyPressSubmit}
            value={text}
            color={props.color}
            autoFocus={true}
            margin={"dense"}
            // onFocus={handleFocus}
            // onBlur={handleTextBoxBlur}
            multiline={props.multiline}
            fullWidth={props.fullWidth}
          />
        </Fade>
      )}
      <IconButton
        aria-label="delete"
        color={props.color}
        onClick={textBox ? onSubmit : toggleTextBox}
      >
        {props.icon || <AddIcon></AddIcon>}
      </IconButton>
    </div>
  );
};

export default TextInput;
