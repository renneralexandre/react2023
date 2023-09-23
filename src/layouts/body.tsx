import './index.css';

type CSSGridbodyProps = {
    children: React.ReactNode;
}


const CSSGridbody = (props: CSSGridbodyProps) => {
    return (
        <>
            <div className="body">{props.children}</div>
        </>
    )
}

export default CSSGridbody;