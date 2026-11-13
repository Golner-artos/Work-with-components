import './PostCard.css';

function PostCard({ title, date, text, image }) {
  return (
    <article className="card">
      <img className="card__image" src={image} alt={title} />
      <div className="card__body">
        <h2 className="card__title">{title}</h2>
        <time className="card__date">{date}</time>
        <p className="card__text">{text}</p>
      </div>
    </article>
  );
}

export default PostCard;