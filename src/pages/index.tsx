import { Button, Grid, Form } from "semantic-ui-react";
import { useRouter } from "next/router";

import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useState, FormEvent } from "react";
const url = 'http://localhost:4000/user'


  
export default function index(){
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [User, setUser] = useState() 
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {push} = useRouter()

    const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault()
       
        

        fetch(url, {
            method: 'DELETE', 
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .catch(error => console.error('Error:', error))
          .then(response => console.log('Success:', response));

    }

     fetch(url)
      .then(response => response.json())
      .then(data => {
        setUser(data)});
        console.log(User)
                                                                                 
   
    if(User === 'you are not have users saved') return(
     <>
            <Grid.Row>
            <Grid.Column>
            <div style={{ color: "#eee", textAlign: "center" }}>
                <h1>No saved user yet</h1>
                <Button onClick={() => push("/views/create")}>Create one</Button>
            </div>
            </Grid.Column>
        </Grid.Row>
        </>)
    
    return(
        <>
            <Grid.Row>
            <Grid.Column>
            <div style={{ color: "#eee", textAlign: "center" }}>
                <h1>list</h1>
                <p></p>
                <Form onSubmit={handleSubmit}>
                <Button  onClick={() => push("/views/delete")}>Delete all</Button>

                </Form>

            </div>
            </Grid.Column>
          </Grid.Row>
        </>

    )

}