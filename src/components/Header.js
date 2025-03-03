import { Icon } from "@iconify/react";

/**
 * 헤더 컴포넌트
 *
 * @component
 * @example
 * return (
 *   <Header title="확인" onClick={() => { window.history.back(); }} />
 * )
 *
 * @param {Object} props - 컴포넌트 속성
 * @param {string} props.title - 헤더 제목
 * @param {boolean} props.back - 뒤로가기 아이콘 표시 여부
 * @param {() => void} props.onClick - 화살표 클릭 이벤트 핸들러
 * @returns {JSX.Element} 헤더 컴포넌트
 */
const Header = ({ title, back = true, onClick = () => { window.history.back(); } }) => {
    return (
        <div className='w-100 ps-2 pe-2 pt-4 pb-4 header'>
            <div className='row text-center'>
                    <div className='col-2' onClick={onClick}>
                        { back && (
                            <Icon icon="majesticons:arrow-left-line" width="25" height="25"/>
                        )}
                    </div>
                <div className='col-8'><b>{title}</b></div>
                <div className='col-2'></div>
            </div>
        </div>
    );
};

export default Header;
