import React, { Component } from 'react'
import loading from './loading.gif';

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-centre d-flex align-items-center justify-content-center my-3'>
        <img src={loading} alt='Loading'/>
      </div>
    )
  }
}
