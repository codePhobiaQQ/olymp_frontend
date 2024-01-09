import React, { HTMLAttributes } from 'react';
import cls from './Title.module.scss';
import cn from 'classnames';

import {
  colorClsMapper,
  colorType,
  fontFamilyClsMapper,
  fontFamilyType,
  fontSizeClsMapper,
  fontSizeType,
} from '@shared/lib/hooks/componentsSettings';

export type titleType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface TitleI extends HTMLAttributes<HTMLHeadingElement> {
  className?: string;
  tag?: titleType;
  fontSize?: fontSizeType;
  fontFamily?: fontFamilyType;
  color?: colorType;
  isUnderline?: boolean
  isUpperCase?: boolean
  text: string;
}

const Title = (props: TitleI) => {
  let {
    className = '',
    tag = 'h2',  text,
    color = 'default',
    fontFamily = 'lb',
    isUnderline = true,
    isUpperCase = true,
    fontSize = '28',
    ...otherProps
  } = props;

  const textContent = detectAndWrapLinks(text)

  const classes = cn(
    cls.Title,
    { [cls.underline]: isUnderline, [cls.uppercase]: isUpperCase },
    colorClsMapper[color],
    fontFamilyClsMapper[fontFamily],
    fontSizeClsMapper[fontSize],
    className
    );

  if (tag === 'h1') {
    return (
      <h1 {...otherProps} className={classes}>
        {textContent}
      </h1>
    );
  }

  if (tag == 'h2') {
    return (
      <h2 {...otherProps} className={classes}>
        {textContent}
      </h2>
    );
  }

  if (tag === 'h3') {
    return (
      <h3 {...otherProps} className={classes}>
        {textContent}
      </h3>
    );
  }

  if (tag === 'h4') {
    return (
      <h4 {...otherProps} className={classes}>
        {textContent}
      </h4>
    );
  }

  if (tag === 'h5') {
    return (
      <h5 {...otherProps} className={classes}>
        {textContent}
      </h5>
    );
  }

  if (tag === 'h6') {
    return (
      <h6 {...otherProps} className={classes}>
        {textContent}
      </h6>
    );
  }
};

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

export default Title;
