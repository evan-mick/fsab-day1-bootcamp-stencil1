import { Box } from "@chakra-ui/react";
import {FC, useEffect, useState} from "react";
import Post from "./Post";
import axios from "axios";


interface Props {

}

function getPosts() {

    //e.preventDefault();

    var posts = axios.get('http://localhost:8080/posts', { });
    console.log(posts);
    /*.then((response) => {
        // Make a new post
        console.log("Data uploaded! " + e.target.post.value);
    })
    .catch((error) => {
        // don't make a post

    })*/

    return posts;
}


const PostHolder: FC<Props> = ( {} ) => {
    // TODO: Implemnt a Post!
   // const [timesClicked, setTimesClicked] = useState(0);
   const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8080/posts', { })
        .then((response) => {
            setPosts(response.data);
            console.log("got posts!");
        })
        .catch ((error) => {
            console.log("error");
        })
    }, []);

    return (<div>
        {posts.map(post => <div key={post.id}><Post title={post.title} body={post.body} postedAt={post.createdAt}/></div>)}
    </div>);
}

export default PostHolder;