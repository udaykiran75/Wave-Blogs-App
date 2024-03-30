import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'

class BlogItemDetails extends Component {
  state = {
    isLoading: true,
    blogData: [],
  }

  componentDidMount() {
    this.getDisplayBlogData()
  }

  getDisplayBlogData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const request = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const response = await request.json()

    const updatedData = {
      title: response.title,
      imageUrl: response.image_url,
      content: response.content,
      avatarUrl: response.avatar_url,
      author: response.author,
    }

    this.setState({isLoading: false, blogData: updatedData})
  }

  render() {
    const {isLoading, blogData} = this.state
    const {title, imageUrl, content, avatarUrl, author} = blogData

    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div className="blogItem-div">
            <h1 className="blog-title">{title}</h1>
            <div className="author-div">
              <img src={avatarUrl} className="avatar" alt={author}/>
              <p className="author-name">{author}</p>
            </div>
            <img src={imageUrl} className="blog-image" alt={title}/>
            <p className="blog-content">{content}</p>
          </div>
        )}
      </div>
    )
  }
}
export default BlogItemDetails
