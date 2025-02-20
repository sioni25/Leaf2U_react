import React from 'react';
import '../css/Test.css';  // css 폴더의 css파일 불러오기

class Test extends React.Component {
    render() {
        return (
            <div className='testCss'>
                <h2>Test 컴포넌트</h2>
            </div>
        );
    }
}


export default Test;