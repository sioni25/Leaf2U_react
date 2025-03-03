import mainImg from '../image/새싹-하양.png'
import { Button as MuiButton } from '@mui/material';
import { Icon } from "@iconify/react";
import { useNavigate } from 'react-router-dom';


function Login() {

    const navigate = useNavigate();

    // 로그인 버튼 클릭
    const clickLogin = () => {
        navigate('/', { replace: true });
    }

    return (
        <div className="w-100 h-100 container bg-green d-flex justify-content-center">
            <div className='position-absolute login-icon'>
                <img src={mainImg}></img>
            </div>
            <div className='position-absolute login-btn mt-auto w-100 p-3'>
                <MuiButton
                    variant="contained"
                    disableElevation
                    sx={{
                        backgroundColor: '#fee500',
                        color: '#3c1e1e',
                        borderRadius: '30px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        height: '50px',
                        boxShadow: 'none',
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center'
                    }}
                    onClick={clickLogin}
                >
                    <Icon icon="ri:kakao-talk-fill" className="kakao-logo"/>
                    카카오로 로그인
                </MuiButton>
            </div>
        </div>
    );
}

export default Login;
