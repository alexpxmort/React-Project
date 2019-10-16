import React, { Component } from 'react'
import './image-upload.styles.scss'
import {storage} from '../../firebase/firebase.utils'
import { faImages, faImage,faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CustomButton from '../custom-button/custom-button.component'





 class ImageUpload extends Component{
    constructor(props){
        super(props);

        this.state = {
            image:null,
            url:'',
            progress:0,
            data:[]
        }
    }

    handleChange = (e) =>{
        if(e.target.files[0]){
            const image = e.target.files[0];
            this.setState(() => ({image}),()=> console.log(this.state))
        }
    }

   



    handleUpload = ()=>{
        const {image} = this.state;
      const uploadTask =   storage.ref(`images/${image.name}`).put(image);

      uploadTask.on('state_changed',
      (snapshot)=>{
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState({progress})
      },
      (err)=>{
        console.log(err);
      },
      ()=>{
          storage.ref('images').child(image.name).getDownloadURL().then(url=>{
              this.setState({url})
          })
      }
      )
    }

    ativeBtnFile = ()=>{
        var btnFile = document.getElementById("filebtn");

        btnFile.click();

       
    }

    listImgs = ()=>{
        var desertRef = storage.ref("images");
        desertRef.listAll().then(({items})=>{
            items.forEach((v)=>{
                console.log(v);
                var obj = {};

                 v.getDownloadURL().then((url)=>{
                  obj.url = url;
                  obj.name = v.name;

                  
                this.setState(prevState => ({
                    data: [...prevState.data, obj]
                  }),(v)=>{
                    console.log(this.state.data);
                  })

                })
            });
        })
    }

    deleteImg = ()=>{
        alert('Deleted Image');
        

        var {image:{name}} = this.state;
        console.log(name)

        var desertRef = storage.ref().child("images").child(name)
        console.log(desertRef)
       
        desertRef.delete().then((v)=>{
            console.log(v);
        }).catch((err)=>{
            console.log(err);
        })
    }
        // Delete the file
    

    render(){
        return(
            <div className='image-upload'>
                <progress value={this.state.progress} max={100}/>
                <br></br>
                <div className='hover_options'>
                    <FontAwesomeIcon icon={faTimes} style={{fontSize:40,marginRight:40}} onClick={this.listImgs}></FontAwesomeIcon>
                </div>
               
                {(this.state.url?( <div className='image-container'>
                    <img src={this.state.url} alt='Uploaded Images' width={400} height={300}/>
                </div>):( <FontAwesomeIcon id="icon" icon={faImage} color='#3B5998' size='10x' onClick={this.ativeBtnFile}/>))}
                <input type ='file' id='filebtn' onChange = {this.handleChange} style={{display:'none'}}/>
                <br></br>
                <CustomButton  onClick={this.handleUpload}>UPLOAD</CustomButton>

            </div>
        )
    }
}



export default ImageUpload;