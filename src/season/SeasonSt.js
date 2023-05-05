import styled from "styled-components";

export const SeasonBox = styled.div`
width: 220px;
height: 400px;
/* background-color: navy; */
-webkit-box-shadow: 5px 5px 10px 0px silver; 
box-shadow: 5px 5px 10px 0px silver; 
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
  width: 260px;
  height: 450px;
  filter: brightness(1);
  transition: all 0.5s;
  .SeasonBoxp {
    font-size: 60px;
    transition: all 0.5s;
  }
}
`

export const AllSeasonBox = styled.div`
width: 930px;
height: 600px;
/* background-color: skyblue; */
display: flex;
align-items: center;
justify-content: space-between;
font-family: 'Gowun Batang', serif;
`