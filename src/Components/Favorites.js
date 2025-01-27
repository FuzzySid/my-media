import React,{Component} from 'react';
import axios from 'axios';
import img1 from '../img/female-user.jpg';
import img2 from '../img/male-user-2.jpg';

class Favorites extends Component{
    state={
        fav:[]
    }
    componentDidMount(){    
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res=>{
                //console.log(res);
                let fav=[];
                res.data.forEach(user=>{
                    fav.push(user);
                })
                fav=fav.slice(0,9);
                this.setState({
                    fav:fav
                })
            })
            .catch(err=>{
                console.log(err);
            })
    }
    removeUser(id){
        let users=[];
        this.state.fav.forEach(user=>{
            if(user.id!==id)
            users.push(user);
        })
        this.setState({
            fav:users
        })
    }
    render(){
        let fav=[];
        this.state.fav.forEach(user=>{
            if(user.id%2==0){
               var img=img1;
            }else{
               var img=img2;
            }
            fav.push(
                
                        <div class="col l4">
                        <div class="card fav-card #b3e5fc light-blue lighten-4">
                            <div class="card-image">
                            <img src={img}/>
                            
                            </div>
                            <h5 className="center">{user.username}</h5>
                            <div class="card-content center">
                            <p>{user.name}</p>
                            <p> From {user.address.city}</p>
                            </div>
                            <div class="card-action center">
                           <button className="btn #0d47a1 blue darken-4" onClick={()=>this.removeUser(user.id)}>Remove</button>
                            </div>
                        </div>
                        </div>
               
            )
        })
                return(
                <div className="container favs">
                    <div className="row">
                        {fav}
                    </div>
                </div>
            )
        }
}

export default Favorites;