import {FC, FormEvent, useState} from "react";
import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay
} from "@chakra-ui/modal";
import {Button, Input, Textarea, VStack} from "@chakra-ui/react";
import axios from "axios";
import { getDate } from "date-fns";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const NewPostModal: FC<Props> = ({isOpen, onClose}) => {

    // TODO: Fill out this handleSubmit function!
    function handleSubmit(e: any) {
        e.preventDefault();

        axios.post('http://localhost:8080/posts', { 
            body: e.target.post.value,
            title: e.target.title.value,
        })
        .then((response) => {
            // Make a new post
            console.log("Data uploaded! " + e.target.post.value);
        })
        .catch((error) => {
            // don't make a post

        })
    }
        

    // TODO: Implemnt a NewPostModal!
    return (<form onSubmit={handleSubmit}>
        <div>
            <input name="title" placeholder="Dear Bruno..." type="title" required/>
            <input name="post" placeholder="I love FSAB because..." type="post" required/>
            <button type="submit">Submit Post!</button>
        </div>
    </form>);
}

export default NewPostModal;
