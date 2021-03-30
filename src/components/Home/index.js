import React from 'react'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
    return (
        <section className="my-5">
            <div class="animated-title">
                <div class="text-top">
                    <div>
                    <span>Hello,</span>
                    <span>I'm Sara Hu.</span>
                    </div>
                </div>
                <div class="text-bottom">
                    <div>
                        <span>Front-End Developer,</span>
                        <span>Art Hobbist,</span>
                        <span>and</span>
                        <span>Animal Enthusiast.</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;