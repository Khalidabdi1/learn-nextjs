import React from 'react'

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <nav>this nav</nav>
      {children}
      <footer>this footer</footer>
    </div>
  )
}

export default Layout
