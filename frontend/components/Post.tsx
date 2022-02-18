import {FC, useState} from "react";
import {Box, Divider, Flex, HStack, Spacer, Text, VStack} from "@chakra-ui/react";
import Comment from "./Comment";
import { generateKey } from "crypto";

interface Props {
    title: string;
    body: string;
    postedAt: Date;
}

const Post: FC<Props> = ( {title, body, postedAt} ) => {
    // TODO: Implemnt a Post!
    const [timesClicked, setTimesClicked] = useState(0);

    return (
    <Box margin="10%" borderWidth='1px' borderRadius='lg' bg="red.300" w='80%' h='150px' p={4} color='white' onClick={ () => console.log("hi") /* Create button */}>
        <VStack align="left">
            <Text fontSize='3xl' textColor="white"> { title } </Text>
            <Spacer/>
            <Text fontSize='lg'> { body } </Text>
            <Spacer/>
            <Text fontSize='sm' textColor="whiteAlpha.500" > { postedAt } </Text>
            <Spacer/>
        </VStack>
  </Box>
  );
}

export default Post;