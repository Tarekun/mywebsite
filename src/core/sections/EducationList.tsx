import { Box, Card, Stack, Typography } from "@mui/material";
import { mainGreenRGB } from "../colors";
import Header from "../components/Header";

export type EducationEvent = {
  title: string;
  description: string;
};

interface EducationListProps {
  events: EducationEvent[];
}
export default function EducationList({ events }: EducationListProps) {
  return (
    <Box
      padding={5}
      sx={{
        position: "relative",
        width: "100%",
        minHeight: 300,
        background: `url(https://i.pinimg.com/originals/35/58/0d/35580d64b9b883fd0e0678595fc2aefd.gif) no-repeat center center`,
        backgroundSize: "cover",
        overflow: "hidden",
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0), rgba(0,0,0,0.8))",
          pointerEvents: "none",
        },
        // borderLeft: 1,
        // borderRight: 1,
        // borderColor: mainGreenRGB,
      }}
    >
      <Stack
        spacing={2}
        sx={{
          width: "100%",
          //TODO: set the max width so the cards aren't too spread apart
          // maxWidth:
          position: "relative",
          height: "100%",
          zIndex: 1, // Ensure content is above background
          display: "flex",
        }}
      >
        {events.map((educationEvent, idx) => {
          const floatRight = idx % 2 === 0;
          return (
            <Box
              key={idx}
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: floatRight ? "flex-end" : "flex-start",
              }}
            >
              <Card
                variant="outlined"
                sx={{
                  maxWidth: 345,
                  borderColor: "primary.main",
                  borderWidth: 1,
                  borderStyle: "solid",
                  borderRadius: "16px",
                  padding: 3,
                  boxShadow: `${floatRight ? 4 : -4}px 4px 12px ${mainGreenRGB}`,
                }}
              >
                <Header text={educationEvent.title} variant="h5" />
                <Typography variant="body2" align="left" marginTop={2}>
                  {educationEvent.description}
                </Typography>
              </Card>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
}
