import React, { useState } from "react";
import { TextField, Button, Typography, Container } from "@mui/material";
import { emails } from "../../data";
import { useNavigate } from "react-router-dom";
import { TestPage } from "./TestPage";

export const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [test, setTest] = useState(false);
  const navigate = useNavigate();

  const name = email.split('.')[0];
  const nameUp = name.charAt(0).toUpperCase() + name.slice(1);
  
  const onLogin = () => {
    localStorage.setItem("nameUp", nameUp)
    if (emails.includes(email)) {
      navigate("/test", {
        replace: true,
      });

    } else {
      setError("Correo electrónico no válido");
    }
  };

  const onClear = () => {
    setEmail("");
    setError("");
    setTest(false);
  };

  const tab = <>&nbsp;&nbsp;</>;

  return (
    <Container maxWidth="sm">
      {test ? (
        <TestPage /> 
        ) : (
        <>
          <Typography variant="h4" align="center" gutterBottom>
            Valida tu email
          </Typography>
          <TextField
            label="Correo Electrónico"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && <Typography color="error">{error}</Typography>}

          <Button variant="contained" color="primary" onClick={onLogin}>
            Validar
          </Button>
          {tab}
          <Button variant="contained" color="error" onClick={onClear}>
            Borrar
          </Button>
        </>
      )}
    </Container>
  );
};
