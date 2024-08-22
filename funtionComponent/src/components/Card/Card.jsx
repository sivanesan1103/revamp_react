
export const Card = (props)=>{
    return(
        <>
            <div className="grid m-7 ">
                <p>
                    {props.name}
                </p>    
                <p>
                    {props.age}
                </p>
            </div>
        </>
    )
}