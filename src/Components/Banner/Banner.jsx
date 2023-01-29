import style from "./Banner.module.css";

function Banner({ image, text }) {
  return (
    <div className={style.banner_container}>
      <div
        className={style.banner_text_container}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={style.banner_text}>{text}</div>
      </div>
    </div>
  );
}
export default Banner;
