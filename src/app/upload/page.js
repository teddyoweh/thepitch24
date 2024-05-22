'use client';
import '../styles/landing.scss';
import {Box, Button, Flex, Icon, Input, Text, Textarea} from '@chakra-ui/react';
import React, {useRef, useState} from 'react';
import UploadIcon from '../assets/icons/uploadIcon';
import TextResult from '../components/TextResult';

const text =
  "The image sequence displays the step-by-step process of decorating a multi-tiered cake by a cake artist. Here's a detailed breakdown:\n\n1. **Initial Preparation:**\n   - The artist begins by stacking layers of cake, spreading a layer of frosting between each one.\n   - After assembling the layers, the cake is covered with a crumb coat to seal in the crumbs.\n\n2. **Adding Initial Layers:**\n   - The cake is then smoothed out with a thicker layer of frosting and covered entirely in chocolate frosting.\n\n3. **Applying Fondant:**\n   - The artist rolls out and applies black fondant over the cake, smoothing it down to cover the entire surface.\n   - A quilted pattern is impressed into the fondant using specialized tools.\n\n4. **Adding Details:**\n   - Fondant decorations, including pink bows, are added to the cake.\n   - The artist intricately adds a pattern and additional decorative details to enhance the design.\n\n5. **Creating the Middle Tier:**\n   - A golden-yellow fondant is rolled out and applied to a new tier, which is then stacked on top of the base cake.\n\n6. **Top Tier Decoration:**\n   - The top tier is decorated with black fondant, stars, and splatters of gold for a celestial effect.\n   - Black fondant is used to create a dripping effect on the top tier.\n\n7. **Final Assembly:**\n   - All tiers are carefully stacked, and final decorative touches are added.\n   - The cake features a combination of gold and black colors with intricate patterns and designs.\n   - The topper, resembling geometric black shapes, is placed on top to complete the look.\n\n8. **Finished Cake:**\n   - The end result is an elegant, multi-tiered cake with rich decorations in gold and black, complete with intricate detailing and refined texture work.\n\nThis sequence showcases the skill and creativity involved in professional cake decorating.";

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
        <TextResult text={state} delay={50} />
      </Flex>
    </Box>
  );
};

export default Upload;
