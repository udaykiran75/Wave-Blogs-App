import './index.css'

import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogData} = props

  return (
    <ul className="blogList-container">
      {blogData.map(blogItem => (
        <BlogItem blogItem={blogItem} key={blogItem.id} />
      ))}
    </ul>
  )
}
export default BlogList
