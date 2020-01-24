import styled from 'styled-components';

export const SmallText = styled.div`
    text-align: center;
    h2 {
        margin-top: 20px;
        margin-bottom: 15px;
        font-size: 28px;
        line-height: 40px;
        font-weight: 400;
    }
    p {
        color: rgba(29, 31, 46, 0.7);
        line-height: 28px;
    }
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 570px;
    h1 {
        margin-top: 110px;
        margin-bottom: 15px;
        font-size: 36px;
        line-height: 50px;
        font-weight: 400;
    }
    p {
        color: rgba(29, 31, 46, 0.7);
        font-size: 18px;
        line-height: 30px;
    }
`;

export const DecoBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 530px;
    width: 100%;
    margin-bottom: -110px;
    background-color: #f6f6f6;
`;

export const Wrap = styled.div`
    width: 940px;
`;

export const WideWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1440px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;