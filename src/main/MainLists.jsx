import React from 'react'
import styled from 'styled-components'
import * as sst from '../share/Style'

function MainLists() {
    return (
        <>
            <MainListBox>
                <sst.End>
                    <sst.Button fn="form">수정</sst.Button>
                    <sst.Button fn="del">삭제</sst.Button>
                </sst.End>
                <Title season="봄"><h1 className='TitleH1'>제목입니다 🌷</h1></Title>
                <Image>이미지입니다</Image>
                <sst.Row>
                    <span className='spanbold'>별점</span>&nbsp;<ShowBox type="select">⭐⭐⭐⭐⭐</ShowBox>
                    <span className='spanbold'>위치</span>&nbsp;<ShowBox type="select">서울/경기/인천</ShowBox>
                </sst.Row>
                <span className='spanbold'>👉 예) 반포 한강공원</span>
                <ShowBox type="contents">한줄 코멘트입니다</ShowBox>
            </MainListBox>

            <MainListBox>
                <sst.End>
                    <sst.Button fn="form">수정</sst.Button>
                    <sst.Button fn="del">삭제</sst.Button>
                </sst.End>
                <Title season="여름"><h1 className='TitleH1'>제목입니다 🌊</h1></Title>
                <Image>이미지입니다</Image>
                <sst.Row>
                    <span className='spanbold'>별점</span>&nbsp;<ShowBox type="select">⭐⭐⭐⭐⭐</ShowBox>
                    <span className='spanbold'>위치</span>&nbsp;<ShowBox type="select">서울/경기/인천</ShowBox>
                </sst.Row>
                <span className='spanbold'>👉 예) 반포 한강공원</span>
                <ShowBox type="contents">한줄 코멘트입니다</ShowBox>
            </MainListBox>

            <MainListBox>
                <sst.End>
                    <sst.Button fn="form">수정</sst.Button>
                    <sst.Button fn="del">삭제</sst.Button>
                </sst.End>
                <Title season="가을"><h1 className='TitleH1'>제목입니다 🍂</h1></Title>
                <Image>이미지입니다</Image>
                <sst.Row>
                    <span className='spanbold'>별점</span>&nbsp;<ShowBox type="select">⭐⭐⭐⭐⭐</ShowBox>
                    <span className='spanbold'>위치</span>&nbsp;<ShowBox type="select">서울/경기/인천</ShowBox>
                </sst.Row>
                <span className='spanbold'>👉 예) 반포 한강공원</span>
                <ShowBox type="contents">한줄 코멘트입니다</ShowBox>
            </MainListBox>

            <MainListBox>
                <sst.End>
                    <sst.Button fn="form">수정</sst.Button>
                    <sst.Button fn="del">삭제</sst.Button>
                </sst.End>
                <Title season="겨울"><h1 className='TitleH1'>제목입니다 ⛄</h1></Title>
                <Image>이미지입니다</Image>
                <sst.Row>
                    <span className='spanbold'>별점</span>&nbsp;<ShowBox type="select">⭐⭐⭐⭐⭐</ShowBox>
                    <span className='spanbold'>위치</span>&nbsp;<ShowBox type="select">서울/경기/인천</ShowBox>
                </sst.Row>
                <span className='spanbold'>👉 예) 반포 한강공원</span>
                <ShowBox type="contents">한줄 코멘트입니다</ShowBox>
            </MainListBox>
        </>
    )
}

export default MainLists

const MainListBox = styled.div`
    margin-top: 20px;
    box-sizing: border-box;
    padding: 10px;
    /* background-color: skyblue; */
    width: 900px;
    height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    /* border: 3px solid silver; */
    border-radius: 5px;
    -webkit-box-shadow: 5px 5px 10px 0px silver; 
    box-shadow: 5px 5px 10px 0px silver;
    .spanbold {
        font-weight: bold;
    }
`

const Title = styled.div`
    .TitleH1 {
        color: ${props => props.season === '봄' ? '#F08080' : (props => props.season === '여름' ? '#00BFFF' : (props => props.season === '가을' ? '#8B4513' : '#000000'))};
        text-shadow: 2px 2px 0px #FFFFFF, 5px 4px 0px rgba(0,0,0,0.15);
    }
`

const Image = styled.div`
    /* background-image: url();
    background-position: center;
    background-size: cover; */
    background-color: #F08080;
    width: 700px;
    height: 400px;
    border-radius: 5px;
`

const ShowBox = styled.div`
    box-sizing: border-box;
    padding: 5px;
    width: ${props => props.type === 'select' ? '200' : '600'}px;
    height: ${props => props.type === 'contents' ? '80' : '30'}px;
    border: 1px solid silver;
    border-radius: 5px;
    margin-right: 20px;
    text-align: center;
    line-height: ${props => props.type === 'contents' ? 'none' : '17'}px;
`