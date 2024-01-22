import styled from "styled-components";
import Breadcrumbs from "nextjs-breadcrumbs";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import api from "../../utils/api";
import { Color } from "../../utils/color";
import { Container, Content, DateComponent, Title } from "../News/[newId]";
import Markdown from "react-markdown";
import NoContent from "../../components/noContent/NoContent";
function PerFixture({ ticketProps }) {
  // console.log(
  //   "🚀 ~ file: [fixId].jsx:15 ~ PerFixture ~ ticketProps:",
  //   ticketProps
  // );
  return (
    <StyledPerFixture>
      <Breadcrumbs
        omitRootLabel
        activeItemClassName="brActive"
        omitIndexList={[1]}
        containerStyle={{
          width: "90%",
          margin: "auto",
          borderBottom: `1px solid ${Color.primaryColor}`,
          height: "auto",
          paddingTop: "11vh",
        }}
        listStyle={{
          display: "flex",
          marginLeft: "5px",
          padding: "5px",
          fontSize: "15px",
        }}
        inactiveItemStyle={{
          padding: "5px",
          color: `${Color.primaryColor}`,
          fontWeight: "700",
          color: "#000",
        }}
        transformLabel={(title) => "Back to " + " all " + "fixtures"}
      />
      {ticketProps?.data?.attributes?.articles?.data.length !== 0 ? (
        <>
          <StyledItemsPage>
            <Container>
              <Title>{ticketProps?.data?.attributes?.title}</Title>
              <DateComponent
                date={ticketProps?.data?.attributes?.publishedAt}
                type="published"
              />

              {ticketProps?.data?.attributes?.videos?.data.length !== 0 && (
                <div className="highlightsContainer">
                  <div className="hightLightIframe">
                    <iframe
                      width="100%"
                      height="100%"
                      controls="0"
                      src={`${ticketProps?.data?.attributes?.videos?.data?.[0]?.attributes?.url}`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )}

              <Content>
                <Markdown>
                  {
                    ticketProps?.data?.attributes?.articles?.data?.[0]
                      ?.attributes?.content
                  }
                </Markdown>
              </Content>
            </Container>
          </StyledItemsPage>
        </>
      ) : (
        <NoContent />
      )}
    </StyledPerFixture>
  );
}

const StyledItemsPage = styled.section`
  .highlightsContainer header {
    font-weight: 600;
    text-align: center;
    font-size: 20px;
    padding: 10px;
  }

  .highlightsContainer {
    height: auto;
    width: 100%;
    margin: auto;
    padding-bottom: 30px;
  }

  #fixtureBannerImg {
    object-fit: contain !important;
  }

  .hightLightIframe {
    width: 100%;
    height: 50vh;
  }
`;

export default PerFixture;

const StyledPerFixture = styled.section`
  width: 100%;
  height: auto;
`;

export async function getServerSideProps(context) {
  try {
    const initialData = await api.get(
      `api/ticket-fixtures/${context.params.fixId}?populate[articles][fields][0]=*&populate[articles][populate][images][fields][0]=url&populate[videos][fields][0]=*&populate[videos][populate][image][fields][0]=url&fields[0]=title&fields[1]=publishedAt`
    );
    const ticketProps = initialData.data;
    return {
      props: { ticketProps },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
}
