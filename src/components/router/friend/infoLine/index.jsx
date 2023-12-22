export const InfoLine = ({label, value}) => {
    return(
        <div>
            <b>{label}: </b>
            <span>{value}</span>
        </div>
    )
}