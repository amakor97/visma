import InfoCard from "../card/InfoCard";

export default function InfoList({data, sortType, gridStyle}){
    console.log({sortType});
    return (
        <div style={gridStyle}>
            {data.map(dataElem => <InfoCard info={dataElem}/>)}
        </div>
    );
}