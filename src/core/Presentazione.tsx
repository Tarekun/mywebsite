import CloseIcon from "@mui/icons-material/Close";
import { Box, Card, IconButton, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const fullText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
occaecat cupidatat non proident, sunt in culpa qui officia deserunt
mollit anim id est laborum.`;
const cursor = "█";

export default function Presentazione() {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (idx < fullText.length) {
      const timeoutId = setTimeout(() => {
        setText(text + fullText.charAt(idx));
        setIdx(idx + 1);
      }, 25);

      return () => clearTimeout(timeoutId);
    }
  }, [idx, text]);

  return (
    <Card
      variant="outlined"
      sx={{
        borderColor: "primary.main",
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: "3px",
        //TODO: rimuovere
        marginBottom: 5,
      }}
    >
      <Stack direction="row" alignItems="center">
        <Typography
          variant="h4"
          color="primary.main"
          sx={{ textAlign: "left" }}
          margin={2}
        >
          Hey there Human
        </Typography>
        <Box flexGrow={1} />
        <IconButton sx={{ color: "primary.main", margin: 2 }}>
          <CloseIcon />
        </IconButton>
      </Stack>

      <Box
        sx={{ width: "100%", height: "1px", backgroundColor: "primary.main" }}
      />

      <Typography sx={{ textAlign: "left" }} margin={2}>
        {text}
        {cursor}
      </Typography>
    </Card>
  );
}
