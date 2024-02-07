import React, { useState, useEffect } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";
import { frases } from "../../frases";

export const TestPage = () => {
  const nameUp = localStorage.getItem("nameUp");
  const [randomPhrase, setRandomPhrase] = useState("");
  const [binaryCodeText, setBinaryCodeText] = useState("");
  const [binaryCodeNumber, setBinaryCodeNumber] = useState("");
  const [textResult, setTextResult] = useState("");
  const [numberResult, setNumberResult] = useState("");
  const [isTextButtonDisabled, setIsTextButtonDisabled] = useState(false);
  const [isNumberButtonDisabled, setIsNumberButtonDisabled] = useState(false);
  const [isPageReloaded, setIsPageReloaded] = useState(false);

  useEffect(() => {
    getRandomPhrase();
  }, []);

    useEffect(() => {
    // Verificar si la página ha sido recargada
    if (window.performance && window.performance.navigation.type === 1) {
      setIsPageReloaded(true);
    }
  }, []);

  const getRandomPhrase = () => {
    const randomIndex = Math.floor(Math.random() * frases.length);
    setRandomPhrase(frases[randomIndex]);
  };

  const handleBinaryTextChange = (event) => {
    const sanitizedInput = event.target.value.replace(/[^01\s]/g, "");
    setBinaryCodeText(sanitizedInput);
  };

  const handleBinaryNumberChange = (event) => {
    const sanitizedInput = event.target.value.replace(/[^01\s]/g, "");
    setBinaryCodeNumber(sanitizedInput);
  };

  const convertBinaryToText = () => {
    const binaryChunks = binaryCodeText.split(/\s+/);
    const textResult = binaryChunks
      .map((binaryChunk) => {
        const decimalValue = parseInt(binaryChunk, 2);
        return String.fromCharCode(decimalValue);
      })
      .join("");
    setTextResult(textResult);
    setIsTextButtonDisabled(true);
  };

  const convertBinaryToNumber = () => {
    const binaryChunks = binaryCodeNumber.split(/\s+/);
    const numberResult = binaryChunks
      .map((binaryChunk) => parseInt(binaryChunk, 2))
      .join("");
    setNumberResult(numberResult);
    setIsNumberButtonDisabled(true);
  };

  return (
    <>
      <Container maxWidth="sm">
        {isPageReloaded && (
          <Typography variant="subtitle1" color="secondary" gutterBottom>
            La página ha sido recargada.
          </Typography>
        )}
        <Typography variant="h4" align="center" color="primary" gutterBottom>
          ¡Hola, {nameUp}!
        </Typography>
        <Typography variant="h5" align="center" color="error" gutterBottom>
          {randomPhrase}
        </Typography>
        <TextField
          multiline
          label="Código binario para texto"
          variant="outlined"
          fullWidth
          value={binaryCodeText}
          onChange={handleBinaryTextChange}
          inputProps={{ style: { maxHeight: "250px", overflowY: "auto" } }}
          onPaste={(e) => e.preventDefault()}
          onCopy={(e) => e.preventDefault()}
          style={{ marginBottom: 16 }}
        />
        <Button
          variant="contained"
          size="small"
          onClick={convertBinaryToText}
          disabled={isTextButtonDisabled}
        >
          Convertir
        </Button>
        <Typography variant="body1" gutterBottom>
          Resultado: {textResult}
        </Typography>
        <Typography variant="h6" align="center" color="error" gutterBottom>
          Escribe tu fecha de nacimiento
        </Typography>
        <TextField
          multiline
          label="Código binario para números"
          variant="outlined"
          fullWidth
          value={binaryCodeNumber}
          onChange={handleBinaryNumberChange}
          inputProps={{ style: { maxHeight: "150px", overflowY: "auto" } }}
          onPaste={(e) => e.preventDefault()}
          onCopy={(e) => e.preventDefault()}
          style={{ margin: "16px 0" }}
        />
        <Button
          variant="contained"
          size="small"
          onClick={convertBinaryToNumber}
          disabled={isNumberButtonDisabled}
        >
          Convertir
        </Button>
        <Typography variant="body1" gutterBottom>
          Resultado: {numberResult}
        </Typography>
      </Container>
    </>
  );
};
