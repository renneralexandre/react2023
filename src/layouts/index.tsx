import CSSGridbody from './body';
import './index.css';

const CSSGridLayout = () => {
    return (
        <>
            <section className="layout">
                <div className="header">1</div>
                <div className="AppBar">2</div>
                <CSSGridbody><div>eita</div></CSSGridbody>
                <div className="AsideBar">4</div>
                <div className="footer">5</div>
            </section>
        </>
    )
}

export default CSSGridLayout;