import React, { useState } from 'react'
import style from './New.module.css'

const New = ({addBlogEntry}) => {
  const initialState = {
    title: '',
    copy: '',
    author: '',
    publish: false,
    image: ''
  }
  const [newBlogEntry, setNewBlogEntry] = useState(initialState)

  const changeTitle = (event) => {
    const {value:title} = event.currentTarget
    setNewBlogEntry({...newBlogEntry, title})
  }
  const changePublish = (event) => {
    const {checked: publish} = event.currentTarget
    setNewBlogEntry({...newBlogEntry, publish})
  }
  const changeAuthor = (event) => {
    const value = event.currentTarget.value
    setNewBlogEntry({...newBlogEntry, author: value})
  }
  const changeCopy = (event) => {
    const value = event.currentTarget.value
    setNewBlogEntry({...newBlogEntry, copy: value})
  }
  const changeImage = (event) => {
    const value = event.currentTarget.value
    setNewBlogEntry({...newBlogEntry, image: value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('submit the form')
    addBlogEntry({...newBlogEntry, created: Date.now()})
    setNewBlogEntry(initialState)
  }

  return (
    <form className={style.new} onSubmit={handleSubmit}>
      <h3 className={style.headline}>Create New Entry</h3>

      <input
        type="checkbox"
        name="publish"
        id="publish"
        checked={newBlogEntry.publish}
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
        value={newBlogEntry.title}
        onChange={changeTitle}
        className={style.input}
      />

      <label htmlFor="author" className={style.label}>Author</label>
      <input
        type="text"
        name="author"
        id="author"
        value={newBlogEntry.author}
        onChange={changeAuthor}
        className={style.input}
      />

      <label htmlFor="copy" className={style.label}>Copy</label>
      <textarea
        className={style.textarea}
        name="copy"
        onChange={changeCopy}
        value={newBlogEntry.copy}
        id="copy"
      />

      <label htmlFor="image" className={style.label}>Image Path</label>
      <input
        type="text"
        name="image"
        id="image"
        value={newBlogEntry.image}
        onChange={changeImage}
        className={style.input}
      />

      <button type="submit" className={style.button}>
        {newBlogEntry.publish ? 'publish' : 'create only'}
      </button>
    </form>
  )
}

export default New
