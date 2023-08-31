import React from "react";
import SelectedPage from "../../components/selectedPage/selectedPage";
import pic from '../../assets/home/hero-bcg.a876f19f6786a3aca992.jpeg';
import './about.css';

const About=()=>{

    return(
        <div className="about-page">
            <SelectedPage page='About'/>
            <div className="about">
                <div className="image">
                    <img src={pic} alt="" />
                </div>
                <div className="info">
                    <h2>our story</h2>
                    <hr></hr>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste.</p>
                </div>
            </div>
        </div>
    );
}
export default About;