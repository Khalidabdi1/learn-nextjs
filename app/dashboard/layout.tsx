import React from 'react'

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <nav>this nav test</nav>
      {children}
      <footer>this footer</footer>
    </div>
  )
}

export default Layout
