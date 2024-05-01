import { Typography, TypographyProps, keyframes, styled } from "@mui/material";
import { useEffect, useState } from "react";

export const defaultTypingIntervalMs = 25;
export const defaultCursor = "█";

const blinkAnimation = keyframes`
  from, to { opacity: 1; }
  50% { opacity: 0; }
`;

const BlinkingCursor = styled("span")(() => ({
  animation: `${blinkAnimation} 1s step-end infinite`,
}));

interface CursorProps {
  blink?: boolean;
  char?: string;
}
function Cursor({ blink = true, char = defaultCursor }: CursorProps) {
  return blink ? <BlinkingCursor>{char}</BlinkingCursor> : <>{char}</>;
}

interface TypedographyProps {
  fullText: string;
  showCursor?: boolean;
  cursor?: string;
  blinkCursor?: boolean;
  typingIntervalMs?: number;
  typographyProps?: TypographyProps;
}
export default function Typedography({
  fullText,
  showCursor = false,
  cursor,
  blinkCursor = true,
  typingIntervalMs = defaultTypingIntervalMs,
  typographyProps = {},
}: TypedographyProps) {
  const [typedText, setTypedText] = useState("");
  const [idx, setIdx] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (idx >= fullText.length) {
      setIsTyping(false);
    }

    if (idx < fullText.length) {
      const timeoutId = setTimeout(() => {
        setTypedText(typedText + fullText.charAt(idx));
        setIdx(idx + 1);
      }, typingIntervalMs);

      // since this branch returns it must be executed last
      return () => clearTimeout(timeoutId);
    }

    //TODO: address warning
  }, [idx, typedText]);

  // if the text to be displayed changes restarts the typing
  useEffect(() => {
    setTypedText("");
    setIdx(0);
    setIsTyping(true);
  }, [fullText]);

  return (
    <Typography {...typographyProps}>
      {typedText}
      {showCursor ? (
        <Cursor blink={blinkCursor && !isTyping} char={cursor} />
      ) : null}
    </Typography>
  );
}
