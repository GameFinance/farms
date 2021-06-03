import React from 'react'
import styled from 'styled-components'
import { LootBox } from 'state/types'

interface PreviewProps {
  lootBox: LootBox
}

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.borderColor};
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-bottom: 100%;
`

const StyledImage = styled.img`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  transition: opacity 1s linear;
  height: 100%;
  object-fit: cover;
  border-radius: 32px 32px 0 0;
`

const Preview: React.FC<PreviewProps> = ({ lootBox }) => {
  const { image, lootBoxName } = lootBox
  const previewImageSrc = `/images/lootBoxes/${image}`

  return (
    <Container>
      <StyledImage src={previewImageSrc} alt={lootBoxName} />
    </Container>
  )
}

export default Preview
