import React from 'react'
import './Contact.css';

const Contact = () => {
  return (
    <div className='abc'>
      <form>
        <h1>CONTACT US</h1>
        <table>
          <tr>
            <td>Name: <input type="text" /></td>
          </tr>
          <tr>
            <td>Email :<input type="text" /></td>
          </tr>
          <tr>
            <td>Contact: <input type="text" /></td>
          </tr>
          <tr>
            <td>Address: <input type="text" /></td>
          </tr>
          <tr><button>SUBMIT</button></tr>
        </table>
      </form>
    </div>
  )
}

export default Contact