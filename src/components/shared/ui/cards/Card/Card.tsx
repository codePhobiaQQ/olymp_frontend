import cls from './Card.module.scss'
import cn from 'classnames'

type Props = {
  title: string;
  description: string;
};

export const Card = (props: Props) => {
  const { title, description } = props

  return (
    <div className={cn(cls.Card, 'flex', 'flex-col', 'min-w-80', 'justify-between', 'flex-1')}>
      <h4>{title}</h4>
      <p>
        {description}
      </p>
      <div className={cn(cls['shine'])}></div>

      <div className={cn(cls['background'])}>
        <div className={cn(cls['tiles'])}>
          {Array(10).fill('').map((el, index) => (
            <div className={cn(cls['tile'], [cls[`tile-${index + 1}`]])}></div>
          ))}
        </div>
        {Array(3).fill('').map((el, index) => (
          <div className={cn(cls['line'], [cls[`line-${index + 1}`]])}></div>
        ))}
      </div>
    </div>
  )
}