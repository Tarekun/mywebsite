import { Box, Card, Stack, Typography } from "@mui/material";
import Header from "../Header";

export type EducationEvent = {
  title: string;
  description: string;
};

interface EducationListProps {
  events: EducationEvent[];
}
export default function EducationList({ events }: EducationListProps) {
  return (
    <Stack
      spacing={2}
      sx={{
        width: "100%",
        //TODO: set the max width so the cards aren't too spread apart
        // maxWidth:
      }}
    >
      {events.map((educationEvent, idx) => {
        return (
          <Box
            key={idx}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: idx % 2 === 0 ? "flex-start" : "flex-end",
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
              }}
            >
              <Header text={educationEvent.title} />
              <Typography variant="body2" align="left" marginTop={2}>
                {educationEvent.description}
              </Typography>
            </Card>
          </Box>
        );
      })}
    </Stack>
  );
}
