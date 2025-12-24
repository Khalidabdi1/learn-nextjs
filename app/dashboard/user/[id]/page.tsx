import React from 'react'

const Deatails = async({params}:{params:Promise<{id:string}>}) => {

    const{id}= await params;

  return (
    <div>
      user details {id}
    </div>
  )
}

export default Deatails
