import React from 'react'
import useInput from '../hooks/useInput'
import * as st from './SignupSt'
import * as sst from '../share/Style'

function Singups() {
    const [checkNickname, onChangeNickname] = useInput()
    const [checkId, onChangeId] = useInput()
    const [checkPw, onChangePw] = useInput()
    const [doubleCheckPw, onChangeDoubleCheckPw] = useInput()

    return (
        <st.SignupBox>
            <h1 className='SignBoxH1'>회원가입 🎉</h1>
            <st.SignInputBox>
                <st.SignLabel htmlFor='putNickname'>닉네임</st.SignLabel>
                <st.SignInput id='putNickname' placeholder='닉네임을 입력해주세요'
                value={checkNickname} onChange={onChangeNickname} />
            </st.SignInputBox>

            <st.SignInputBox>
                <st.SignLabel htmlFor='putId'>아이디</st.SignLabel>
                <st.SignInput id='putId' placeholder='아이디를 입력해주세요'
                value={checkId} onChange={onChangeId} />
            </st.SignInputBox>

            <st.SignInputBox>
                <st.SignLabel htmlFor='putPw'>비밀번호</st.SignLabel>
                <st.SignInput type="password" id='putPw' placeholder='비밀번호를 입력해주세요'
                value={checkPw} onChange={onChangePw} />
            </st.SignInputBox>

            <st.SignInputBox>
                <st.SignLabel htmlFor='putPwCheck'>비밀번호 확인</st.SignLabel>
                <st.SignInput type="password" id='putPwCheck' placeholder='비밀번호를 한번 더 입력해주세요'
                value={doubleCheckPw} onChange={onChangeDoubleCheckPw} />
            </st.SignInputBox>

            <sst.Button fn="sign">회원가입 완료</sst.Button>
        </st.SignupBox>
    )
}

export default Singups