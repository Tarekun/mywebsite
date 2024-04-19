import { Box, Typography } from "@mui/material";
import { mainGreenRGB } from "./colors";

function GradientLine() {
  return (
    <Box
      sx={{
        height: "4px",
        width: "100%",
        background: `linear-gradient(to top right, ${mainGreenRGB} 0%, #000000 100%)`,
        borderRadius: 2,
      }}
    />
  );
}

interface HeaderProps {
  text: string;
}
export default function Header({ text }: HeaderProps) {
  return (
    <Box>
      <Typography variant="h4" color="primary" align="left" marginLeft={2}>
        {text}
      </Typography>
      <GradientLine />
    </Box>
  );
}
