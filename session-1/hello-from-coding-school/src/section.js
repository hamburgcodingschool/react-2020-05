import React from 'react'

export default function Section({name, title, copy}) {
  return (
    <section>
      <h2>{title}</h2>
      <p>{copy}</p>
      <p>{name}</p>
      <a href="https://hamburgcodingschool.com/">https://hamburgcodingschool.com/</a>
    </section>
  )
}
