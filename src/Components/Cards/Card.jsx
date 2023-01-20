import style from "./Card.module.css";

function Card({ cover, title }) {
  return (
    <article className={style.article_card}>
      <img src={cover} alt="cover" className={style.article_card_img} />
      <div className={style.article_contaner_title}>
        <p className={style.article_title}>{title}</p>
      </div>
    </article>
  );
}

export default Card;
