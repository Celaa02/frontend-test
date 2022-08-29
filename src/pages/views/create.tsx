import {Button, Card, Form, Icon} from 'semantic-ui-react'
import {ChangeEvent, FormEvent, useState} from 'react'
const url = 'http://localhost:4000/user'

export default function CreateUser(){

    const [create, setcreate] = useState({
        username : '',
        birthdate: '',
        identificatenum: ''
    })
    const handleChange = ({target : {name, value}, 
    }: 
        ChangeEvent<HTMLInputElement>) => setcreate({...create, [name]: value})
    
    const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(create)
        

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(create), 
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .catch(error => console.error('Error:', error))
          .then(response => console.log('Success:', response));

    }

    return(
      <div style={{ color: "#eee", textAlign: "center",display:"flex", justifyContent: "center",
      alignItems: "center", marginTop:"40px"}}>
        <Card >
            <Card.Content>
                <Form onSubmit={handleSubmit}>
                    <Form.Field>
                        <label htmlFor='title'>Name and Lastname</label>
                        <input type='text' placeholder='Write your name and lastname' name= 'username' onChange={handleChange}></input>
                    </Form.Field>
                    <Form.Field>
                        <label htmlFor='date'>birthdate</label>
                        <input type='date' placeholder='Write your birthdate' name='birthdate' onChange={handleChange}></input>
                    </Form.Field>
                    <Form.Field>
                        <label htmlFor='number'>Identification Number</label>
                        <input type='number' placeholder='Write your Indentification Number' name='identificatenum' onChange={handleChange}></input>
                    </Form.Field>
                    <Button>
                        <Icon name='save'/>
                        Save
                    </Button>
                </Form>
            </Card.Content>

        </Card>
        
      </div>
    )
  }