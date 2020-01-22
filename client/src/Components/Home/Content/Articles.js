import React from 'react';
import styled from 'styled-components';
import { Headline } from '../../Other/Headline';

const Article = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    margin-right: 20px;
    &:last-child {
        margin-right: 0;
    }
    img {
        height: 300px;
        width: 300px;
        object-fit: cover;
        margin-bottom: 25px;
    }
    .title {
        margin-bottom: 10px;
        color: #1d1f2e;
        font-size: 20px;
        line-height: 32px;
    }
    p {
        color: rgba(29, 31, 46, 0.7);
        line-height: 28px;
    }
    .date {
        margin-top: 20px;
        opacity: .6;
    }
`;

const ArticlesWrap = styled.div`
    display: flex;
    margin: 100px 0;
`;

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 940px;
`;

const ArticlesSection = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export default function Articles() {
    return (
        <ArticlesSection>
            <Wrap>
                <Headline style={{color: 'black'}} className='small-text-bold' text='BEHIND THE MUGS, LIFESTYLE STORIES'/>
                <ArticlesWrap>
                    <Article>
                        <img src={require(`../../../images/art1.jpg`)} alt=""/>
                        <div className="title">Health Check: why do I get a headache when I haven’t had my coffee?</div>
                        <p>It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                        <div className="date small-text-bold">OCTOBER 9, 2018</div>
                    </Article>
                    <Article>
                        <img src={require(`../../../images/art2.jpg`)} alt=""/>
                        <div className="title"> How long does a cup of coffee keep you awake?</div>
                        <p>It is a paradisematic country, in which roasted parts. Vel qui et ad voluptatem.</p>
                        <div className="date small-text-bold">OCTOBER 9, 2018</div>
                    </Article>
                    <Article>
                        <img src={require(`../../../images/art3.jpg`)} alt=""/>
                        <div className="title">Recent research suggests that heavy coffee drinkers may reap health benefits. </div>
                        <p>It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                        <div className="date small-text-bold">OCTOBER 9, 2018</div>
                    </Article>
                </ArticlesWrap>
            </Wrap>
        </ArticlesSection>
    )
}
