import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Tooltip,
  Typography,
} from "@mui/material";
import { useDeviceFeatures } from "optimus-bo-ui";
import { useLanguagePack } from "optimus-bo-ui/dist/contexts/LanguagePackContext";
import { PropsWithChildren, useState } from "react";
import Header from "../components/Header";
import SectionBox from "../components/SectionBox";
import Typedography from "../components/Typedography";
import { LanguagePackSchema } from "../languagePacks";

interface DirectoryItemProps {
  label: string;
  tooltip: string;
}
function DirectoryItem({ label, tooltip }: DirectoryItemProps) {
  return (
    <ListItem>
      <Tooltip title={tooltip}>
        <ListItemButton disableRipple sx={{ cursor: "default" }}>
          <SubdirectoryArrowRightIcon sx={{ marginRight: 1 }} />
          <ListItemText primary={label} />
        </ListItemButton>
      </Tooltip>
    </ListItem>
  );
}

interface FileItemProps {
  label: string;
  tooltip: string;
  onClick: () => void;
}
function FileItem({ label, tooltip, onClick }: FileItemProps) {
  return (
    <ListItem>
      <Tooltip title={tooltip}>
        <ListItemButton
          sx={{ marginLeft: 4 }}
          onClick={() => {
            onClick();
          }}
        >
          <InsertDriveFileIcon sx={{ marginRight: 1, color: "primary.main" }} />
          <ListItemText primary={label} sx={{ color: "primary.main" }} />
        </ListItemButton>
      </Tooltip>
    </ListItem>
  );
}

function ListWrapper({ children }: PropsWithChildren) {
  const { isMobile } = useDeviceFeatures();
  const {
    languagePack: {
      homePage: { projects },
    },
  } = useLanguagePack<LanguagePackSchema>();

  return isMobile ? (
    <Accordion
      sx={{
        marginLeft: 2,
        marginRight: 2,
      }}
    >
      <AccordionSummary
        sx={{ backgroundColor: "primary.main" }}
        expandIcon={<ExpandMoreIcon sx={{ color: "black" }} />}
      >
        <Typography variant="h6" color="black">
          {projects.accordionLabel}
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          borderBottom: 1,
          borderColor: "primary.main",
          borderRadius: 0,
        }}
      >
        {children}
      </AccordionDetails>
    </Accordion>
  ) : (
    <>{children}</>
  );
}

const coworkingLink = "https://www.coworking-casalab.it/";
const impactLink =
  "https://indico.cern.ch/event/806726/contributions/3357440/attachments/1812894/2961651/IMPACT.pdf";
const optimusUiLink = "https://github.com/Tarekun/optimus-bo-ui";

export default function Projects() {
  const {
    languagePack: {
      homePage: { projects },
    },
  } = useLanguagePack<LanguagePackSchema>();

  const [project, setProject] = useState(projects.defaultDescription);
  const [link, setLink] = useState<string | null>(null);

  return (
    <SectionBox>
      <Box padding={2}>
        <Header text={projects.sectionTitle} />
      </Box>

      <Grid container>
        <Grid item xs={12} md={3}>
          <ListWrapper>
            <List dense sx={{ marginLeft: 0 }}>
              <DirectoryItem
                label={projects.freeTimeLabel}
                tooltip={projects.freeTimeTooltip}
              ></DirectoryItem>
              <FileItem
                label={projects.selfHostingLabel}
                tooltip={projects.selfHostingTooltip}
                onClick={() => {
                  setProject(projects.selfHostingDescription);
                  setLink(null);
                }}
              ></FileItem>
              <FileItem
                label={projects.optimusUiLabel}
                tooltip={projects.optimusUiTooltip}
                onClick={() => {
                  setProject(projects.optimusUiDescription);
                  setLink(optimusUiLink);
                }}
              ></FileItem>

              <DirectoryItem
                label={projects.employmentLabel}
                tooltip={projects.employmentTooltip}
              ></DirectoryItem>
              <FileItem
                label={projects.impactTitle}
                tooltip={projects.impactTooltip}
                onClick={() => {
                  setProject(projects.impactDescription);
                  setLink(impactLink);
                }}
              ></FileItem>
              <FileItem
                label={projects.pmTitle}
                tooltip={projects.pmTooltip}
                onClick={() => {
                  setProject(projects.pmDescription);
                  setLink(null);
                }}
              ></FileItem>

              <DirectoryItem
                label={projects.optimusLabel}
                tooltip={projects.optimusTooltip}
              ></DirectoryItem>
              <FileItem
                label={projects.coworkingTitle}
                tooltip={projects.coworkingTooltip}
                onClick={() => {
                  setProject(projects.coworkingDescription);
                  setLink(coworkingLink);
                }}
              ></FileItem>
            </List>
          </ListWrapper>
        </Grid>

        <Grid item xs={12} md={9} padding={2}>
          <Typedography
            fullText={project}
            showCursor
            typographyProps={{ textAlign: "right" }}
            typingIntervalMs={10}
          />
          {link !== null && (
            <Typography textAlign="right" marginTop={2}>
              <Link href={link} target="_blank" rel="noopener noreferrer">
                {projects.moreLinkLabel}
              </Link>
            </Typography>
          )}
        </Grid>
      </Grid>
    </SectionBox>
  );
}
