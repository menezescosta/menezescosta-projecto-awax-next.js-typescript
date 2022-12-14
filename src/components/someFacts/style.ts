import styled from "styled-components";

export const Container = styled.div`
    padding-top: 2rem;
    padding-bottom: 2rem;
    background-color:#000;
    .title{
        text-align: center;
        h2{
            color: #fff;
            font-size: 1.9rem;
        }
        span{
            color: #999;
            font-weight: 600;
            font-size: 1rem;
        }
    }
`;
export const Services = styled.div`
    margin-top:2rem ;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    >div{
        padding: 2rem;
        width: max-content;
        max-width: 15rem;
        text-align: center;
        .name{
            color: #fff;
            font-weight: 600;
            font-size: 1.2rem;
            margin-top: 1rem;
        }
        small{
            color: #999;
        }
        .number{
            color:#B28756;
            font-size: 3.3rem;
            font-weight: 600;
        }
        .border{
            width: 2rem;
            height: .3rem;
            background-color: #B28756;
            margin: auto;
        }
    }
`;