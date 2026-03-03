export default Myskills;

function Myskills() {
    const images = [
    "/64px-Blender_logo_no_text.svg.png",
    "/cpp.png",
    "/Csharp_Logo.png",
    "/Figma-1-logo.png",
    "/Css_logo.png",
    "/Html_logo.png",
    "/JavaScriptLogo.png",
    "/React.png",
    ];

    return (
    <div className="Aboutme-Card">
        <h1 className="Aboutme-h1">My Skills</h1>
        <div className="Line"></div>
        <div className="Aboutme-Card-Margin">
        {images.map((src) => (
            <div className="skill-logo-box" key={src}>
                <img
                src={src}
                alt=""
                className={`skill-logo ${src.includes("Csharp") ? "skill-logo-csharp" : ""}`}
                />
            </div>
            ))}
        </div>
    </div>
    );
}

