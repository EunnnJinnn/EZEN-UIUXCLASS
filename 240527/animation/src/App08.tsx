import React, { useState } from "react";
import styled from "styled-components";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useScroll,
} from "framer-motion";

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  position: absolute;
  top: 100px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
`;

const box = {
  initial: {
    x: 500,
    opacity: 0,
    scale: 0,
  },
  visivle: {
    x: 0,
    opacity: 1,
    scale: 1,
    trantition: {
      duration: 0.5,
    },
  },
  exits: {
    x: -500,
    opacity: 0,
    scale: 0,
    trantition: {
      duration: 0.5,
    },
  },
};

function App() {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const prevPlease = () => {
    setVisible((prev) => (prev === 1 ? 10 : prev - 1));
  };
  const nextPlease = () => {
    setVisible((prev) => (prev === 10 ? 1 : prev + 1));
  };
  return (
    <Wrapper>
      <AnimatePresence>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) =>
          i === visible ? (
            <Box
              key={visible}
              variants={box}
              initial="initial"
              animate="visible"
              exit="exits"
            >
              {visible}
            </Box>
          ) : null
        )}
      </AnimatePresence>
      <Buttons>
        <button onClick={prevPlease}>PREV</button>
        <button onClick={nextPlease}>NEXT</button>
      </Buttons>
    </Wrapper>
  );
}

export default App;
