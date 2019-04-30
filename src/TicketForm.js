import React from 'react'
import axios from 'axios'
// controller component - the value of form's field's are maintained in the state
class TicketForm extends React.Component{
    constructor () {
        super()
        this.state = {
            name: '',
            message: '',
            department: '', 
            priority: ''
        }
        this.nameHandle=this.nameHandle.bind(this)
    }
        // regular function - dont forget to bind the function in the constructor
        nameHandle(e) {
            const name = e.target.value
            this.setState(() => ({
                name 
            }))
        }
        
        
        handleMessageChange = (e) => {
            const message = e.target.value 
            this.setState(() => ({ 
                message 
            }))
        }
    
         
        departmentHandle = (e) => {
            const department = e.target.value 
            this.setState(() => ({
                department
            }))
        }
    
         
        handlePriorityChange = (priority) => {
            this.setState(() => ({ 
                priority
            }))
        }
        
         
        formHandle = (e) => {
        e.preventDefault()
        const formData = {
            name: this.state.name,
            department: this.state.department,
            message: this.state.message,
            priority: this.state.priority
        }
        axios.post('http://dct-api-data.herokuapp.com/tickets?api_key=aae4a1fa9e977d41',formData)
            .then(Response => {
                const ticket = Response.data
                this.props.formHandle(ticket)
                this.setState(() => ({
                    name: '',
                    department:'',
                    message: '',
                    priority: ''
                }))

                
            })
            .catch((err) => {
                console.log(err)
            })
        
    }

    render() {
      return (
        <div>
              <form onSubmit={this.formHandle}>
                  
                  <label>
                      Name
                      <input type='text' name='name' value={this.state.name} onChange={this.nameHandle}/>
                  </label><br />
                                    
                  <label>
                      Department
                      <select value={this.state.department} onChange={this.departmentHandle}>
                          <option value="">select</option>
                          <option value='hr'>Humun Resourse</option>
                          <option value='technical'>Technical</option>
                          <option value='non-technical'>Non-Technical</option>
                        </select>
                  </label><br />

                  <label>
                      Priority
                      <input type='radio' name='priority' value={this.state.priority} onChange={() => {this.handlePriorityChange('High')}}/>High
                      <input type='radio' name='priority' value={this.state.priority} onChange={() => {this.handlePriorityChange('Medium')}}/>Medium
                      <input type='radio' name='priority' value={this.state.priority} onChange={() => {this.handlePriorityChange('Low')}}/>Low
                  </label><br />

                  <label>
                      Message
                      <textarea value={this.state.message} onChange={this.handleMessageChange}></textarea>
                  </label><br />
                  
                  <input type="submit" value="Add Ticket" /> 
          
              </form>
        </div>
      )
    }

}

export default TicketForm
