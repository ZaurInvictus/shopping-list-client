import React from 'react'
import { CircleLoader } from 'react-spinners'


const customStyles = {
  content : {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
}

const Spinner = () => (
  <div style={customStyles.content}>
    <CircleLoader
      sizeUnit={"px"}
      size={150}
      color={'#5881b3'}
    />
  </div>
)

export default Spinner