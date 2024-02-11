function Card(props)
{
    return(
        <div style={{ backgroundColor:props.bgcolor }} className="px-10 py-5 border rounded-md text-center flex-grow">
        <h3 className="font-medium text-2xl">{props.title}</h3>
        <p>{props.subtitle}</p>
      </div>
    )

}

export default Card