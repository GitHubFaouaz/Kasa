import style from "./Card.module.css";
import { Link } from "react-router-dom";
function Card({ cover, title, id }) {
  return (
    <div className={style.card_logement}>
      <Link className={style.link_card_logement} to={`/logement/${id}`}>
        <article className={style.article_card}>
          <img src={cover} alt={title} className={style.article_card_img} />
          <div className={style.article_contaner_title}>
            <p className={style.article_title}>{title}</p>
          </div>
        </article>
      </Link>
    </div>
  );
}

export default Card;
