import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import AlignVerticalBottomIcon from "@mui/icons-material/AlignVerticalBottom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PublicIcon from "@mui/icons-material/Public";
import CodeIcon from "@mui/icons-material/Code";
import MYPIC from "./../../assets/mypic.jpeg";

const Home = () => {
  return (
    <Container maxWidth="xl" sx={{ pb: 8 }}>
    <Box
      sx={{
        display: "flex",
        gap: 10,
        flexWrap: {
          xs: "wrap",
          sm: "wrap",
          md: "nowrap",
          lg: "nowrap",
          xl: "nowrap",
        },
        alignItems: "center",
      }}
      component="div"
      variant="div"
    >
      <Typography component="div" variant="div">
        <h1>Hi, I'm Muhammad Moiz Siddique</h1>
        <Typography
          sx={{
            textAlign: "justify",
          }}
          component="div"
          variant="div"
        >
          Passion for working on full-stack apps and l am always looking for
          opportunities to grow as an engineer. I have utilised my interpersonal
          skills and detail-oriented nature to continue to improve myself and
          those whom I work with. My specialties include problem-solving,
          quickly learning new skills and programming languages, and efficient
          communication in a team environment. I have experience using
          TypeScript JavaScript, Node.js, Angular JS, React.js, Stencil JS,
          HTML, CSS, Bootstrap, Material and others. My career objective is to
          employ my skills in the software engineering path while continuing to
          soak up as much knowledge and practice as I can to perfect my craft.
        </Typography>
        <Typography component="div" variant="div">
          <List>
            <ListItem disablePadding>
              <ListItemIcon>
                <LinkedInIcon />
              </ListItemIcon>
              <ListItemText>
                <a href="https://www.linkedin.com/in/muhammad-moiz-siddique-74419b166/">
                  https://www.linkedin.com/in/muhammad-moiz-siddique-74419b166/
                </a>
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <GitHubIcon />
              </ListItemIcon>
              <ListItemText>
                <a href="https://github.com/MuhammadMoiz200099">
                  https://github.com/MuhammadMoiz200099
                </a>
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <PublicIcon />
              </ListItemIcon>
              <ListItemText>
                <a href="https://muhammadmoiz200099.github.io/muhammad_moiz_siddique/">
                  https://muhammadmoiz200099.github.io/muhammad_moiz_siddique/
                </a>
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CodeIcon />
              </ListItemIcon>
              <ListItemText>
                <a href="https://www.hackerrank.com/JerryMMoiz2000">
                  https://www.hackerrank.com/JerryMMoiz2000
                </a>
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <AlignVerticalBottomIcon />
              </ListItemIcon>
              <ListItemText primary="Expericens: 3 years professional working experices" />
            </ListItem>
            <ListItem
              disablePadding
              sx={{ display: "flex", alignItems: "flex-start" }}
            >
              <ListItemIcon>
                <AlignVerticalBottomIcon />
              </ListItemIcon>
              <Typography
                component="div"
                variant="div"
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <ListItemText primary="Experties: " />
                <Typography component="div" variant="div" sx={{ pl: 3 }}>
                  <ListItemText primary="- Javascript" />
                  <ListItemText primary="- Typescript" />
                  <ListItemText primary="- React JS" />
                  <ListItemText primary="- Angular JS" />
                  <ListItemText primary="- Node JS" />
                  <ListItemText primary="- Nest JS" />
                  <ListItemText primary="- Mongo DB" />
                  <ListItemText primary="- PostgreSQL" />
                  <ListItemText primary="- MSSQL" />
                  <ListItemText primary="- React Native" />
                  <ListItemText primary="- Python" />
                </Typography>
              </Typography>
            </ListItem>
          </List>
        </Typography>
      </Typography>
      <Typography component="div" variant="div">
        <img src={MYPIC} alt="my pic" height={500} width={400} loading="lazy" />
      </Typography>
    </Box>
    </Container>
  );
};

export default Home;
