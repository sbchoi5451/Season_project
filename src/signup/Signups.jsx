import React, { useState } from 'react'
import useInput from '../hooks/useInput'
import * as st from './SignupSt'
import * as sst from '../share/Style'

function Signups() {

    // 정보 입력 input state
    const [checkNickname, onChangeNickname] = useInput()
    const [checkId, setCheckId] = useState('')
    const [checkPw, setCheckPw] = useState('')
    const [doubleCheckPw, setDoubleCheckPw] = useState('')

    // 오류 메세지 state
    const [msgId, setMsgId] = useState('')
    const [msgPw, setMsgPw] = useState('')
    const [msgDoublePw, setMsgDoublePw] = useState('')

    // 유효성 검사 state
    const [isId, setIsId] = useState(false)
    const [isPw, setIsPw] = useState(false)
    const [isDoublePw, setIsDoublePw] = useState(false)

    const onChangeId = (e) => {
        const checkId = e.target.value
        setCheckId(checkId)

        const idRegExp = /^[a-z0-9]{6,18}$/
        if (!idRegExp.test(checkId)) {
            setMsgId("🚨 6-18자의 소문자 또는 숫자만 입력해 주세요")
            setIsId(false)
        } else {
            setMsgId("🙆 사용가능한 아이디입니다")
            setIsId(true)
        }
    }

    const onChangePw = (e) => {
        const checkPw = e.target.value;
        setCheckPw(checkPw)

        const passwordRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/
        if (!passwordRegExp.test(checkPw)) {
            setMsgPw("🚨 영어, 숫자, 특수문자를 8자 이상 입력해주세요")
            setIsPw(false)
        } else {
            setMsgPw("🙆 사용가능한 비밀번호입니다")
            setIsPw(true)
        }
    }

    const onChangeDoubleCheckPw = (e) => {
        const doubleCheckPw = e.target.value
        setDoubleCheckPw(doubleCheckPw)

        if (checkPw !== doubleCheckPw) {
            setMsgDoublePw("🚨 비밀번호가 다릅니다")
            setIsDoublePw(false)
        } else {
            setMsgDoublePw("🙆 비밀번호가 같습니다")
            setIsDoublePw(true)
        }
    }

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
                <st.SignInput id='putId' placeholder='아이디는 영어, 숫자 포함 6~18자입니다'
                    value={checkId} onChange={onChangeId} />
                <st.SingCheckMsg>{msgId}</st.SingCheckMsg>
            </st.SignInputBox>

            <st.SignInputBox>
                <st.SignLabel htmlFor='putPw'>비밀번호</st.SignLabel>
                <st.SignInput type="password" id='putPw' placeholder='비밀번호는 영어, 숫자, 특수문자 포함 8~20자입니다'
                    value={checkPw} onChange={onChangePw} />
                <st.SingCheckMsg>{msgPw}</st.SingCheckMsg>
            </st.SignInputBox>

            <st.SignInputBox>
                <st.SignLabel htmlFor='putPwCheck'>비밀번호 확인</st.SignLabel>
                <st.SignInput type="password" id='putPwCheck' placeholder='비밀번호를 한번 더 입력해주세요'
                    value={doubleCheckPw} onChange={onChangeDoubleCheckPw} />
                <st.SingCheckMsg>{msgDoublePw}</st.SingCheckMsg>
            </st.SignInputBox>

            <sst.Button fn="sign">회원가입 완료</sst.Button>
        </st.SignupBox>
    )
}

export default Signups