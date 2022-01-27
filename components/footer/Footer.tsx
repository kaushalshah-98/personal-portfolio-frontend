import CopyrightDeclaration from "./CopyrightDeclaration";
import SocialLinks from "./SocialLinks";
import SubscribeToNewsLetter from "./SubscribeToNewsLetter";

function Footer() {
  return (
    <footer className="py-5 flex flex-col justify-center">
      {/* <SubscribeToNewsLetter /> */}
      <div className="divide-y"></div>
      <SocialLinks />
      <CopyrightDeclaration />
    </footer>
  );
}

export default Footer;
