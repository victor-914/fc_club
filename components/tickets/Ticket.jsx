import React from 'react'
import styled from 'styled-components'
import { Color } from '../../utils/color'
import kano from "../../assets/kanoPillar.png"
function Ticket() {
  return (
    <StyledTicket>
      <main>
        <div className='againstWhom'>
          <main className="enemyTeam">
            <div className='imageContainer'>
              <Image src={kano} layout="fill"/>
            </div>
            <div className='enemyTeamPrice'></div>

          </main>

        </div>

        <div className='venue'>
          <div className='dateAndTime'></div>
          <div className='Location'></div>
        </div>

      </main>

      <footer>
        <button>
          News & Video
        </button>

        <button>
          Buy Ticket
        </button>
      </footer>
        
    </StyledTicket>
  )
}

export default Ticket


const StyledTicket = styled.div`
width: 100%;
padding: 20px;
height: 20vh;
background-color: green;
border-top:2px solid ${Color.primaryColor}



`