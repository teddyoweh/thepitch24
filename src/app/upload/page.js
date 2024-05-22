'use client';
import '../styles/landing.scss';
import {Box, Button, Flex, Icon, Input, Text, Textarea} from '@chakra-ui/react';
import React, {useRef, useState} from 'react';
import UploadIcon from '../assets/icons/uploadIcon';

const text =
  'The man is wearing a black short-sleeve t-shirt, a silver necklace, and black gloves while he decorates the cake.';

const Upload = () => {
  const [show, setShow] = useState(false);
  const [url, setUrl] = useState('');
  const [state, setState] = useState('');
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
    // <Box
    //   h='60vh'
    //   display={'flex'}
    //   justifyContent={'center'}
    //   alignItems={'center'}
    // >
    //   <Box width='271px'>
    //     <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
    //       <Box
    //         className='link'
    //         onClick={() => setShow(true)}
    //         fontFamily={'GT America'}
    //       >
    //         Link
    //       </Box>
    //     </Box>
    //     {show && (
    //       <Input
    //         outline='none'
    //         border='1px solid #141414'
    //         mt='1rem'
    //         width='270px'
    //         height='40px'
    //       />
    //     )}
    //     <Text
    //       mt='.5rem'
    //       cursor='pointer'
    //       fontFamily={'GT America'}
    //       mx='auto'
    //       w='115px'
    //     >
    //       Or{' '}
    //       <label htmlFor='browse'>
    //         <Text as='span' color='blue'>
    //           browse files
    //         </Text>
    //       </label>
    //       <Input type='file' id='browse' display={'none'} />
    //     </Text>
    //   </Box>
    // </Box>
    <Box>
      <Flex
        mt='100px'
        align='center'
        justify='center'
        direction='column'
        mb='100px'
      >
        {url ? (
          <video
            controlsList='nodownload'
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
          mt='1rem'
          bg='#b77738'
          color={'white'}
          onClick={handleChoose}
          px='7'
        >
          {!url ? 'Select file' : 'Change file'}
        </Button>
        <input
          ref={inputRef}
          type='file'
          onChange={handleFileChange}
          accept='.mp4'
          style={{
            display: 'none',
          }}
        />
        <Textarea
          outline='none'
          border='1px solid #141414'
          mt='1rem'
          width='500px'
          height='120px'
          fontFamily={'GT America'}
        />
        <Button
          color='white'
          width='150px'
          bg='#000000'
          fontFamily={'GT America'}
          mt='1rem'
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
        <Text w='500px' mt='1rem' fontFamily={'GT America'}>
          {state}
        </Text>
      </Flex>
    </Box>
  );
};

export default Upload;
