import type {NextPage} from 'next'
import {Button, Container, HStack, Spacer, Text, VStack} from "@chakra-ui/react";
import Post from "../components/Post";
import NewPostModal from "../components/NewPostModal";
import MainPage from "../components/MainPage";
import PostHolder from "../components/PostHolder";
import {useState} from "react";
import MyApp from './_app';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

const Home: NextPage = () => {
    // TODO: Implement this NextPage!
    //return (<MainPage posts={ makePosts() } />);
    return (makeFront())
    //<Post title="hi" body="thing" postedAt = { new Date() }/>
}

function makePosts(): ReactJSXElement[] {

    // eslint-disable-next-line react/jsx-key
    return ([ <Post title="hi" body="thing" postedAt ={ new Date() }/> ])

}



function makeFront() {



    return (
        <div>
            <NewPostModal isOpen={false} onClose={ () => console.log("hi")}></NewPostModal>
            <Post title="title" body="hi" postedAt={new Date}/>
            <PostHolder/>
        </div>
    )
}


/*
Top is some type of title
Main front area, picture background
in the front area, scrollable thing with posts
Static Top is an input field, when you input, it adds a post to the top


*/

export default Home
