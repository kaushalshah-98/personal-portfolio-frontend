import { FaLinkedin, FaGithubSquare, FaMedium, FaStackOverflow, FaYoutube } from "react-icons/fa";

const SocialLinks = () => {
  const styleClassName = "cursor-pointer m-4 text-2xl";
  return (
    <div className="flex py-2 justify-center">
      <FaLinkedin
        size={32}
        onClick={() => window.open(process.env.NEXT_PUBLIC_LINKEDIN_PROFILE_URL, "_blank")}
        className={styleClassName}
      />
      <FaYoutube
        size={32}
        onClick={() => window.open(process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_URL, "_blank")}
        className={styleClassName}
      />
      <FaGithubSquare
        size={32}
        onClick={() => window.open(process.env.NEXT_PUBLIC_GITHUB_PROFILE_URL, "_blank")}
        className={styleClassName}
      />
      <FaMedium
        size={32}
        onClick={() => window.open(process.env.NEXT_PUBLIC_MEDIUM_PROFILE_URL, "_blank")}
        className={styleClassName}
      />
      <FaStackOverflow
        size={32}
        onClick={() => window.open(process.env.NEXT_PUBLIC_STACKOVERFLOW_PROFILE_URL, "_blank")}
        className={styleClassName}
      />
    </div>
  );
};

export default SocialLinks;
