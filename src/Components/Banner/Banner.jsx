import style from "./Banner.module.css";

function Banner() {
  return (
    <div className={style.banner_container}>
      <div className={style.banner_text_container}>
        <div className={style.banner_text}>Chez vous, partout et ailleurs</div>
      </div>
    </div>
  );
}

export default Banner;
