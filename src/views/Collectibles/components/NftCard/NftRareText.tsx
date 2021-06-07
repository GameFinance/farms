import React from 'react'
import { Text } from 'uikit'
import styled, { keyframes } from 'styled-components'
import { NftRareType } from 'config/constants/types'

interface NftRareTextProps {
  rare: NftRareType
}

const AnimateText = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`

const BaseRareTextAccent = styled.span`
  text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
  animation: ${AnimateText} 2s linear infinite;
`

const LRTextAccent = styled(BaseRareTextAccent)`
  background: linear-gradient(
    10deg,
    rgba(255, 0, 0, 1) 0%,
    rgba(255, 154, 0, 1) 10%,
    rgba(208, 222, 33, 1) 20%,
    rgba(79, 220, 74, 1) 30%,
    rgba(63, 218, 216, 1) 40%,
    rgba(47, 201, 226, 1) 50%,
    rgba(28, 127, 238, 1) 60%,
    rgba(95, 21, 242, 1) 70%,
    rgba(186, 12, 248, 1) 80%,
    rgba(251, 7, 217, 1) 90%,
    rgba(255, 0, 0, 1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  background-size: 300% 300%;
`

const SRTextAccent = styled(BaseRareTextAccent)`
  background: linear-gradient(
    10deg,
    rgba(239, 187, 63, 1) 0%,
    rgba(252, 219, 94, 1) 10%,
    rgba(248, 212, 95, 1) 20%,
    rgba(253, 222, 96, 1) 30%,
    rgba(248, 219, 128, 1) 40%,
    rgba(253, 226, 226, 1) 50%,
    rgba(248, 219, 128, 1) 60%,
    rgba(253, 222, 96, 1) 70%,
    rgba(248, 212, 95, 1) 80%,
    rgba(252, 219, 94, 1) 90%,
    rgba(239, 187, 63, 1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  background-size: 300% 300%;
`

const RTextAccent = styled(BaseRareTextAccent)`
  background: linear-gradient(
    10deg,
    rgba(178, 174, 200, 1) 0%,
    rgba(186, 183, 204, 1) 10%,
    rgba(194, 191, 209, 1) 20%,
    rgba(202, 199, 213, 1) 30%,
    rgba(210, 208, 218, 1) 40%,
    rgba(218, 217, 223, 1) 50%,
    rgba(210, 208, 218, 1) 60%,
    rgba(202, 199, 213, 1) 70%,
    rgba(194, 191, 209, 1) 80%,
    rgba(186, 183, 204, 1) 90%,
    rgba(178, 174, 200, 1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  background-size: 300% 300%;
`

const NTextAccent = styled(BaseRareTextAccent)`
  background: linear-gradient(
    2deg,
    rgba(220, 220, 220, 1) 0%,
    rgba(245, 245, 245, 1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  background-size: 300% 300%;
`

const NftRareText: React.FC<NftRareTextProps> = ({ rare }) => {

  return (
    <Text>
      {rare === NftRareType.LR && (
        <LRTextAccent>
          {rare}
        </LRTextAccent>
      )}
      {rare === NftRareType.SR && (
        <SRTextAccent>
          {rare}
        </SRTextAccent>
      )}
      {rare === NftRareType.R && (
        <RTextAccent>
          {rare}
        </RTextAccent>
      )}
      {rare === NftRareType.N && (
        <NTextAccent>
          {rare}
        </NTextAccent>
      )}
    </Text>
  )
}

export default NftRareText
