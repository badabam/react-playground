import React from 'react'
import Card from './Card'

export default {
  title: 'Card',
  component: Card,
}

export const defaultCard = () => (
  <Card question="What?" answer="This!" showAnswer />
)

export const withoutAnswer = () => (
  <Card question="What?" answer="This!" color="hotpink" />
)
