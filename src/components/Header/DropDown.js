import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";

export const FadeMenu = ({ icon, items }) => {
  const [anchorEl, open, handleClick, handleClose] = useFade();

  return (
    <div>
      <Fab aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
        {icon || "MENU"}
      </Fab>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {items ? (
          items.map(item => (
            <MenuItem onClick={() => handleClose(item.action, item.title)}>
              {item.title}
            </MenuItem>
          ))
        ) : (
          <>
            <MenuItem onClick={handleClose}>ITEM 1</MenuItem>
            <MenuItem onClick={handleClose}>ITEM 2</MenuItem>
            <MenuItem onClick={handleClose}>ITEM 3</MenuItem>
          </>
        )}
      </Menu>
    </div>
  );
};

export const useFade = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (onSelectItem, args = null) => {
    setAnchorEl(null);
    typeof onSelectItem === 'function' && onSelectItem(args);
  };
  return [anchorEl, open, handleClick, handleClose];
};
