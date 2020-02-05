import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Text = styled.div``;

const TextArea = styled.div`
    width: 560px;
    .date {
        display: flex;
        align-items: center;
        margin: 70px 0 50px 0;
        color: rgba(29, 31, 46, 0.7);
        .deco-line {
            width: 100%;
            height: 1px;
            margin-left: 20px;
            flex: 1;
            background-color: #d4d4d4;
        }
    }
`;

const Author = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
    border: 1px solid #ececed;
    margin-top: -80px;
    background-color: white;
    img {
        margin: 20px 0;
        height: 140px !important;
        width: 225px !important;
        object-fit: cover;
    }
    .name {
        margin-bottom: 15px;
        color: #1d1f2e;
        font-size: 16px;
        line-height: 28px;
        width: 225px;
    }
    p {
        font-size: 14px;
        line-height: 22px;
        margin-bottom: 15px;
        color: rgba(29, 31, 46, 0.7);
        width: 225px;
    }
    a {
        display: inline-block;
        margin-top: 10px;
        font-size: 14px;
        line-height: 22px;
        color: #a25f4b;
        border-bottom: 2px solid rgba(162, 95, 75, 0.2);
        &:hover {
            border-bottom-color: rgba(162, 95, 75, 0.7);
            color: #743f2f;
        }
    }
`;

const Main = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 940px;
    margin: auto;
`;

const ArticleWrap = styled.div`
    width: 1200px;
    margin: auto;
    border: 1px solid #ececed;
    img {
        height: 650px;
        width: 1440px;
        object-fit: cover;
    }
`;

export default function Article() {
    return (
        <ArticleWrap>
            <img src={require(`../../../images/Post1.jpg`)} alt="Article Image"/>
            <Main>
                <Author>
                    <div className='small-text-bold opacity6'>WRITTEN BY</div>
                    <img src={require(`../../../images/photo1.jpg`)} alt="Author photo"/>
                    <div className="name small-text-bold opacity6">Fred Gleason</div>
                    <p>Tempora vel voluptate. Aut dolorum officia qui officia nostrum porro. Voluptas ut id quo.</p>
                    <Link to='/Blog'>All author's posts</Link>
                </Author>
                <TextArea>
                    <div className="date small-text-bold opacity6">
                        NOVEMBER 12, 2018
                        <div className="deco-line" />
                    </div>
                    <Text>

                    </Text>
                </TextArea>
            </Main>
        </ArticleWrap>
    )
}
