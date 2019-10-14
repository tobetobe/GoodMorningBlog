import React from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import testArticle from '../../publish/testArticle.md'

class Article extends React.Component {
  constructor () {
    super()
    this.state = {
      article: testArticle
    }
  }

  // componentDidMount () {
  //   fetch(testArticle)
  //     .then(response => response.text())
  //     .then(text => this.setState({ article: text }))
  //     .catch(error => console.error(error))
  // }

  render () {
    const { article } = this.state
    console.log(article)
    return (
      <div>
        <h2>Article</h2>
        <div>
          <ReactMarkdown source={this.state.article} escapeHtml={false} />
        </div>
      </div>
    )
  }
}

export default Article
