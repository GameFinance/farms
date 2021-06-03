import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `

const Container = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
    padding-bottom: 100%;
  `
const StyledSvg = styled.svg`
    position: absolute;
    top: 0;
    left: 0;
  `

interface LootBoxDirectionProps {
  href: string
  onClick?: () => void
  style?: any
}

const LootBoxDirection: React.FC<LootBoxDirectionProps> = ({ href , onClick, style }) => {
  return (
    <Wrapper>
      <Container>
        <StyledSvg viewBox="0 0 320 320" width={320}>
          <image width="320" height="320" href={href} onClick={onClick} style={style} />
        </StyledSvg>
      </Container>
    </Wrapper>
  )
}

export default LootBoxDirection
