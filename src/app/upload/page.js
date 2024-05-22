"use client";
import "../styles/landing.scss";
import {
  Box,
  Button,
  Flex,
  Icon,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
// import UploadIcon from "../assets/icons/uploadIcon";
import TextResult from "../components/TextResult";

const text =
  "The man is wearing a black short-sleeve t-shirt, a silver necklace, and black gloves while he decorates the cake.";

const Upload = () => {
  const [show, setShow] = useState(false);
  const [url, setUrl] = useState("");
  const [state, setState] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setUrl(URL?.createObjectURL(file));
  };
  const handleChoose = () => {
    inputRef.current.click();
  };

  return (
    <Box>
      <Flex
        mt="100px"
        align="center"
        justify="center"
        direction="column"
        mb="100px"
      >
        {url ? (
          <video
            className="video-prompt"
            controlsList="nodownload"
            // control
            //make it play on click and if playing then pause
            onClick={(e) => {
              e.preventDefault();
              e.target.paused ? e.target.play() : e.target.pause();
            }}
            // controls

            src={url}
          />
        ) : null}
        <Button
          mt="1rem"
          bg="#b77738"
          color={"white"}
          onClick={handleChoose}
          px="7"
        >
          {!url ? "Select file" : "Change file"}
        </Button>
        <input
          ref={inputRef}
          type="file"
          onChange={handleFileChange}
          accept=".mp4"
          style={{
            display: "none",
          }}
        />
        <input
          type="text"
          className="prompt-input"
          placeholder="Write a prompt"
        />
        {/* <Textarea
          outline='none'
          border='1px solid #141414'
          mt='1rem'
          width='500px'
          height='120px'
          fontFamily={'GT America'}
        /> */}
        <Button
          color="white"
          width="150px"
          bg="#000000"
          fontFamily={"GT America"}
          mt="1rem"
          isLoading={loading}
          onClick={() => {
            setLoading(true);
            setTimeout(() => {
              setState(text);
              setLoading(false);
            }, 4000);
          }}
        >
          Analyze
        </Button>
        <TextResult text={state} delay={50} />
      </Flex>
    </Box>
  );
};

export default Upload;
