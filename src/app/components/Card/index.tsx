interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = (props: CardProps) => {
  const { children, className } = props

  const defaultClass = 'w-full h-full bg-white rounded-md shadow-lg'

  return (
    <div className={`${defaultClass} ${className}`}>{children}</div>
  )
}

export default Card
