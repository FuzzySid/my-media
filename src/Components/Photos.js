import React,{Component} from 'react';
import axios from 'axios';
import { stat } from 'fs';

class Photos extends Component{
    state={
        photos:[]
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(res=>{
                let photos=[];
                //console.log(res);
                res.data.forEach(photo=>{
                    if(photo.albumId===1)
                    photos.push(photo);
                })
                photos=photos.slice(0,16);
                this.setState({
                    photos: photos
                })
            console.log(this.state)
            })
            .catch(err=>{
                console.log(err);
            })
    }
    render(){
        let photos=[];
        this.state.photos.forEach(photo=>{
            photos.push(
                   
                    <div className="col l3">
                    <div className="card photo-card">
                        <div className="card-image">
                        <img src={photo.thumbnailUrl}/>
                        <span className="photo-title card-title">{photo.title}</span>
                        <a className="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                        </div>
                        <div className="card-content">
                            <p className="photo-content">
                                
                            </p>
                        </div>
                        </div>
                        </div>
                   
                 
            
            )
        })
       
        return(
            <div className="container">
               <div className="row">
                    {photos}
                    
                    </div>
            </div>
        )
    }

    
}

export default Photos;