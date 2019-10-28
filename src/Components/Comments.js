import React,{Component} from 'react';
import axios from 'axios';


class Comments extends Component{
    state={
        comments:[]
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(res=>{
                //console.log(res);
                let comments=[];
                res.data.forEach(comment=>{
                    if(comment.postId===1)
                    comments.push(comment);
                })
                this.setState({
                    comments: comments
                })
            console.log(this.state)
                
            })
            .catch(err=>{
                console.log(err);
            })
    }
    deleteComment(id){
        let comments=[];
        this.state.comments.forEach(comment=>{
            if(comment.id!==id)
            comments.push(comment);
        })
        this.setState({
            comments:comments
        })
    }
    render(){
        
        let comments=[];
        this.state.comments.forEach(comment=>{
            comments.push(
                
    
                        <div class="card-panel #bbdefb blue lighten-4 comments-card">
                        <div className="remove-comment">
                            <button className="btn orange accent-2" onClick={()=>{this.deleteComment(comment.id)}}>Remove</button>
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

export default Comments;