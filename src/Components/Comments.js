import React,{Component} from 'react';
import { connect } from 'react-redux';


class Comments extends Component{
    
   handleDelete=(id)=>{
       this.props.deleteComment(id)
   }
    render(){
        
        let comments=[];
        this.props.comments.forEach(comment=>{
            comments.push(
                
    
                        <div class="card-panel #bbdefb blue lighten-4 comments-card">
                        <div className="remove-comment">
                            <button className="btn #0d47a1 blue darken-4" onClick={()=>{this.handleDelete(comment.id)}}>Delete</button>
                        </div>
                        <h5 className="comments-title grey-text">-{comment.email} posted a comment </h5>
                        <span class="black-text">
                            " {comment.body} "
                        </span>
                        </div>
                    
            )
        })
        return(
            <div className="container">
                {comments}
            </div>
        )
    }
}

const mapStoreToProps=(state)=>{
    return{
        comments: state.comments
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        deleteComment: (id)=>{
            dispatch({type: 'DELETE_COMMENT', id: id})
        }
    }
}

export default connect(mapStoreToProps,mapDispatchToProps)(Comments);