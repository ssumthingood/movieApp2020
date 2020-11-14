import React from 'react';
import './About.css';

function About(props){
    console.log(props);
    return(
        <div className="about__container">
            <span>"대충 흑백사진에 글쓰면 명언같다."</span>
            <span>- 박준홍, 2020</span>
        </div>
    );
}

export default About;
