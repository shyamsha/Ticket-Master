import React from 'react'

const TicketRow = (props) => {
    return (
    <tr>
        <td>{props.ticket_code}</td>
        <td>{props.name}</td>
        <td>{props.department}</td>
        <td>{props.message}</td>
        <td>{props.priority}</td>
        <td>
            <input type='checkbox' defaultChecked={props.status === 'completeted'} />
        </td>
    </tr>
       
        
                        
    )
}
export default TicketRow
