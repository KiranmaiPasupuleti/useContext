import React from 'react'
import { UserContext,ChannelContext } from '../App'

function ComponentF() {
  return (
    <div>
        <UserContext.Consumer>
            {user => {
                return (
                    <ChannelContext.Consumer>
                        {channel => {
                            return (<h1>User Context value {user} , channel value {channel}</h1>)
                        }}
                    </ChannelContext.Consumer>
                ) 
            }}
        </UserContext.Consumer>
    </div>
  )
}

export default ComponentF