import styled from "styled-components";

export const SeasonBox = styled.div`
width: 220px;
height: 400px;
/* background-color: navy; */
-webkit-box-shadow: 5px 5px 12px 2px #707070; 
box-shadow: 5px 5px 19px 2px #707070;
border-radius: 5px;
filter: brightness(0.7);
cursor: pointer;
.SeasonBoxp {
  font-size: 50px;
  font-weight: bolder;
  color: white;
  text-align: center;
  line-height: 300px;
  text-shadow: 0px 0px 10px ${props => props.season === '봄' ? '#EC5196' : (props => props.season === '여름' ? '#006EBE' : (props => props.season === '가을' ? '#A9530B' : '#FFFFFF') ) };
  
}
&:hover {
  width: 240px;
  height: 430px;
  filter: brightness(1);
  transition: all 0.5s;
  .SeasonBoxp {
    font-size: 60px;
    transition: all 0.5s;
  }
}
`

export const Background = styled.div`
box-sizing: border-box;
padding: 100px;
width: 100%;
height: 700px;
display: flex;
align-items: center;
justify-content: center;
`

export const AllSeasonBox = styled.div`
width: 940px;
height: 600px;
/* background-color: skyblue; */
display: flex;
align-items: center;
justify-content: space-between;
font-family: 'Gowun Batang', serif;
`