import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const PostStyle = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #ddd;
    padding: 20px;
    margin-bottom: 20px;
    text-decoration: none;
    color: #000;
    h2 {
        margin-top: 0;
    }
`
const HomeStyle = styled.div`
    max-width: 960px;
    margin: 50px auto 0;
`

const Home = () => {
    const [postsData, setPostsData] = useState([]);

    const navigate = useNavigate();

    const dataHandler = async () => {
        try {
            const res = await axios.get('postData.json');
            setPostsData(res.data);
        }
        catch(err) {
            console.log("some server error...", err);
        }
    }

    useEffect(() => {
        dataHandler();
    }, [postsData]);
    
    const redirectHandler = (id, title, content) => {
        navigate(`/post/${id}`, {
            state: {
                id: id,
                title: title,
                content: content
            }
        });
    }

    return (
        <HomeStyle>
            {postsData.map((post) => {
                const { id, title, content } = post;
            return (
                <PostStyle onClick={() => redirectHandler(id, title, content)} key={id}>
                    <h2>{title}</h2>
                    <p>{content}</p>
                </PostStyle>
            )
        })}
        </HomeStyle>
    );
}

export default Home;
