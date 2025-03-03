import { Icon } from "@iconify/react";

/**
 * 푸터 컴포넌트
 *
 * @component
 * @returns {JSX.Element} 푸터 컴포넌트
 */
const Footer = () => {
    return (
        <div className='w-100 p-2 pb-4 footer fixed-bottom'>
            <div>
                <div className="row">
                    <div className="col text-center">
                        <a href="/">
                            <Icon icon="majesticons:home" className="footerIcon" />
                        </a>
                    </div>
                    <div className="col text-center">
                        <a href="/card">
                            <Icon icon="majesticons:creditcard" className="footerIcon" />
                        </a>
                    </div>
                    <div className="col text-center">
                        <a href="/point">
                            <Icon icon="mingcute:parking-fill" className="footerIcon" />
                        </a>
                    </div>
                    <div className="col text-center">
                        <a href="/topic">
                            <Icon icon="majesticons:textbox" className="footerIcon" />
                        </a>
                    </div>
                    <div className="col text-center">
                        <a href="/leafboard">
                            <Icon icon="majesticons:leaf-3-angled" className="footerIcon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
