import { Typography } from "@mui/material";

interface HeaderProps {
  text: string;
}
export default function Header({ text }: HeaderProps) {
  return <Typography variant="h4">{text}</Typography>;
}
