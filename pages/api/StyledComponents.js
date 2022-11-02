import styled, { createGlobalStyle, css } from 'styled-components'

export const Button = styled.button`
background: #0009;
border-radius: 3px;
border: none;
color: white;
margin: 0 0.7em;
padding: 0.25em 1em;

&:hover{
    z-index: 1;
    transform: scale(1.2);
}
${props => props.primary && css`
    background: white;
    color: black;
  `}
`;

export const Span = styled.span`
margin: 0 5px ;
`
export const ChannelContainer = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 25px;
`
export const Anchor = styled.a`
    color: #e1e1e1;
    font-weight: 500;
    padding: 5px 15px;
    margin: 0px 5px;

    &:hover{
      color: white;
      background: #0009;
      border-radius: 4px;
      z-index: 1;
      transform: scale(1.2);
    }
    ${props => props.active && css`
    color: #fff;
  `}
`
export const BannerTitle = styled.div`
width: 100%;
min-height: 19px;
margin-top: 8px;
margin-bottom: 0;
overflow: hidden;
`
export const TitleDiv = styled.div`
height: 2.4em;
overflow: hidden;
color: white;
font-family: Trebuchet MS, Helvetica, Arial, sans-serif;
font-weight: 700;
font-size: 1em;
line-height: 1.2em;
text-align: left;
text-shadow: 0 2px 4px rgb(0 0 0 / 14%), 0 3px 4px rgb(0 0 0 / 12%),
  0 1px 5px rgb(0 0 0 / 20%);
`

export const DynamicBlur = styled.div`
position: fixed;
z-index: 0;
top: 0;
`

export const HomeMain = styled.div`
width: 100%;
overflow: hidden;
`
export const BannerContainer = styled.div`
padding: 10px 0px 25px
`

export const DisplayDuration = styled.span`
  position: absolute;
  bottom: 0px;
  right: 0px;
  z-index: 999;
  color: white;
  font-weight: 500;
  padding: 2px 12px;
  margin: 5px;
  border-radius: 5px;
  background-color: #0009;
`
export const DisplayLive = styled.span`
  position: absolute;
  bottom: 0px;
  right: 0px;
  z-index: 999;
  color: white;
  font-weight: 500;
  font-size: 18px;
  padding: 3px 15px;
  margin: 5px;
  border-radius: 5px;
  background-color: #ce153f;
`
export const PosterSection = styled.div`
position: relative;
  width: 100%;
  overflow: hidden;
  background-color: #2b3b57;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 4px;
  box-shadow: 0 8px 10px #00000024, 0 3px 14px #0000001f, 0 4px 5px #0003;
  transition: box-shadow 0.1s ease;
  cursor: pointer;
`
export const BlurBgImage = styled.div`
  position: absolute;
  top: 0;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  filter: blur(20px) brightness(60%);
  object-fit: cover;
`
export const BannerBlurBg = styled.div`
position: absolute;
top: 0;
box-sizing: border-box;
width: 100vw;
height: 100vh;
filter: blur(15px) brightness(60%);
object-fit: cover;

`
export const LineClamp = styled.p`
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
overflow: hidden;
`