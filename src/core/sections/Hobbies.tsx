import { Box, Pagination, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useLanguagePack } from "optimus-bo-ui/dist/contexts/LanguagePackContext";
import { useState } from "react";
import { LanguagePackSchema } from "../languagePacks";

const hobbies = [
  {
    name: "Moda",
    description:
      "Sono un grande appassionato di moda. Guardo sfilate e leggo articoli a riguardo da quando avevo 16 anni. Ho iniziato ad interessarmene attraverso la musica; intorno al 2016 un sacco di rapper si erano avvicinati al mondo dello streetwear e dell'alta moda e così ne venni esposto per la prima volta. Mi viene chiesto spesso, ma io tendo a non avere tanto dei marchi preferiti, quanto degli stilisti preferiti tra cui Demna Gvasalia, Martin Margiela e Raf Simons",
    img: "https://crfashionbook.com/wp-content/uploads/2022/03/martin-margiela-1602001955.jpg",
  },
  {
    name: "Matematica",
    description:
      "La matematica (e la logica) è diventata la mia scienza preferita in assoluto e devo dire che un po' mi pento di aver studiato informatica invece. Studio matematica nel tempo libero da tempo e direi che l'argomento che ho approfondito di più in assoluto è stata la Teoria dei Tipi. Per poter ampliare l'argomento ancora di più, il mio prossimo obbiettivo è di studiare un po' di Teoria delle Categorie e Teoria delle Omotopie per poter poi comprendere per bene Homotopy Type Theory. Ho anche in programma lo studio completo dell'Analisi Reale perché un giorno vorrei poter studiare come si deve Quantum Field Theory, ma qui sto procrastinando da anni (devo iniziare a fare Teoria della Misura, Analisi 2)",
    img: "",
  },
  {
    name: "Musica",
    description:
      "Mi piace molto la musica, in particolare quella elettronica. Da che ne ho memoria ho sempre ascoltato musica rap, ma col tempo ho iniziato ad amare sempre di più la musica elettronica al punto che ad oggi ho imparato sia a fare il DJ che il Producer (personalmente lavoro solo con musica techno).",
    img: "",
  },
  {
    name: "Web developing",
    description:
      "Mi fa davvero strano dirlo, ma ad oggi mi diverto molto a fare il software engineer e sviluppare siti web. Quando studiai per la prima volta tecnologie web iniziai ad odiarle molto in fretta, ma dopo aver superato lo scoglio iniziale devo ammettere di divertirmi molto a scrivere codice, anche frontend (che era ciò che odiavo di più) e soprattutto mi diverto molto a concertrarmi nello scrivere buon codice, modulare, elegante e facilmente riutilizzabile",
    img: "",
  },
  {
    name: "Cybersecurity",
    description:
      "Nella mia trasformazione in un vero e proprio tech-geek ho iniziato anche ad appassionarmi alla cybersecurity. Oggi uso spesso un vecchio pc su cui ho installato Kali Linux per fare pratica e possiedo un Flipper0 per cui ho scritto anche qualche app",
    img: "",
  },
  {
    name: "Videogiochi",
    description:
      "Nulla di soprendente, da buon informatico sono anche un appassionato di videogiochi fin da quand'ero bambino e il sogno di svilupparne è stato ciò che mi ha convinto a studiare informatica. Purtroppo è un'industria in cui non credo affatto di voler lavorare e per questo motivo mi limito a rimanere un utente. La mia serie di videogiochi preferita è la saga di The Legend of Zelda, mentre sono piuttosto sicuro che il gioco su cui ho passato più tempo in assoluto sia The Binding of Isaac",
    img: "",
  },
];

interface HobbyBoxProps {
  hobbyIdx: number;
}
function HobbyBox({ hobbyIdx }: HobbyBoxProps) {
  const hobby = hobbies[hobbyIdx];
  return (
    <Box>
      {hobby.name}
      <Grid2 container>
        <Grid2 xs={12} md={6}>
          <Box
            component="img"
            src={hobby.img}
            sx={{
              width: "100%",
              height: "auto",
              filter: "contrast(90%) saturate(80%) blur(0.5px)", // Optional: Adjust image for retro look
              "::after": {
                // Use pseudo-element for additional effects like scanlines
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage:
                  "linear-gradient(rgba(0,0,0,0) 50%, rgba(0,0,0,0.05) 50%)",
                backgroundSize: "auto 2px", // Creates fine horizontal lines
                pointerEvents: "none", // Ensures the pseudo-element does not interfere with interaction
              },
            }}
          />
        </Grid2>
        <Grid2 xs={12} md={6}>
          <Typography textAlign="right">{hobby.description}</Typography>
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default function Hobbies() {
  const [shownHobby, setShownHobby] = useState(1);

  const {
    languagePack: {
      homePage: {
        hobbies: { title, introduction },
      },
    },
  } = useLanguagePack<LanguagePackSchema>();

  return (
    <Box
      sx={{
        backgroundColor: "black",
      }}
      marginBottom={2}
    >
      <Typography
        variant="h4"
        color="primary.main"
        sx={{ textAlign: "left" }}
        margin={2}
      >
        {title}
      </Typography>
      <Typography>{introduction}</Typography>

      {/*convert between 0 and 1 based indexing*/}
      <HobbyBox hobbyIdx={shownHobby - 1} />

      <Pagination
        page={shownHobby}
        onChange={(_, value) => setShownHobby(value)}
        count={hobbies.length}
        variant="outlined"
        shape="rounded"
        color="primary"
      />
    </Box>
  );
}
