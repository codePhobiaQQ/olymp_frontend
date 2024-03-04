import { Container } from '@shared/hoc/Container/Container'
import { ScreenTitle } from '@shared/ui/titles/ScreenTitle'

type Props = {};

export const AboutScreen = (props: Props) => {
  return (
    <section className='pt-12 pb-6'>
      <Container>
        <ScreenTitle text='О нас' />
        <div className='w-full md:w-2/3 ml-auto mt-12'>
          <p className='mb-5 text-xl'>Современное интернет пространство изобилует предложениями
            с бесплатными курсами, олимпиадами и конкурсами, не имеющими реальной ценности для абитуриентов при
            поступлении. </p>
          <p className='text-xl'>Проблему выбора действительно полезного ресурса
            для школьников решает портал v-olymp.ru,
            на котором представлены:</p>
        </div>
      </Container>
    </section>
  )
}