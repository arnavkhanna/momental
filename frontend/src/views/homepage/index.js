import React, {Component} from "react";
import "./style.css";
import NavBar from "../../components/NavBar";

import axios from 'axios';
//import FileUploader from "./FileUploader.js";

// export default class HomePage extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {audio: []};
//     }

    // componentDidMount() {
    //     console.log("index");
    //     axios.get('http://localhost:5000/recordings/audio/2ec24fd39ad437e4c3f918caef153cb0.m4a')
    //       .then(response => {
    //         this.setState({ audio: response.data })
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       })
    //   }

//     render() {
//         return (
//           <div>
//             <NavBar/>
//             <div className="top_middle">
//                 <h1 className="heading"> Home </h1>
//             </div>
//             <div className="top_left" >
//                  <h2 className="logo">Momental</h2>
//             </div> 
//             <div className="page-body">
//               <table>
//                 <thead>
//                   <tr>
//                     <th>Date   </th>
//                     <th>Username   </th>
//                     <th>Title   </th>
//                     <th>Description   </th>
//                     <th>Mood   </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   { this.state }
//                 </tbody>
//               </table>
//             </div>
//           </div>
            
    
          
//         )
//       }
// }
const HomePage = () =>{
   return(
       <div>
           <NavBar/>
           <div className="top_middle">
              <h1 className="heading"> Home </h1>
           </div>
           <div className="top_left" >
                <h2 className="logo">Momental</h2>
           </div>
       </div>
   )
}

export default HomePage