
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">BLOG APPLICATION</Typography>
                <Text variant="h5">
                Welcome to Blog Application, where words come to life and thoughts find a home. 
                Our platform is more than just a space for blogs; it's a community that celebrates diverse voices and unique perspectives.
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
                <Text variant="h5">
                At our Blog Application Name
                , we believe in the power of storytelling. Our mission is to provide a creative and inclusive space for individuals 
                to express themselves, share their experiences, and connect with a like-minded community. Whether you're a seasoned 
                writer or a first-time blogger, this is your canvas to paint your thoughts.   
                </Text>
                
            </Wrapper>
        </Box>
    )
}

export default About;