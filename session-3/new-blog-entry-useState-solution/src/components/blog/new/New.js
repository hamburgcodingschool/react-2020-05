import React, { useState } from 'react'
import style from './New.module.css'

const New = () => {
  const [text, setText] = useState('')
  const [publish, setPublish] = useState(false)
  const [author, setAuthor] = useState('')
  const [copy, setCopy] = useState('')
  const [image, setImage] = useState('')

  const changeText = (event) => {
    const value = event.currentTarget.value
    setText(value)
  }
  const changePublish = (event) => {
    const value = event.currentTarget.checked
    setPublish(value)
  }
  const changeAuthor = (event) => {
    const value = event.currentTarget.value
    setAuthor(value)
  }
  const changeCopy = (event) => {
    const value = event.currentTarget.value
    setCopy(value)
  }
  const changeImage = (event) => {
    const value = event.currentTarget.value
    setImage(value)
  }

  return (
    <form className={style.new}>
      <h3 className={style.headline}>Create New Entry</h3>

      <input
        type="checkbox"
        name="publish"
        id="publish"
        checked={publish}
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
        value={text}
        onChange={changeText}
        className={style.input}
      />

      <label htmlFor="author" className={style.label}>Author</label>
      <input
        type="text"
        name="author"
        id="author"
        value={author}
        onChange={changeAuthor}
        className={style.input}
      />

      <label htmlFor="copy" className={style.label}>Copy</label>
      <textarea
        className={style.textarea}
        name="copy"
        onChange={changeCopy}
        value={copy}
        id="copy"
      />

      <label htmlFor="image" className={style.label}>Image Path</label>
      <input
        type="text"
        name="image"
        id="image"
        value={image}
        onChange={changeImage}
        className={style.input}
      />

      <button type="submit" className={style.button}>
        {publish ? 'publish' : 'create only'}
      </button>
    </form>
  )
}

export default New
