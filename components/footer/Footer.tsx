import CopyrightDeclaration from "./CopyrightDeclaration";
import SocialLinks from "./SocialLinks";

function Footer() {
  return (
    <footer className="py-5 flex flex-col justify-center">
      <SocialLinks />
      <CopyrightDeclaration />
    </footer>
  );
}

export default Footer;
