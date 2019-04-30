import React from 'react'
import TickectRow from './TicketRow';
const TicketTable = (props) => { 
    return (
        <table border='1'>
            <thead>
                <tr>
                  <th>Code</th>  
                  <th>Name</th>  
                  <th>Department</th>  
                  <th>message</th>  
                  <th>Priority</th>  
                  <th>Status</th>  
                </tr>
            </thead>
            <tbody>
                {props.tickets.map((ticket) => {
                    return (
                        <TickectRow
                            key={ticket.ticket_code}
                            ticket_code={ticket.ticket_code}
                            name={ticket.name}
                            department={ticket.department}
                            message={ticket.message}
                            priority={ticket.priority}
                            status={ticket.status}
                        />
                            
                            
                        
                    )
                })}
            </tbody>
        </table>
    )

}
export default TicketTable
