import { Box } from "@mui/material";
import { mainGreenRGB } from "../colors";

export default function GradientLine() {
  return (
    <Box
      sx={{
        height: "4px",
        width: "100%",
        background: `linear-gradient(to bottom, ${mainGreenRGB} 0%, #000000 80%)`,
        borderRadius: 2,
        boxShadow: `0px 0px 8px ${mainGreenRGB}`,
      }}
    />
  );
}
