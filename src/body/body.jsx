import './body.css'
import danceMan from '../assets/dance.png'
import CustomButton from '../myComponents/CustomButton'

function Body(props){
    return (
        <>
            <div className="body-main">
                <div className="intro">
                    <span>Hello, I am</span>
                    <code><h1 >Shreeti Bajracharya</h1></code>
                    <h3>Frontend Developer</h3>
                    <p>Remember, the optimal values for these properties will depend on the specific photo and the desired outcome. Experimentation and personal preference play a significant role in achieving the perfect photo editing result. The value of various properties for perfect photo editing in an iPhone can vary depending on the specific requirements and preferences of the user. However, here are some general guidelines:</p>
                    <div className='action'>
                        <CustomButton colorClass="btn-style1" title="Hire Me"></CustomButton>
                        <CustomButton id="download" colorClass="btn-style2" title="Download CV"></CustomButton>
                    </div>
                </div>
                <div className="profile">
                    <img src='https://th.bing.com/th/id/R.c21a1e0c97117020db135ccfb0bf7d99?rik=hY1YQAc06rK1Xg&riu=http%3a%2f%2fwww.baltana.com%2ffiles%2fwallpapers-8%2fComputer-Coding-HD-Wallpaper-24750.jpg&ehk=yE2H%2fob0s1yvNHVFxWvHIXGnq42tT%2fafZSjwoIyeyFs%3d&risl=&pid=ImgRaw&r=0'></img>
                </div>
            </div>
        </>
    )
}

export default Body