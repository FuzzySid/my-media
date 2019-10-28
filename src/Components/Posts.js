import React,{Component} from 'react';
import axios from 'axios';
//import randomTextColor from './HOC/randomTextColor';

class Posts extends Component{
    state={
        posts: []
    }
    componentDidMount(){
        var posts=[];
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res=>{
                //console.log(res);
                res.data.forEach(post=>{
                    if(post.userId===1){
                       posts.push(post);
                    }
                })
                posts=posts.slice(0,4);
                this.setState({
                    posts: posts
                })
            //console.log(this.state);
            })
            .catch(err=>{
                console.log(err);
            })
    }
    deletePost(id){
        let posts=[];
        this.state.posts.forEach(post=>{
            if(post.id!==id)
            posts.push(post);
        })
        this.setState({
            posts:posts
        })
    }
    render(){
        let posts=[];
        this.state.posts.forEach(post=>{
           posts.push(
                <div className="container">
               
                        <div class="card-panel posts #bbdefb blue lighten-4">
                          <div className="post-content container">
                            <h5 className="post-title center">
                                {post.title}
                            </h5>
                        <span class="black-text post-body">
                            {post.body}
                        </span>
                        </div>
                        <div className="row post-footer #e3f2fd blue lighten-5">
                            <div className="col l6">
                                <p className="grey-text">Posted by you 2 mins ago</p>
                            </div>
                            <div className=" col l6 post-icons">
                                <i className="material-icons small icon fav">favorite</i> 
                                <i className="material-icons small icon edit">create</i>   
                                <i className="material-icons small icon delete" onClick={()=>{this.deletePost(post.id)}}>cancel</i>
                                
                            </div>
                        </div>
                        </div>
                  
                </div>
            )
        })
        return(
            <div>
                {posts}
            </div>
        )
       
    }
}

export default Posts;