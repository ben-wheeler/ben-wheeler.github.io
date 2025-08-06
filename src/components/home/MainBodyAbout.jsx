import React from "react";
import { Jumbotron } from "./migration";

const MainBodyAbout = React.forwardRef(
    (
        {
            mainBody,
            about
        },
        ref
    ) => {
        const [profilePicUrl, setProfilePicUrl] = React.useState("");
        const [showPic] = React.useState(Boolean(about.imageLink));

        React.useEffect(() => {
            setProfilePicUrl(about.imageLink);
        }, [about.imageLink]);

        return (
            <Jumbotron
                fluid
                id="home"
                style={{
                    background: `linear-gradient(136deg,${mainBody.gradientColors})`,
                    backgroundSize: "1000% 1000%"
                }}
                className="bg-transparent bgstyle text-light m-0"
            >
                <div className="row align-items-start">
                    <div className="col-lg-6 pb-5 px-0">
                        <div className="d-flex flex-wrap flex-lg-nowrap align-items-end justify-content-end px-5">
                            <div className="text-end">
                                <h1 ref={ref} className="display-2 mb-3 name-nowrap">
                                    {`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
                                </h1>
                                <div className="lead mb-3">{mainBody.message}</div>

                                <div className="d-flex flex-wrap align-items-end justify-content-end gap-3">
                                    {mainBody.icons.map((icon, index) => {
                                        const isBrand =
                                            icon.image.includes("fa-github") ||
                                            icon.image.includes("fa-linkedin") ||
                                            icon.image.includes("fa-discord") ||
                                            icon.image.includes("fa-app-store");

                                        const iconClass = `${isBrand ? "fab" : "fas"} ${icon.image} fa-2x socialicons`;

                                        return (
                                            <a
                                                key={`social-icon-${index}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href={icon.url}
                                                aria-label={`My ${icon.image.split("-")[1]}`}
                                            >
                                                <i className={iconClass} />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                            {showPic && (
                                <div className="me-lg-5 mx-5">
                                    <img
                                        className="border border-secondary rounded-circle"
                                        src={profilePicUrl}
                                        alt="profilepicture"
                                        width={about.imageSize}
                                        height={about.imageSize}
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    {about.show && (
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-12">
                                    {about.message.split("\n\n").map((para, index) => (
                                        <p key={index} className="lead text-start">
                                            {para}
                                        </p>
                                    ))}
                                    {about.resume && (
                                        <p className="lead text-center">
                                            <a
                                                className="btn btn-outline-light btn-lg"
                                                href={about.resume}
                                                target="_blank"
                                                rel="noreferrer noopener"
                                                role="button"
                                                aria-label="Resume/CV"
                                            >
                                                View Resume
                                            </a>
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </Jumbotron>
        );
    }
);

export default MainBodyAbout;
