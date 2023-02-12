import style from "./Banner.module.css";

function Banner({ image, text }) {
  return (
    <div className={style.banner_container}>
      <img src={image} alt={text} className={style.banner_image} />
      <h1 className={style.banner_text}>{text}</h1>
    </div>
  );
}
export default Banner;
