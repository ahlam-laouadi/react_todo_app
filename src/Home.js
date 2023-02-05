import React, { Component } from 'react';

class Home extends Component {
    state={
        newName:"",
         myArray:[
            { name:"name1"},
            { name:"name2"},
            { name:"name3"},
            
        ]
    }
    delete=(index)=>{
    const myArray=[...this.state.myArray];
    myArray.splice(index,1);
    this.setState({myArray});
    }
    change=(event)=>{
        this.setState({
            newName:event.target.value
        });
    }
    add=()=>{
        const myArray=[...this.state.myArray];
        myArray.push({
            name:this.state.newName
        });
        this.setState({myArray});
    }
  render() {
    return ( 
        <div className='container'>
           <div className="row my-5">
                <div className="col-md-6 mx-auto">
                    <div className="card bg-light">
                        <div className='card-header bg-primary text-center fw-bold text-white p-3'>Todo App</div>
                            <div className='card-body'>   
                                <div className='input-group mb-3'>
                                        <input type='text' className='form-control mx-auto' placeholder="Add new" value={this.state.newName} onChange={this.change}/>
                                        <span className='input-group-text' style={{cursor:'pointer'}} onClick={this.add}>Add</span>
                                </div>     
                                <ol className='list-group'>
                                    {this.state.myArray.map(
                                    (todo,index) =>
                                    <li key={index} className='list-group-item d-flex justify-content-between align-items-start'>{todo.name}<button className='btn btn-danger' onClick={()=>this.delete(index)}>delete</button>
                                    </li>)}
                                </ol>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
  }
}
export default Home;