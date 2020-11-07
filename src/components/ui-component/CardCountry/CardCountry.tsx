import React from 'react'
import Card from  "react-bootstrap/Card"


interface ICountry{
name:string,
population:number
flag:string
}


function CardCountry(props:ICountry) {
    const {name,population,flag} = props
    return (
            <Card style={{ width: '18rem' }} className={"m-1"}>
                <Card.Img variant="top" src={flag} style={{height:"200px",width:"18rem"}}  />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            population:{population}
                        </Card.Text>
                     </Card.Body>
            </Card>
            
        
    )
}

export default CardCountry
