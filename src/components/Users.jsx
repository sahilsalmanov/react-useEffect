import React, { useEffect, useState } from 'react'
import axios from "axios";
import {Form, FormGroup, Input, Label} from 'reactstrap'

function Users(props) {


    const [data, setData] = useState([])
    const [value, setValue] = useState(0)

   useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
    .then(res => setData(res.data))
   }, [])
   
  return (
    <div>
<Form>
  <FormGroup>
    <Label for="exampleSelect">
      <h1>Select</h1>
    </Label>
    <Input onChange={(e) => setValue(e.target.value)} value={value} id="exampleSelect" name="select" type="select">
      <option value={0}>
        All
      </option>
      {
        data.map(item => <option value={item.id}>
             {item.name}
            </option>)
      }
    </Input>
  </FormGroup>
 
</Form>
{props.func(value)}

    </div>
  )
}

export default Users