import * as React from 'react'
import { Container } from '@shared/hoc/Container/Container'
import { olympsList } from '@core/mocks/olymps'
import { Card } from '@shared/ui/cards/Card/Card'
import { CardsLayout } from '@shared/ui/cards/CardsLayout/CardsLayout'

export const OlympsScreen = () => {
  return (
    <Container>
      <CardsLayout className='pt-10 pb-10'>
        {olympsList.map(olymp => {
          return (
            <Card key={olymp.id} title={olymp.name} description={olymp.description} />
          )
        })}
      </CardsLayout>
    </Container>
  )
}