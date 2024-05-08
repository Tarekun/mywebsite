import { Box, Grid, Pagination, Typography } from "@mui/material";
import { useLanguagePack } from "optimus-bo-ui/dist/contexts/LanguagePackContext";
import { useRef, useState } from "react";
import { Swiper as SwiperClass } from "swiper";
import "swiper/css";
import { Controller, Pagination as SwiperPagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../App.css";
import Header from "../Header";
import SectionBox from "../SectionBox";
import { mainGreenRGB } from "../colors";
import { LanguagePackSchema } from "../languagePacks";

const hobbies = [
  {
    name: "Matematica",
    description:
      "La matematica (includendo anche la logica) è diventata la mia scienza preferita in assoluto e devo dire che un po' mi pento di aver studiato informatica invece. Studio matematica nel tempo libero da tempo e direi che l'argomento che ho approfondito di più in assoluto è stata la Teoria dei Tipi. Per poter ampliare l'argomento ancora di più, il mio prossimo obbiettivo è di studiare un po' di Teoria delle Categorie e Teoria delle Omotopie per poter poi comprendere per bene Homotopy Type Theory. Ho anche in programma lo studio completo dell'Analisi Reale perché un giorno vorrei poter studiare come si deve Quantum Field Theory, ma qui sto procrastinando da anni (devo iniziare a fare Teoria della Misura, Analisi 2)",
    img: "https://www.researchgate.net/publication/344704718/figure/fig1/AS:947446209327104@1602900187484/Martin-Loef-type-theory.png",
  },
  {
    name: "Moda",
    description:
      "Sono un grande appassionato di moda. Guardo sfilate e leggo articoli a riguardo da quando avevo 16 anni. Ho iniziato ad interessarmene attraverso la musica; intorno al 2016 un sacco di rapper si erano avvicinati al mondo dello streetwear e dell'alta moda e così ne venni esposto per la prima volta. Mi viene chiesto spesso, ma io tendo a non avere tanto dei marchi preferiti, quanto degli stilisti preferiti tra cui Demna Gvasalia, Martin Margiela e Raf Simons",
    img: "https://crfashionbook.com/wp-content/uploads/2022/03/martin-margiela-1602001955.jpg",
  },
  {
    name: "Musica",
    description:
      "Mi piace molto la musica, in particolare quella elettronica. Da che ne ho memoria ho sempre ascoltato musica rap, ma col tempo ho iniziato ad amare sempre di più la musica elettronica al punto che ad oggi ho imparato sia a fare il DJ che il Producer (personalmente lavoro solo con musica techno).",
    img: "https://media.discopiu.com/img/2023/3/23/986623-large-pioneer-dj-ddj-flx10.webp",
  },
  {
    name: "Web developing",
    description:
      "Mi fa davvero strano dirlo, ma ad oggi mi diverto molto a fare il software engineer e sviluppare siti web. Quando studiai per la prima volta tecnologie web iniziai ad odiarle molto in fretta, ma dopo aver superato lo scoglio iniziale devo ammettere di divertirmi molto a scrivere codice, anche frontend (che era ciò che odiavo di più) e soprattutto mi diverto molto a concertrarmi nello scrivere buon codice, modulare, elegante e facilmente riutilizzabile",
    img: "https://bairesdev.mo.cloudinary.net/blog/2023/08/How-to-Choose-the-Right-Programming-Language-for-a-New-Project.jpg?tx=w_1920,q_auto",
  },
  {
    name: "Cybersecurity",
    description:
      "Nella mia trasformazione in un vero e proprio tech-geek ho iniziato anche ad appassionarmi alla cybersecurity. Oggi uso spesso un vecchio pc su cui ho installato Kali Linux per fare pratica e possiedo un Flipper0 per cui ho scritto anche qualche app",
    img: "https://www.hackerwebsecurity.com/wp-content/uploads/2024/05/come-diventare-hacker-oggi.jpg",
  },
  {
    name: "Videogiochi",
    description:
      "Nulla di soprendente, da buon informatico sono anche un appassionato di videogiochi fin da quand'ero bambino e il sogno di svilupparne è stato ciò che mi ha convinto a studiare informatica. Purtroppo è un'industria in cui non credo affatto di voler lavorare e per questo motivo mi limito a rimanere un utente. La mia serie di videogiochi preferita è la saga di The Legend of Zelda, mentre sono piuttosto sicuro che il gioco su cui ho passato più tempo in assoluto sia The Binding of Isaac",
    img: "https://assets1.ignimgs.com/2019/06/04/legend-of-zelda-majoras-mask---button-1559683061466.jpg",
  },
];

interface HobbyBoxProps {
  hobbyIdx: number;
}
function HobbyBox({ hobbyIdx }: HobbyBoxProps) {
  const hobby = hobbies[hobbyIdx];
  return (
    <Box sx={{ width: "100%", flexShrink: 0 }}>
      <Grid container alignContent="center" alignItems="center">
        <Grid xs={12} md={5} padding={2}>
          <Box
            className="crt"
            sx={{
              position: "relative",
              borderRadius: 3,
              height: "100% ",
            }}
          >
            <Box
              className="crt"
              component="img"
              src={hobby.img}
              sx={{
                width: "100%",
                maxHeight: "100%",
                borderRadius: 3,
                boxShadow: `0px 0px 15px ${mainGreenRGB}`,
                objectFit: "cover",
              }}
            />
          </Box>
        </Grid>

        <Grid xs={12} md={7} padding={2}>
          <Header text={hobby.name} underline={false} align="right" />
          <Typography textAlign="right">{hobby.description}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default function Hobbies() {
  const [activeIdx, setActiveIdx] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);

  function switchSlide(newIndex: number) {
    setActiveIdx(newIndex);
    if (swiperRef.current) {
      swiperRef.current.slideTo(newIndex);
    }
  }

  const {
    languagePack: {
      homePage: {
        hobbies: { title, introduction },
      },
    },
  } = useLanguagePack<LanguagePackSchema>();

  return (
    <SectionBox padding={2}>
      <Header text={title} underline={false} />
      <Typography textAlign="left" marginBottom={3}>
        {introduction}
      </Typography>

      <Swiper
        onSwiper={(swiper: SwiperClass) => (swiperRef.current = swiper)}
        onSlideChange={(swiper: SwiperClass) =>
          setActiveIdx(swiper.activeIndex)
        }
        modules={[SwiperPagination, Controller]}
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
      >
        {hobbies.map((_, idx) => {
          return (
            <SwiperSlide
              key={idx}
              style={{
                display: "flex",
                alignItems: "center",
                alignContent: "center",
                height: "100%",
              }}
            >
              <HobbyBox hobbyIdx={idx} />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Box
        sx={{ width: "100%" }}
        display="flex"
        justifyContent="center"
        marginTop={2}
      >
        <Pagination
          page={activeIdx + 1}
          onChange={(_, value) => switchSlide(value - 1)}
          count={hobbies.length}
          variant="outlined"
          shape="rounded"
          color="primary"
        />
      </Box>
    </SectionBox>
  );
}
