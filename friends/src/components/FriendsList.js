import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { FriendsForm }  from '../components/FriendsForm';
import './FriendsList.css';

class FriendsList extends React.Component{
    state = {
        friends: []
    };

    componentDidMount() {
        this.getFriends();
    };

    getFriends = () => {
        axiosWithAuth()
        .get('/api/friends')
        .then(res => {
            console.log("get friends", res);
            this.setState({friends: res.data});
        })
        .catch(err => console.log('get friends error', err));
    };

    ////For function Hook (FriendsForm.js)
    // componentDidUpdate() {
    //     this.getFriends();
    // };

    render(){
        return(
            <div>
            <FriendsForm />
        <div className="friendsList">
            {this.state.friends.map(friends => {
                console.log('friends data', this.state.friends);
                return(
                    <div className="friends" key={friends.id}>
                        <p>name: {friends.name}</p>
                        <p>age: {friends.age}</p>
                        <p>E-mail: {friends.email}</p>
                    </div>
                )
            })}
        </div></div>
        )
    }
}

export { FriendsList };