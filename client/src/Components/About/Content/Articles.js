import React from 'react';
import styled from 'styled-components';

const ArticleText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 400px;
    padding-left: 60px;
    text-align: left;
    h3 {
        margin-top: 10px;
        margin-bottom: 15px;
        font-size: 24px;
        line-height: 36px;
        font-weight: 400;
    }
    .deco-line {
        display: inline-block;
        width: 30px;
        height: 1px;
        margin-bottom: 15px;
        background-color: #ececed;
    }
    p {
        color: rgba(29, 31, 46, 0.7);
        margin-bottom: 15px;
        line-height: 28px;
        font-weight: 400;
    }
`;

const Article = styled.div`
    display: flex;
    justify-content: space-between;
    &:nth-last-child(2n-1) {
        flex-direction: row-reverse;
        ${ArticleText} {
            padding-left: 0;
        }
    }
    height: 380px;
    margin-bottom: 130px;
    img {
        height: 380px;
        width: 460px;
        object-fit: cover;
    }
`;

const ArticlesSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 940px;
`;

export default function Articles() {
    return (
        <ArticlesSection>
            <Article>
                <img src={require(`../../../images/article1.jpg`)} alt=""/>
                <ArticleText>
                    <h3>Overlaid the jeepers uselessly much excluding everyday life.</h3>
                    <div className="deco-line"></div>
                    <p>It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                </ArticleText>
            </Article>
            <Article>
                <img src={require(`../../../images/slide1.jpg`)} alt=""/>
                <ArticleText>
                    <h3>Overlaid the jeepers uselessly much excluding everyday life.</h3>
                    <div className="deco-line"></div>
                    <p>It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                </ArticleText>
            </Article>
        </ArticlesSection>
    )
}
