import { Box } from "@chakra-ui/react";
import {FC} from "react";
//mport Post from "./Post";

interface Props {
    posts: React.ReactNode[];
    //postModal: React.ReactNode; 
}


const MainPage: FC<Props> = ( {posts} ) => {
    return(
    <Box>
        <Box>
            <img src="https://media.istockphoto.com/photos/very-closeup-view-of-amazing-domestic-pet-in-mirror-round-fashion-is-picture-id1281804798?b=1&k=20&m=1281804798&s=170667a&w=0&h=HIWbeaP_cQSngCz7l9t3xwyE2eyzVgIy3K6xIqPhJQA="></img>
            
        </Box>
    </Box>);
}
export default MainPage;