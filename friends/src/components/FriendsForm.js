import React, {useState} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendsForm extends React.Component {
  state = {
    addFriend: {
      id: Date.now,
      name: '',
      age: '',
      email: ''
    }
  };

  handleChange = event => {
    this.setState({
       addFriend: {
        ...this.state.addFriend,
        [event.target.name]: event.target.value
        }
    });
  };

  handleAddFriend = event => {
    // event.preventDefault();
    axiosWithAuth()
    .post('/api/friends', this.state.addFriend)
    .then(res => {
        console.log('Post res', res)
        this.setState({ addFriend: [...res.data] })
      })
      .catch(error => console.log(error));
  };

//   addNewFriend = e => {
//     axiosWithAuth()
//         .post('/api/friends', this.state.addFriend)
//         .then(res => {
//             this.setState({ addFriend: [...res.data] })
//         })
//         .catch(err => console.log('Post error', err));
// };
  

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddFriend}>
            <input type='text' name='name' value={this.state.addFriend.name} onChange={this.handleChange}/>
            <input type='text' name='age' value={this.state.addFriend.age} onChange={this.handleChange}/>
            <input type='text' name='email' value={this.state.addFriend.email} onChange={this.handleChange}/>
            <button>Add Friend</button>
        </form>
      </div>
    );
  }
}
export { FriendsForm };

// export const FriendsForm = () => {

//     const [addFriends, setAddFriends] = useState ({
//         id: Date.now(),
//         name: '',
//         age: '',
//         email: ''
//     })

//     const handleChange = e => {
//         setAddFriends({
//             ...addFriends,
//             [e.target.name]: e.target.value
//         })
//     }

//     const handleSubmit = e => {
//         e.preventDefault();
//         axiosWithAuth()
//         .post('/api/friends', addFriends)
//         .then(res => {
//             console.log('add friend', res)
//         setAddFriends({
//             ...addFriends,
//             name: '',
//             age: '',
//             email: ''
//         })
//         })
//         .catch(err => console.error(err));
//     }


//     return(
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input name='name' type='text' value={addFriends.name} onChange={handleChange}/>
//                 <input name='age' type='text' value={addFriends.age} onChange={handleChange}/>
//                 <input name='email' type='text' value={addFriends.email} onChange={handleChange}/>
//                 <button>Add New Friend</button>
//             </form>
//         </div>
//     )
// }