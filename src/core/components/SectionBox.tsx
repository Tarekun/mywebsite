import { Box } from "@mui/material";
import { PropsWithChildren } from "react";

type SectionBoxProps = PropsWithChildren & {
  padding?: number;
};
export default function SectionBox({ children, padding = 0 }: SectionBoxProps) {
  return (
    <Box
      padding={padding}
      sx={{
        backgroundColor: "black",
        border: 1,
        borderColor: "primary.main",
        borderRadius: 1,
      }}
    >
      {children}
    </Box>
  );
}
