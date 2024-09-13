import css from "./ImageCard.module.css";

function ImageCard({ image, openModal }) {
  const { urls, alt_description, user, likes } = image;

  const handleClickImg = () => {
    openModal(image);
  };

  return (
    <li className={css.galleryItem} onClick={handleClickImg}>
      <img src={urls.small} alt={alt_description} />
      <div className={css.imgInfo}>
        <p className={css.imgInfoText}>
          <span className={css.spanImgInfo}>Author</span>
          {user.name}
        </p>
        <p className={css.imgInfoText}>
          <span className={css.spanImgInfo}>Likes</span>
          {likes}
        </p>
      </div>
    </li>
  );
}

export default ImageCard;
