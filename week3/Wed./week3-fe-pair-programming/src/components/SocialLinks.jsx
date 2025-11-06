import { socialLinks } from "../data";
import SocialLink from "./SocialLink";

const SocialLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id="nav-icon">
      {socialLinks.map((link) => {
        return <SocialLink key={link.id} link={link} itemClass={itemClass} />;
      })}
    </ul>
  );
};

export default SocialLinks;
