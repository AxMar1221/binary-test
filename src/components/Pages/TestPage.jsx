import React, { useState } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";

export const TestPage = () => {
  const nameUp = localStorage.getItem("nameUp");
  const [binaryCodeText, setBinaryCodeText] = useState("");
  const [textResult, setTextResult] = useState("");
  const [binaryCodeNumber, setBinaryCodeNumber] = useState("");
  const [numberResult, setNumberResult] = useState("");

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
  };

  const convertBinaryToNumber = () => {
    const binaryChunks = binaryCodeNumber.split(/\s+/);
    const numberResult = binaryChunks
      .map((binaryChunk) => parseInt(binaryChunk, 2))
      .join("");
    setNumberResult(numberResult);
  };

  return (
    <>
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" color="primary" gutterBottom>
          ¡Hola, {nameUp}!
        </Typography>
        <TextField
          multiline
          label="Código binario para texto"
          variant="outlined"
          fullWidth
          value={binaryCodeText}
          onChange={handleBinaryTextChange}
          onPaste={(e) => e.preventDefault()}
          onCopy={(e) => e.preventDefault()}
          style={{ marginBottom: 16 }}
        />
        <Button variant="contained" onClick={convertBinaryToText}>
          Convertir
        </Button>
        <Typography variant="body1" gutterBottom>
          Resultado: {textResult}
        </Typography>
        <TextField
          multiline
          label="Código binario para números"
          variant="outlined"
          fullWidth
          value={binaryCodeNumber}
          onChange={handleBinaryNumberChange}
          onPaste={(e) => e.preventDefault()}
          onCopy={(e) => e.preventDefault()}
          style={{ margin: "16px 0" }}
        />
        <Button variant="contained" onClick={convertBinaryToNumber}>
          Convertir
        </Button>
        <Typography variant="body1" gutterBottom>
          Resultado: {numberResult}
        </Typography>
      </Container>
    </>
  );
};
