import React from "react";
import useGetData from "../sources/useGetData";
import { useEffect } from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import dice from "../images/icon-dice.svg";
import desk from "../images/img-desk.svg";
import mob from "../images/img-mob.svg";
const Main = () => {
  const { data, getAdvice, id, loading, setloading } = useGetData();
  useEffect(() => {
    getAdvice();
  }, []);

  const getData = async () => {
    setloading(true);
    await getAdvice();
    setloading(false);
  };

  return (
    <div>
      <Container
        maxWidth="sm"
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        {!loading ? (
          <Card
            sx={{
              padding: 4,
              bgcolor: "hsl(217, 19%, 24%)",
              position: "relative",
              overflow: "visible",
              borderRadius: "20px",
            }}
          >
            <CardContent
              sx={{
                background: `url(${desk}) no-repeat  bottom`,
                "@media (max-width:600px)": {
                  background: `url(${mob}) no-repeat bottom`,
                },
                p: 5,
                mb: 5,
              }}
            >
              <Typography
                fontFamily="unset"
                mb={1}
                fontSize={15}
                color="hsl(150, 100%, 66%)"
                letterSpacing={3}
              >
                ADVICE # {id}
              </Typography>
              <Typography
                fontSize={28}
                color="hsl(193, 38%, 86%)"
                fontWeight="bold"
                pt={2}
                pb={3}
                fontFamily="unset"
              >
                “{data}”
              </Typography>
            </CardContent>

            <div
              onClick={getData}
              style={{
                position: "absolute",
                top: "100%",
                left: " 50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Avatar
                sx={{
                  bgcolor: "hsl(150, 100%, 66%)",
                  ":hover": {
                    cursor: "pointer",
                    boxShadow: " 0 0 50px 1px hsl(150, 100%, 66%)",
                  },

                  p: 1.5,
                }}
              >
                <img src={dice} />
              </Avatar>
            </div>
          </Card>
        ) : (
          <Box sx={{ display: "flex", p: 5, mb: 5 }}>
            <CircularProgress sx={{ color: "hsl(150, 100%, 66%)" }} />
          </Box>
        )}
      </Container>
    </div>
  );
};

export default Main;
