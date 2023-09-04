import cn from 'classnames'

interface ArrowPlainSvgI extends React.SVGProps<SVGSVGElement> {
  className?: string
}

const CircleArrowSvg = ({ className = '' }: ArrowPlainSvgI) => {
  return (
    <svg className={cn(className)} viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19 9C19 8.44772 18.5523 8 18 8C17.4477 8 17 8.44772 17 9L19 9ZM17.2929 28.7071C17.6834 29.0976 18.3166 29.0976 18.7071 28.7071L25.0711 22.3431C25.4616 21.9526 25.4616 21.3195 25.0711 20.9289C24.6805 20.5384 24.0474 20.5384 23.6569 20.9289L18 26.5858L12.3431 20.9289C11.9526 20.5384 11.3195 20.5384 10.9289 20.9289C10.5384 21.3195 10.5384 21.9526 10.9289 22.3431L17.2929 28.7071ZM17 9L17 28L19 28L19 9L17 9Z"
        // fill='#9F9F9F'
        stroke="none"
      />
      <rect x="1" y="1" width="35" height="35" fill="none" rx="17.5" strokeWidth="2" />
    </svg>
  )
}

export default CircleArrowSvg
