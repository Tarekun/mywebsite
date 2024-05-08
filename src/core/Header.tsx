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
  underline?: boolean;
  align?: "left" | "right";
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}
export default function Header({
  text,
  underline = true,
  align = "left",
  variant = "h4",
}: HeaderProps) {
  return (
    <Box>
      <Typography
        variant={variant}
        color="primary"
        align={align}
        marginBottom={1}
        sx={{
          textShadow: `2px 2px 4px ${mainGreenRGB}`,
        }}
      >
        {text}
      </Typography>
      {underline && <GradientLine />}
    </Box>
  );
}
