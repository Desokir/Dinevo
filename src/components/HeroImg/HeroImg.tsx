import type { FC } from "react";
import "./HeroImg.css";
import Image from "next/image";

interface ImgItem {
  name: string;
  photo: string;
}

interface HeroImgProps {
  title: string;
  heroList: { [key: string]: ImgItem };
}

const HeroImg: FC<HeroImgProps> = ({ title, heroList }) => {
  const items = Object.values(heroList || {});

  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__left">
          <h1>{title}</h1>
        </div>

        <div className="hero__right">
          {items.map((item, index) => (
            <div className="hero__card" key={index}>
              <Image
                src={item.photo}
                alt={item.name}
              />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>  
  );
};

export default HeroImg;