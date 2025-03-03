import Button from "./Button";
import Header from "./Header";

const Content = () => {
    return (
        <div>
            <Header title="알림" />
            내용
            <Button
                text={'확인'}
                onClick={() => {
                    alert('!');
                }}
            />
        </div>
    )
}

export default Content;