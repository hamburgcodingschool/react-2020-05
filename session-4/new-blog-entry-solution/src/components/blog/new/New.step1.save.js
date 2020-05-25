import React, { useState } from 'react'
import style from './New.module.css'

const New = ({add}) => {
  const initialEmptyBlogEntry = {
    text: '',
    author: '',
    copy: '',
    image: '',
    publish: false
  }
  const [blogEntry, setBlogEntry] = useState(initialEmptyBlogEntry)

  const changeText = (event) => {
    const { value: text } = event.currentTarget
    const newBlogEntry = { ...blogEntry, text }
    setBlogEntry(newBlogEntry)
  }
  const changePublish = (event) => {
    const {checked: publish} = event.currentTarget
    setBlogEntry({ ...blogEntry, publish })
  }
  const changeAuthor = (event) => {
    const {value: author} = event.currentTarget
    setBlogEntry({ ...blogEntry, author })
  }
  const changeCopy = (event) => {
    const {value: copy} = event.currentTarget
    setBlogEntry({ ...blogEntry, copy })
  }
  const changeImage = (event) => {
    const {value: image} = event.currentTarget
    setBlogEntry({ ...blogEntry, image })
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    add({...blogEntry, created: Date.now()})
    // clear state data
    setBlogEntry(initialEmptyBlogEntry)
  }

  return (
    <form className={style.new} onSubmit={handleFormSubmit}>
      <h3 className={style.headline}>Create New Entry</h3>

      <input
        type="checkbox"
        name="publish"
        id="publish"
        checked={blogEntry.publish}
        onChange={changePublish}
        className={style.checkbox}
      />
      <label htmlFor="publish" className={style.labelInline}>publish</label>

      <label htmlFor="title" className={style.label}>Title</label>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Your Blog Title"
        value={blogEntry.text}
        onChange={changeText}
        className={style.input}
      />

      <label htmlFor="author" className={style.label}>Author</label>
      <input
        type="text"
        name="author"
        id="author"
        value={blogEntry.author}
        onChange={changeAuthor}
        className={style.input}
      />

      <label htmlFor="copy" className={style.label}>Copy</label>
      <textarea
        className={style.textarea}
        name="copy"
        onChange={changeCopy}
        value={blogEntry.copy}
        id="copy"
      />

      <label htmlFor="image" className={style.label}>Image Path</label>
      <input
        type="text"
        name="image"
        id="image"
        value={blogEntry.image}
        onChange={changeImage}
        className={style.input}
      />

      <button type="submit" className={style.button}>
        {blogEntry.publish ? 'publish' : 'create only'}
      </button>
    </form>
  )
}

export default New
