import React, { Component } from 'react'
import MemberCard from './MembersCard/MembersCard'
import { getAllUsers } from '../service/UserService'
import './Members.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default class Members extends Component {

    constructor(props) {
        super(props)

        this.state = { users: [] }

    }

    componentDidMount() {
        this.getAllUsers()

    }

    filterData = (data) => {

        this.setState({ users: this.state.users.filter(el => el.mail !== data) });

    }


    getAllUsers = () => {

        getAllUsers().then(res => {
            this.setState({ users: res.data })

        })
            .catch(err => {
                console.error(err);
            })


    }


    render() {

        return (
            <div className="members-container">
                {this.state.users.map((el, index) => <MemberCard filterData={this.filterData} user={el} key={el.mail} />)}
                <ToastContainer />

            </div>
        )
    }
}
