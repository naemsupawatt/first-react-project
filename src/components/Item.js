function Item(props){
    const {data,deleteStudent} = props;
    const stypeData = {
        color : "black",
        fontWeight : "bold",
        marginTop : "Auto",
        marginBottom : "Auto"
    }
    return(
            <>
                <li key={data.id} className={data.gender}>
                        <p style={stypeData}>{data.id} : {data.name}</p>
                        <button onClick={()=>deleteStudent(data.id)}>Delete</button>
                </li>
            </>
    );
}
export default Item;