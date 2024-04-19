import { Card, CardContent, Stack, Typography } from "@mui/material";
import Header from "./Header";

export type EducationEvent = {
  title: string;
  description: string;
};

interface EducationListProps {
  events: EducationEvent[];
}
export default function EducationList({ events }: EducationListProps) {
  return (
    <Stack spacing={2}>
      {events.map((educationEvent, idx) => {
        return (
          <Card
            key={idx}
            variant="outlined"
            sx={{
              maxWidth: 345,
              borderColor: "primary.main",
              borderWidth: 1,
              borderStyle: "solid",
              borderRadius: "16px",
            }}
          >
            <CardContent>
              <Header text={educationEvent.title} />
              <Typography variant="body2">
                {educationEvent.description}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </Stack>
  );
}
