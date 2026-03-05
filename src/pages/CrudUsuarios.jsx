import React from 'react'

import FormRegistro from '../components/FormRegistro.jsx'

function CrudUsuarios() {



  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      width: '100%'
    }}>
      <FormRegistro />
    </div>
  )
}

export default CrudUsuarios