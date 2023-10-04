import { FC, useEffect } from "react";
import { Action } from "@/utils/types";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

interface Props {
  actions: Action[] | null;
  position: {
    x: number;
    y: number;
  } | null;
}

const ActionPopup: FC<Props> = ({ actions, position }) => {
  return (
    <>
      {position && (
        <div
          className="w-40 bg-white rounded-md absolute -translate-x-1/2 transition-all delay-0 shadow-sm shadow-black"
          style={{
            top: `${position.y + 20}px`,
            left: `${position.x}px`,
            zIndex: 100,
          }}
        >
          <div className="w-full h-full">
            <Box sx={{ width: "100%" }}>
              <List>
                {actions?.map((action, index) => {
                  return (
                    <ListItem
                      key={index}
                      disablePadding
                      onClick={action.action}
                    >
                      <ListItemButton>
                        <ListItemText primary={action.name} />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            </Box>
          </div>
        </div>
      )}
    </>
  );
};

export default ActionPopup;
