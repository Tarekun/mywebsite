import { Menu } from "@mui/material";
import { PropsWithChildren } from "react";

type CoolMenuProps = PropsWithChildren & {
  anchorEl: HTMLElement | null;
  setAnchorEl: (newAnchorEl: HTMLElement | null) => void;
};
export default function CoolMenu({
  children,
  anchorEl,
  setAnchorEl,
}: CoolMenuProps) {
  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={() => setAnchorEl(null)}
      slotProps={{
        paper: {
          sx: {
            border: 1,
            borderColor: "primary.main",
            backgroundColor: "black",
            backgroundImage: "#000",
          },
          square: true,
        },
      }}
      MenuListProps={{
        sx: {
          padding: 0,
        },
      }}
    >
      {children}
    </Menu>
  );
}
