import { Box, Grid, Pagination, Typography } from "@mui/material";
import { useLanguagePack } from "optimus-bo-ui/dist/contexts/LanguagePackContext";
import { useRef, useState } from "react";
import { Swiper as SwiperClass } from "swiper";
import "swiper/css";
import { Controller, Pagination as SwiperPagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../App.css";
import { mainGreenRGB } from "../colors";
import GradientLine from "../components/GradientLine";
import Header from "../components/Header";
import SectionBox from "../components/SectionBox";
import { LanguagePackSchema } from "../languagePacks";

const italianHobbies = [
  {
    name: "Matematica",
    description:
      "La matematica (includendo anche la logica) è diventata la mia scienza preferita in assoluto e devo dire che un po' mi pento di aver studiato informatica invece. Studio matematica nel tempo libero da tempo e che l'argomento che ho approfondito di più è stata la Teoria dei Tipi. Per poter ampliare l'argomento ancora di più, il mio prossimo obbiettivo è di studiare un po' di Teoria delle Categorie e Teoria delle Omotopie per poter poi comprendere per bene Homotopy Type Theory. Ho anche in programma lo studio completo dell'Analisi Reale perché un giorno vorrei poter studiare come si deve Quantum Field Theory, ma qui sto procrastinando da anni... Quella in figura è la teoria dei tipi di Per Erik Rutger Martin-Löf",
    img: "https://www.researchgate.net/publication/344704718/figure/fig1/AS:947446209327104@1602900187484/Martin-Loef-type-theory.png",
  },
  {
    name: "Moda",
    description:
      "Sono un grande appassionato di moda. Guardo sfilate e leggo articoli a riguardo da quando avevo 16 anni. Ho iniziato ad interessarmene attraverso la musica; intorno al 2016 un sacco di rapper si erano avvicinati al mondo dello streetwear e dell'alta moda e così ne venni esposto per la prima volta. Mi viene chiesto spesso, ma io tendo a non avere tanto dei marchi preferiti, quanto degli stilisti preferiti tra cui Demna Gvasalia, Martin Margiela, Raf Simons e Rei Kawakubo. Quelle in figura sono delle foto della mia sfilata preferita in assoluto: Margiela SS90",
    img: "https://crfashionbook.com/wp-content/uploads/2022/03/martin-margiela-1602001955.jpg",
  },
  {
    name: "Musica",
    description:
      "Mi piace molto la musica, in particolare quella elettronica. Da che ne ho memoria ho sempre ascoltato musica rap, ma col tempo ho iniziato ad amare sempre di più la musica elettronica al punto che ad oggi ho imparato sia a fare il DJ che il Producer (personalmente lavoro solo con musica techno)",
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

const englishHobbies = [
  {
    name: "Mathematics",
    description:
      "Math (including logic) has become my favourite science and I must say I'm a little bit sad of picking computer science instead. I've been studying math in my freetime for a while now and the topic I explored the most was Type Theory. To go even further I plan to study Cathegory Theory and Homotopy Theory to properly understand Homotopy Type Theory. I was also planning of completly studying Real Analysis because I'd like to study Quantum Field Theory properly eventually, but I've been procrastinating for a while now... The one in the picture is Martin-Löf's type theory.",
    img: "https://www.researchgate.net/publication/344704718/figure/fig1/AS:947446209327104@1602900187484/Martin-Loef-type-theory.png",
  },
  {
    name: "Fashion",
    description:
      "I'm a big fashion enthusiast. I've been watching runways and reading articles ever since I was 16. I started through music: around 2016 a lot of rappers got more and more involved with streetwear and high end fashion and so I was exposed to it for the first time. I get asked a lot bu I generally don't have a favourite brand, as much as I have favourite designers such as Demna Gvasalia, Martin Margiela, Raf Simons and Rei Kawakubo. The pictures are taken from my favourite runway show ever: Margiela SS90",
    img: "https://crfashionbook.com/wp-content/uploads/2022/03/martin-margiela-1602001955.jpg",
  },
  {
    name: "Music",
    description:
      "I really like music, especially electronic one. As long as I can remember I always listened to rap, but with time I started appreciate more electronic music to the point that today I thought myself to DJ and produce tracks (personally I only work with techno music)",
    img: "https://media.discopiu.com/img/2023/3/23/986623-large-pioneer-dj-ddj-flx10.webp",
  },
  {
    name: "Web developing",
    description:
      "It's really weird to, but I have to say that I really like being a software engineer and develop websites. When I first studied web developing I started to hate it very fast, but after overcoming that first obstacle, I learned to like it, even frontend (which was what I hated the most) and I really have fun focusing on writing good code, modular, elegant and easily reusable",
    img: "https://bairesdev.mo.cloudinary.net/blog/2023/08/How-to-Choose-the-Right-Programming-Language-for-a-New-Project.jpg?tx=w_1920,q_auto",
  },
  {
    name: "Cybersecurity",
    description:
      "In my tech-geek transformation I also started enjoying cybersecurity. Today I often use an old laptop I installed Kali Linux on to practice and I also own a Flipper0 I wrote some apps for",
    img: "https://www.hackerwebsecurity.com/wp-content/uploads/2024/05/come-diventare-hacker-oggi.jpg",
  },
  {
    name: "Videogames",
    description:
      "Nothing surprising, as a good software engineer I also loved videogames ever since I was a kid and the dream to develop some was what pushed me to study computer since. Unfortunately it's an industry I really don't want to work for and because of this, I'll keep on just being a user. My favourite videomgame serie is The Legend of Zeld, while I'm pretty sure the game I spent most hours on is The Binding of Isaac",
    img: "https://assets1.ignimgs.com/2019/06/04/legend-of-zelda-majoras-mask---button-1559683061466.jpg",
  },
];

interface HobbyBoxProps {
  hobbyIdx: number;
}
function HobbyBox({ hobbyIdx }: HobbyBoxProps) {
  const { selectedLocale } = useLanguagePack();

  const hobbies = selectedLocale === "it" ? italianHobbies : englishHobbies;
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
    selectedLocale,
  } = useLanguagePack<LanguagePackSchema>();
  const hobbies = selectedLocale === "it" ? italianHobbies : englishHobbies;

  return (
    <SectionBox padding={2}>
      <Header text={title} underline={false} />
      <Typography textAlign="left" marginBottom={2}>
        {introduction}
      </Typography>
      <GradientLine />

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
