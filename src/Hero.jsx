export default Hero

function Hero(){
    return (
        <div className="Hero-box">
            <img className= "Hero-img" src = "Hero.jpg" alt = "Hero photo" style={{width: 250}}></img>
            <h1 className="Hero-h1"> Hi, I'm <span style={{ color: '#1f7218' }}> Martynas Steponėnas</span> Software Enginner.</h1>
            <p className = "Hero-p">I’m a Software Engineering student passionate about front-end development and building modern, user-focused web applications. I enjoy turning ideas into interactive digital experiences using HTML, CSS, JavaScript, and React.</p>
        </div>
    )
}