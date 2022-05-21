import {
    Container,
    ContainerInfo,
    ImgWrapper
} from './NoPageElements';

import ImageBanner from './../../images/undraw_Page_not_found_re_e9o6.png';

const NoPage = () => (
    <>
        <Container>
            <ContainerInfo>
                <ImgWrapper>
                    <img src={ImageBanner} alt="404 Image" />
                </ImgWrapper>
                <h2>Sorry the page you are looking for is not available</h2>
            </ContainerInfo>
        </Container>
    </>
)

export default NoPage;