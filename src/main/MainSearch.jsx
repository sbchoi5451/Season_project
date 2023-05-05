import React, { useState } from 'react'
import * as st from './MainSt'
import * as sst from '../share/Style'

function MainSearch() {

    const searchWhere = [
        {value: "sudogwon", label: "서울/경기/인천"},
        {value: "gangwon", label: "강원도"},
        {value: "chungchung", label: "충청도"},
        {value: "gyeongsang", label: "경상도"},
        {value: "jeolla", label: "전라도"},
        {value: "jeju", label: "제주도"},
    ]
    const [selectWhere, setSelectWhere] = useState(searchWhere[0])

    const searchStar = [
        {value: "five", label: "⭐⭐⭐⭐⭐"},
        {value: "four", label: "⭐⭐⭐⭐"},
        {value: "three", label: "⭐⭐⭐"},
        {value: "two", label: "⭐⭐"},
        {value: "one", label: "⭐"},
        {value: "oops", label: "😡"},
    ]
    const [selectStar, setSelectStar] = useState(searchStar[0])

    return (
        <st.SearchBox>
            <div>별점 선택 <sst.SelectStyle options={searchStar} onChange={setSelectStar} defaultValue={searchStar[0]} /></div>
            <div>위치 선택<sst.SelectStyle options={searchWhere} onChange={setSelectWhere} defaultValue={searchWhere[0]} /></div>
            <sst.Row>
                <sst.Column>키워드 검색 <sst.Input /></sst.Column>
                <sst.Button>검색하기</sst.Button>
            </sst.Row>
        </st.SearchBox>
    )
}

export default MainSearch