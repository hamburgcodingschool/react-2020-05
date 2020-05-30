import React from 'react'

const Person = ({ person }) => {
  return (
    <section
      style={{
        margin: 50,
        padding: 20,
        borderRadius: '0.5em',
        border: '1px solid #cdcdcd',
      }}
    >
      <h3>
        {person.personal.name} {person.personal.last_name}
      </h3>
      <p>Age: {person.personal.age}</p>
      <p>Country: {person.personal.country}</p>
    </section>
  )
}

export default Person
