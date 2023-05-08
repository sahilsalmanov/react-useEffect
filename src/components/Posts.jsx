import React, { useEffect, useState } from 'react'
import axios from "axios";
function Posts(props) {

    const [posts, setPosts] = useState([])

   useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/posts')
    .then(res => setPosts(res.data))
   }, [])
   const filtered = posts.filter((item) => item.userId == props.func)
    
  return (
    <>
   <h1>Posts</h1>
    <table>
        <thead>
            <th>Id</th>
            <th>UserId</th>
            <th>Body</th>
            <th>Title</th>
        </thead>
        <tbody>
            {
            props.func == 0 ? 
            posts.map(item => <tr><td>{item.id}</td>
                <td>{item.userId}</td>
                <td>{item.body}</td>
                <td>{item.title}</td></tr>) :
                filtered.map(item => <tr><td>{item.id}</td>
                <td>{item.userId}</td>
                <td>{item.body}</td>
                <td>{item.title}</td></tr>)
            }
        </tbody>
    </table>
    </>
  )
}

export default Posts