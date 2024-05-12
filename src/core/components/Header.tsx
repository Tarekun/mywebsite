import { Box, Typography } from "@mui/material";
import { mainGreenRGB } from "../colors";
import GradientLine from "./GradientLine";

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
