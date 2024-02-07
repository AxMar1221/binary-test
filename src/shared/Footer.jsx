import { useEffect, useState } from "react";
import { GitHub } from "@mui/icons-material";
import { Avatar, Box, IconButton, Link, Typography } from "@mui/material";

function Copyright() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(intervalId);
  }, []);

  // Obtener la fecha y hora en formato legible
  const formattedDate = currentDateTime.toLocaleDateString();
  const formattedTime = currentDateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <>
    <Typography variant="h6" color="error" align="center">
      {formattedDate} {formattedTime}
    </Typography>
    <Typography variant="h5" color="primary" align="center">
      {"Copyright © "}
      <IconButton>
        <Avatar
          alt="Tachi GitHub"
          src="https://avatars.githubusercontent.com/u/85906328?v=4"
          sx={{ width: 45, height: 45 }}
        />
      </IconButton>
      <Link
        underline="none"
        color="inherit"
        href="https://github.com/AxMar1221"
      >
        Tachidito <GitHub />
      </Link>{" "}
      {"."}
    </Typography>
    </>
  );
}

export const Footer = () => {
  return (
    <Box sx={{ color: "primary", p: 2 }} component="footer">
      <Copyright />
    </Box>
  );
};
