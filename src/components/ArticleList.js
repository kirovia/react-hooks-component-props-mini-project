import React from "react"
import Article from "./Article"

function ArticleList(props) {
    const PostsArray = () => props.posts.map(item => <Article key={item.title} title={item.title} date={item.date} preview={item.preview} />)
    return (
        <main>
            <PostsArray />
        </main>
    )
}

export default ArticleList