import React from 'react';
import './Message.less'

const Message = (props) => {

  const { massages } = props

  return (
    <div className='messages'>
      {
        massages.map(massage => (
          <div>
            <p>
              {massage.text}
            </p>
            <div>
              <span>
              {massage.login}
              </span>
            </div>
          </div>
        ))
      }
    </div>
  )
}
export default Message