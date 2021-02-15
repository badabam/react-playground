import React from 'react'
import Card from '../Card'
import Header from '../Header'

export default function App() {
  return (
    <>
      <Header title="React App" />
      <Card
        radius="10"
        color="hotpink"
        question="What does React do?"
        answer="It helps us creating components"
        showAnswer
      />
      <Card
        color="#c0ffee"
        question="What is JSX?"
        answer="It is pseudo HTML to create elements in JS"
      />
      <Card
        radius="40"
        color="rgb(100, 150, 180)"
        question="Can I create my own HTMLElements?"
        answer="Kind of"
        showAnswer
      />
    </>
  )
}
