import * as React from 'react'
import { Container } from '@shared/hoc/Container/Container'
import { useEffect } from 'react'
import axios from 'axios'

type Props = {};

export const MainScreen = (props: Props) => {

  // useEffect(() => {
  //   axios.get('http://localhost:8000/olymp/wp-json/wp/v2/posts').then(res => {
  //     console.log(res)
  //   })
  // }, [])

  return (
    <Container>
      main screen
    </Container>
  )
}