import cn from 'classnames'
import cls from './WpTextFormatter.module.scss'
import { autop } from '@wordpress/autop';

type WpTextFormatterProps = {
  className?: string;
  content: string;
};

export const WpTextFormatter = (props: WpTextFormatterProps) => {
  const { className, content } = props
  const formattedContent = autop(content);

  return (
    <div
      className={cn(className, cls.WpTextFormatter)}
      dangerouslySetInnerHTML={{ __html: formattedContent }}
    />
  )
}