import React from 'react'
import * as st from './MainSt'
import * as sst from '../share/Style'

function MainLists() {
    return (
        <>
            <st.MainListBox>
                <sst.End>
                    <sst.Button fn="form">수정</sst.Button>
                    <sst.Button fn="del">삭제</sst.Button>
                </sst.End>
                <st.Title season="봄"><h1 className='TitleH1'>제목입니다 🌷</h1></st.Title>
                <st.Image>이미지입니다</st.Image>
                <sst.Row>
                    <span className='spanbold'>별점</span>&nbsp;<st.ShowBox type="select">⭐⭐⭐⭐⭐</st.ShowBox>
                    <span className='spanbold'>위치</span>&nbsp;<st.ShowBox type="select">서울/경기/인천</st.ShowBox>
                </sst.Row>
                <span className='spanbold'>👉 예) 반포 한강공원</span>
                <st.ShowBox type="contents">한줄 코멘트입니다</st.ShowBox>
            </st.MainListBox>

            <st.MainListBox>
                <sst.End>
                    <sst.Button fn="form">수정</sst.Button>
                    <sst.Button fn="del">삭제</sst.Button>
                </sst.End>
                <st.Title season="여름"><h1 className='TitleH1'>제목입니다 🌊</h1></st.Title>
                <st.Image>이미지입니다</st.Image>
                <sst.Row>
                    <span className='spanbold'>별점</span>&nbsp;<st.ShowBox type="select">⭐⭐⭐⭐⭐</st.ShowBox>
                    <span className='spanbold'>위치</span>&nbsp;<st.ShowBox type="select">서울/경기/인천</st.ShowBox>
                </sst.Row>
                <span className='spanbold'>👉 예) 반포 한강공원</span>
                <st.ShowBox type="contents">한줄 코멘트입니다</st.ShowBox>
            </st.MainListBox>

            <st.MainListBox>
                <sst.End>
                    <sst.Button fn="form">수정</sst.Button>
                    <sst.Button fn="del">삭제</sst.Button>
                </sst.End>
                <st.Title season="가을"><h1 className='TitleH1'>제목입니다 🍂</h1></st.Title>
                <st.Image>이미지입니다</st.Image>
                <sst.Row>
                    <span className='spanbold'>별점</span>&nbsp;<st.ShowBox type="select">⭐⭐⭐⭐⭐</st.ShowBox>
                    <span className='spanbold'>위치</span>&nbsp;<st.ShowBox type="select">서울/경기/인천</st.ShowBox>
                </sst.Row>
                <span className='spanbold'>👉 예) 반포 한강공원</span>
                <st.ShowBox type="contents">한줄 코멘트입니다</st.ShowBox>
            </st.MainListBox>

            <st.MainListBox>
                <sst.End>
                    <sst.Button fn="form">수정</sst.Button>
                    <sst.Button fn="del">삭제</sst.Button>
                </sst.End>
                <st.Title season="겨울"><h1 className='TitleH1'>제목입니다 ⛄</h1></st.Title>
                <st.Image>이미지입니다</st.Image>
                <sst.Row>
                    <span className='spanbold'>별점</span>&nbsp;<st.ShowBox type="select">⭐⭐⭐⭐⭐</st.ShowBox>
                    <span className='spanbold'>위치</span>&nbsp;<st.ShowBox type="select">서울/경기/인천</st.ShowBox>
                </sst.Row>
                <span className='spanbold'>👉 예) 반포 한강공원</span>
                <st.ShowBox type="contents">한줄 코멘트입니다</st.ShowBox>
            </st.MainListBox>
        </>
    )
}

export default MainLists