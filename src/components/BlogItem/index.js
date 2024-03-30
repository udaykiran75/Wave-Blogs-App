import './index.css'
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {blogItem} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogItem

  return (
    <Link to={`/blogs/${id}`} className="link-element">
      <li className="blog-container">
        <img className="item-image" src={imageUrl} alt={`item${id}`} />
        <div className="blog-item-content-div">
          <p className="item-topic">{topic}</p>
          <h1 className="item-title">{title}</h1>
          <div className="author-info">
            <img className="avatar" src={avatarUrl} alt={`avatar${id}`} />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}
export default BlogItem
