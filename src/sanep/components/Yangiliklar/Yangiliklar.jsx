import React, { Component, useEffect } from 'react';
import './Style/Yangiliklar.scss'
const url = 'http://213.230.65.55:10';
class Yangiliklar extends Component {
    constructor (props) {
      super(props)
        this.state = {
            posts : []
        }
    }   

    // const fetchData = () => {
    //     fetch(url+"/getPosts", {})
    //     .then(res=>  {return res.json()})
    //     .then(data=>{this.setState({posts: data})})
    //     .catch(e=>{console.log(e)})
    //     .finally(()=>{
    //         console.log("posts", this.state.posts)
    //     })
    // }

    // useEffect(() => {
    //     fetchData()
    // }, [])

//  updateAllData(){
//   fetch(url+"/getPosts", {})
//   .then(res=>{return res.json()})
//   .then(data=>{this.setState({posts: data})})
//   .catch(e=>{console.log(e)})
//   .finally(()=>{
//     console.log("posts", this.state.posts)
//   })
// }
   
    render() {
        
        this.updateAllData();
        // console.log()
  // const [ openPost, setOpenPost ] = useState({_id: null, caption: null, description: null, imageId: null})
 

        return (
            <div className='yangiliklar-page'>
                Yangiliklar
            </div>
        );
    }
}

export default Yangiliklar;
