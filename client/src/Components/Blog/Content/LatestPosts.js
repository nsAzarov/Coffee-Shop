import React from 'react';
import styled from 'styled-components';
import {Description} from '../../Other/Description';
import {BlogHeader} from './BlogHeader';
import {ImageArea} from '../../Other/Products';
import ButtonWhite from '../../Other/ButtonWhite';

const Post = styled.div`
    display: flex;
    width: 100%;
    padding-top: 20px;
    margin-right: 20px;
    margin-bottom: 30px;
    &:last-child {
        margin-bottom: 0;
    }
`;

const Posts = styled.div`
    width: 600px;
`;

export default function LatestPosts() {
    return (
        <Posts>
            <BlogHeader>Latest Posts</BlogHeader>
            <Post>
                <ImageArea>
                    <img src={require(`../../../images/Post1.jpg`)} style={{height: '210px', width: '260px', margin: '0 40px 25px 0'}} alt=""/>
                    <div className="overlay" style={{height: '210px', width: '260px'}}>
                        <ButtonWhite to='/Article/1' className='btn' text='READ THE FULL STORY'/>
                    </div>
                </ImageArea>
                <Description style={{width: '280px'}}>
                    <div className="title">Will drinking coffee prolong your life?</div>
                    <p>Aliquid aperiam accusantium quam ipsam. Velit rerum veniam optio illo dolor delectus et recusandae. Impedit aut cupiditate. Illum eveniet officiis ullam ipsam sed iste eius. Nam at quae ducimus dicta delectus</p>
                    <div className="date small-text-bold">OCTOBER 9, 2018</div>
                </Description>
            </Post>
            <Post>
                <ImageArea>
                    <img src={require(`../../../images/Post2.jpg`)} style={{height: '210px', width: '260px', margin: '0 40px 25px 0'}}  alt=""/>
                    <div className="overlay" style={{height: '210px', width: '260px'}}>
                        <ButtonWhite className='btn small-text-bold' text='READ THE FULL STORY'/>
                    </div>
                </ImageArea>
                <Description style={{width: '280px'}}>
                    <div className="title">More coffee, lower death risk?</div>
                    <p>Eveniet itaque aperiam qui officia in ducimus. Voluptas culpa ut eligendi in. Minima est dolores dolore aut et et alias p</p>
                    <div className="date small-text-bold">OCTOBER 9, 2018</div>
                </Description>
            </Post>
            <Post>
                <ImageArea>
                    <img src={require(`../../../images/art2.jpg`)} style={{height: '210px', width: '260px', margin: '0 40px 25px 0'}}  alt=""/>
                    <div className="overlay" style={{height: '210px', width: '260px'}}>
                        <ButtonWhite className='btn' text='READ THE FULL STORY'/>
                    </div>
                </ImageArea>
                <Description style={{width: '280px'}}>
                    <div className="title">How long does a cup of coffee keep you awake?</div>
                    <p>It is a paradisematic country, in which roasted parts. Vel qui et ad voluptatem.</p>
                    <div className="date small-text-bold">OCTOBER 9, 2018</div>
                </Description>
            </Post>
            <Post>
                <ImageArea>
                    <img src={require(`../../../images/art3.jpg`)} style={{height: '210px', width: '260px', margin: '0 40px 25px 0'}}  alt=""/>
                    <div className="overlay" style={{height: '210px', width: '260px'}}>
                        <ButtonWhite className='btn' text='READ THE FULL STORY'/>
                    </div>
                </ImageArea>
                <Description style={{width: '280px'}}>
                    <div className="title">Recent research suggests that heavy coffee drinkers may reap health benefits.</div>
                    <p>It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <div className="date small-text-bold">OCTOBER 9, 2018</div>
                </Description>
            </Post>
            <Post>
                <ImageArea>
                    <img src={require(`../../../images/art1.jpg`)} style={{height: '210px', width: '260px', margin: '0 40px 25px 0'}}  alt=""/>
                    <div className="overlay" style={{height: '210px', width: '260px'}}>
                        <ButtonWhite className='btn' text='READ THE FULL STORY'/>
                    </div>
                </ImageArea>
                <Description style={{width: '280px'}}>
                    <div className="title">Health Check: why do I get a headache when I haven’t had my coffee?</div>
                    <p>It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <div className="date small-text-bold">OCTOBER 9, 2018</div>
                </Description>
            </Post>
        </Posts>
    )
}
