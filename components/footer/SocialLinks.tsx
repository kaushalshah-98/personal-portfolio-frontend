import { FaLinkedin, FaGithubSquare, FaMedium, FaStackOverflow, FaYoutube } from "react-icons/fa";

const SocialLinks = () => {
  const styleClassName = "cursor-pointer m-4 text-2xl";
  return (
    <div className="flex py-2 justify-center">
      <FaLinkedin
        onClick={() => window.open(process.env.NEXT_PUBLIC_LINKEDIN_PROFILE_URL, "_blank")}
        className={styleClassName}
      />
      <FaYoutube
        onClick={() => window.open(process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_URL, "_blank")}
        className={styleClassName}
      />
      <FaGithubSquare
        onClick={() => window.open(process.env.NEXT_PUBLIC_GITHUB_PROFILE_URL, "_blank")}
        className={styleClassName}
      />
      <FaMedium
        onClick={() => window.open(process.env.NEXT_PUBLIC_MEDIUM_PROFILE_URL, "_blank")}
        className={styleClassName}
      />
      <FaStackOverflow
        onClick={() => window.open(process.env.NEXT_PUBLIC_STACKOVERFLOW_PROFILE_URL, "_blank")}
        className={styleClassName}
      />
    </div>
  );
};

export default SocialLinks;
