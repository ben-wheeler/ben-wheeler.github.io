import React from "react";
import Container from "react-bootstrap/Container";
import axios from "axios";
import { Jumbotron } from "./migration";

const pictureLinkRegex = new RegExp(
  /[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
);

const MainBodyAbout = React.forwardRef(
  (
    {
      mainBody,
      about
    },
    ref
  ) => {
    const [profilePicUrl, setProfilePicUrl] = React.useState("");
    const [showPic, setShowPic] = React.useState(Boolean(about.imageLink));

    React.useEffect(() => {
      const handleRequest = async () => {
        const instaLink = "https://www.instagram.com/";
        const instaQuery = "/?__a=1";
        try {
          const response = await axios.get(instaLink + about.imageLink + instaQuery);
          setProfilePicUrl(response.data.graphql.user.profile_pic_url_hd);
        } catch (error) {
          setShowPic(false);
          console.error(error.message);
        }
      };

      if (about.imageLink && !pictureLinkRegex.test(about.imageLink)) {
        handleRequest();
      } else {
        setProfilePicUrl(about.imageLink);
      }
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
        <Container>
          <div className="row align-items-center">
            {/* LEFT COLUMN - MainBody */}
            <div className="col-lg-6 text-center p-5">
              <h1 ref={ref} className="display-2">
                {`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
              </h1>
              <div className="lead mb-3">{mainBody.message}</div>
              {mainBody.icons.map((icon, index) => {
                const isBrand =
                  icon.image.includes("fa-github") ||
                  icon.image.includes("fa-linkedin") ||
                  icon.image.includes("fa-discord") ||
                  icon.image.includes("fa-app-store");

                const iconClass = `${isBrand ? "fab" : "fas"} ${
                  icon.image
                } fa-2x socialicons`;

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

            {/* RIGHT COLUMN - AboutMe */}
            {about.show && (
              <div className="col-lg-6">
                <div className="row">
                  {showPic && (
                    <div className="col-12 text-center mb-3">
                      <img
                        className="border border-secondary rounded-circle"
                        src={profilePicUrl}
                        alt="profilepicture"
                        width={about.imageSize}
                        height={about.imageSize}
                      />
                    </div>
                  )}
                  <div className="col-12">
                    <h2 className="display-4 text-center">{about.heading}</h2>
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
        </Container>
      </Jumbotron>
    );
  }
);

export default MainBodyAbout;
