import React from 'react'

interface LogoProps {
    source: string,
    title?: string
  }

const Logo: React.FC<LogoProps> = () => {
  return (
    <div>Logo</div>
  )
}

export default Logo