import React,{Component} from 'react';
import PropTypes from 'prop-types';
export class TodoItem extends Component{
        getstyle =()=> {
                return {
                    background:'#f4f4f4',
                    padding:'4px',
                    borderBottom:'2px  #ccc dotted',
                    textDecoration: this.props.todo.completed ? 'line-throught' : 'none'
}
}
        render(){
            const {id,title} = this.props.todo;
        return(
            <div style={this.getstyle()}>
                <p>  
                    <input type="checkbox" onChange={this.props.markComplet.bind(this,id)}/>
                    {' '}
                    {title}
                    <button onClick={this.props.delTodo.bind(this,id)} style= {BtnStyle}>x</button>
                </p>
            </div>
        )
    }
}
const BtnStyle={
    background:'#ff0000',
    color:'#fff',
    border:'none',
    padding:'5px 5px',
    borderRaduis:'50%',
    cursor:'pointer',
    flaot:'right'
}
TodoItem.propTypes={
    todos:PropTypes.object.isRequired
}

export default TodoItem;