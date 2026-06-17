import './OutMeta.css';

interface ItemMeta {
    titleOr: string;
    textOt: string;
    listTextOnAbout: string[];
}

export default function OutMeta({ titleOr, textOt, listTextOnAbout }: ItemMeta) {
    return (
        <div className="meta-container mt-36">
            <div className="meta-left-block">
                <h2 className="meta-title">{titleOr}</h2>
                <p className="meta-text-orange">{textOt}</p>
            </div>

            <div className="meta-right-block">
                {listTextOnAbout.map((item, index) => (
                    <p key={index} className="meta-text-white">
                        {item}
                    </p>
                ))}
            </div>
        </div>
    );
}