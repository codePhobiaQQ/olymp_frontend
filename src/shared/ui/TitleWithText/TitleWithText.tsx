import Title from '@shared/ui/Title/Title'
import cls from './TitleWithText.module.scss'
import cn from 'classnames'
import Text from '@shared/ui/Text/Text'
import { ReactNode } from 'react'

interface TitleWithTextI {
  className?: string
  title?: string
  text?: ReactNode | string
  button?: ReactNode
  author?: string

  // Classes
  titleClassname?: string
  authorClassname?: string
  textClassname?: string
}

const TitleWithText = (props: TitleWithTextI) => {
  const { className = '', title, text, author, titleClassname, authorClassname, textClassname, button } = props

  let textContent
  if (typeof text == 'string') {
    textContent = <Text className={cn(textClassname)} text={text} />
  } else {
    textContent = text
  }

  return (
    <div className={cn(className)}>
      <div className={cn(cls.TitleWithTextWrapperInner)}>
        <div className={cls.TitleWrapper}>
          <Title className={cn(cls.Title, titleClassname)} tag='h3' text={title} />
          {author && <Text text={author} className={cn(cls['AuthorWrapper'], authorClassname)} />}
        </div>

        <div className={cn(cls.TextWrapper)}>
          {textContent}
          {button && button}
        </div>
      </div>
    </div>
  )
}

export default TitleWithText
