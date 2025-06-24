'use client';
import PropTypes from 'prop-types';

import { useEffect, useRef, useState } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion, useScroll, useTransform } from 'framer-motion';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import SvgIcon from '@/components/SvgIcon';
import { SECTION_COMMON_PY } from '@/utils/constant';
import { getBackgroundDots } from '@/utils/getBackgroundDots';

// @assets
import Wave from '@/images/graphics/Wave';

// threshold - adjust threshold as needed
const options = { root: null, rootMargin: '0px', threshold: 0.6 };

/***************************  HERO - 17  ***************************/

export default function Hero17({ chip, headLine, captionLine, primaryBtn, videoSrc, videoThumbnail, listData }) {
  const theme = useTheme();
  const boxRadius = { xs: 24, sm: 32, md: 40 };

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const scale = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.4, 0.6], [0.9, 0.92, 0.94, 0.96, 1]);

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Handle video play/pause based on intersection with the viewport
  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (videoRef.current && !isPlaying) {
            videoRef.current
              .play()
              .then(() => {
                setIsPlaying(true);
              })
              .catch((error) => {
                console.error('Autoplay was prevented:', error);
              });
          }
        } else {
          if (videoRef.current && isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    const videoElement = videoRef.current;

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, [isPlaying]);

  return (
    <>
      <Box
        sx={{
          height: { xs: 592, sm: 738, md: 878 },
          position: 'absolute',
          top: 0,
          left: 0,
          width: 1,
          zIndex: -1,
          borderBottomLeftRadius: boxRadius,
          borderBottomRightRadius: boxRadius,
          background: getBackgroundDots(theme.palette.grey[300], 60, 35),
          bgcolor: 'grey.100'
        }}
      ></Box>
     
    </>
  );
}

Hero17.propTypes = {
  chip: PropTypes.object,
  headLine: PropTypes.string,
  captionLine: PropTypes.string,
  primaryBtn: PropTypes.any,
  videoSrc: PropTypes.string,
  videoThumbnail: PropTypes.string,
  listData: PropTypes.array
};
