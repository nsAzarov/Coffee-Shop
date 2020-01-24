import React from 'react';
import styled from 'styled-components';
import {Description} from '../../Other/Description';
import {BlogHeader} from './BlogHeader';

const Post = styled.div`
    display: flex;
    width: 100%;
    margin-right: 20px;
    margin-bottom: 50px;
    img {
        height: 210px;
        width: 260px;
        object-fit: cover;
        margin-bottom: 25px;
        margin-right: 40px;
    }
`;

const Posts = styled.div`
    width: 600px;
`;

export default function LatestPosts() {
    return (
        <Posts>
            <BlogHeader>Latest Post</BlogHeader>
            <Post>
                <img src={require(`../../../images/Post1.jpg`)} alt=""/>
                <Description style={{width: '280px'}}>
                    <div className="title">Will drinking coffee prolong your life?</div>
                    <p>Aliquid aperiam accusantium quam ipsam. Velit rerum veniam optio illo dolor delectus et recusandae. Impedit aut cupiditate. Illum eveniet officiis ullam ipsam sed iste eius. Nam at quae ducimus dicta delectus</p>
                    <div className="date small-text-bold">OCTOBER 9, 2018</div>
                </Description>
            </Post>
            <Post>
                <img src={require(`../../../images/Post2.jpg`)} alt=""/>
                <Description style={{width: '280px'}}>
                    <div className="title">More coffee, lower death risk?</div>
                    <p>Eveniet itaque aperiam qui officia in ducimus. Voluptas culpa ut eligendi in. Minima est dolores dolore aut et et alias p</p>
                    <div className="date small-text-bold">OCTOBER 9, 2018</div>
                </Description>
            </Post>
            <Post>
                <img src={require(`../../../images/art2.jpg`)} alt=""/>
                <Description style={{width: '280px'}}>
                    <div className="title">How long does a cup of coffee keep you awake?</div>
                    <p>It is a paradisematic country, in which roasted parts. Vel qui et ad voluptatem.</p>
                    <div className="date small-text-bold">OCTOBER 9, 2018</div>
                </Description>
            </Post>
            <Post>
                <img src={require(`../../../images/art3.jpg`)} alt=""/>
                <Description style={{width: '280px'}}>
                    <div className="title">Recent research suggests that heavy coffee drinkers may reap health benefits.</div>
                    <p>It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <div className="date small-text-bold">OCTOBER 9, 2018</div>
                </Description>
            </Post>
            <Post>
                <img src={require(`../../../images/art1.jpg`)} alt=""/>
                <Description style={{width: '280px'}}>
                    <div className="title">Health Check: why do I get a headache when I haven’t had my coffee?</div>
                    <p>It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <div className="date small-text-bold">OCTOBER 9, 2018</div>
                </Description>
            </Post>
        </Posts>
    )
}
