import React, { CSSProperties, HTMLAttributes, ReactNode, useMemo } from 'react'
import cls from './Text.module.scss'
import cn from 'classnames'
import { heightType, widthClsMapper, heightClsMapper, widthType } from '@shared/lib/utils/widthHeightClassesMappers'
import {
  colorClsMapper,
  colorType, fontFamilyClsMapper, fontFamilyType,
  fontSizeClsMapper,
  fontSizeType, textAlignClsMapper,
  textAlignType
} from '@shared/lib/hooks/componentsSettings';

export interface TextI extends HTMLAttributes<HTMLParagraphElement> {
  className?: string
  text?: string
  children?: ReactNode
  isParagraph?: boolean
  isUppercase?: boolean
  color?: colorType
  fontSize?: fontSizeType
  dataAttr?: string
  fontFamily?: fontFamilyType
  textAlign?: textAlignType
  marginAuto?: boolean
  clickHandler?: () => void
  styling?: CSSProperties
  width?: widthType
  height?: heightType
}

const Text = (data: TextI) => {
  const {
    className = '',
    text,
    isParagraph = false,
    dataAttr = '',
    color = 'default',
    fontSize = '20',
    textAlign = 'left',
    fontFamily = 'mr',
    marginAuto = false,
    isUppercase = false,
    children,
    clickHandler = () => {},
    styling = {},
    width,
    height,
    ...otherProps
  } = data

  const classing = cn(
    className,
    cls.Text,
    colorClsMapper[color],
    fontSizeClsMapper[fontSize],
    textAlignClsMapper[textAlign],
    fontFamilyClsMapper[fontFamily],
    {
      [cls.marginAuto]: marginAuto,
      [heightClsMapper[height || 'all']]: height,
      [widthClsMapper[width || 'all']]: width,
      [cls.Uppercase]: isUppercase
    },
    cls[color]
  )

  const textWithLinks = useMemo(() => {
    if (children && typeof children != 'string') {
      return children
    } else if (children && typeof children == 'string') {
      return detectAndWrapLinks(children)
    } else if (text) {
      return detectAndWrapLinks(text)
    }
  }, [text, children])

  if (!text) {
    return null
  }

  if (isParagraph) {
    return (
      <p onClick={clickHandler} data-attr={dataAttr} className={classing} style={styling} {...otherProps}>
        {textWithLinks}
      </p>
    )
  }

  if (!isParagraph) {
    return (
      <span onClick={clickHandler} data-attr={dataAttr} className={classing} style={styling} {...otherProps}>
        {textWithLinks}
      </span>
    )
  }

  return null
}

export default Text

const detectAndWrapLinks = (text: string) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g
  const textArray = text?.split('\n')

  return textArray?.map((line, lineIndex) => (
    <React.Fragment key={lineIndex}>
      {lineIndex > 0 && <br />}
      {line.split(urlRegex).map((part, index) => {
        if (part.match(urlRegex)) {
          return (
            <a
              key={index}
              style={{ display: 'inline', textDecoration: 'underline', color: '#487cdb' }}
              href={part}
              target='_blank'
              rel='noopener noreferrer'
            >
              {part}
            </a>
          )
        } else {
          return part
        }
      })}
    </React.Fragment>
  ))
}
