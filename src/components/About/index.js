import React from 'react'; 

function About() {
    return (
        <section className="my-5">
            <img className='profile' alt='profile' src={require(`../../assets/images/profile.jpeg`)}></img> 
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

export default About;