import { socialData } from "../data";

const Socials = () => {
  return (
    <ui className="flex justify-center items-center gap-x-[30px] list-none">
      {socialData.map((item, index) => {
        return (
          <li key={index}>
            <a href={item.href} target="_blank" rel="noopener noreferrer">
              {item.icon}
            </a>
          </li>
        );
      })}
    </ui>
  );
};

export default Socials;
