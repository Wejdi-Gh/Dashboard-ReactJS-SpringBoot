import React from 'react';
import ReactCardFlip from 'react-card-flip';
import { Form } from 'react-bootstrap';
import { updateUser, deleteUser } from '../../service/UserService'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './MembersCard.css'
import Avatar from 'react-avatar';

class MemberCard extends React.Component {
    constructor() {
        super();
        this.state = {
            isFlipped: false, newUser: {}
        };
        this.handleClick = this.handleClick.bind(this);

    }

    componentDidMount() {

        this.setState({ newUser: { firstName: this.props.user.firstName, lastName: this.props.user.lastName, mail: this.props.user.mail, password: "" } })
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    onChange = (event) => {
        this.setState({ newUser: { ...this.state.newUser, [event.target.name]: event.target.value } }
        )
    }

    onSubmit = () => {

        let updatedUser = {
            ...this.state.newUser, role: {
                id: 2,
                roleName: "USER"
            }
        }

        updateUser(updatedUser).then(res => {
            if (res.data) {
                toast.success('Account has been Updated successfully', {
                    position: toast.POSITION.TOP_RIGHT
                });
                this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
            }

        })
            .catch(err => {
                toast.error(" We Have a Technical Problem , please try again ", {
                    position: toast.POSITION.TOP_RIGHT
                });
            })

    }


    deleteUser = () => {

        deleteUser(this.state.newUser.mail).then(res => {
            if (res.data) {
                this.props.filterData(this.state.newUser.mail)

                toast.success(res.data, {
                    position: toast.POSITION.TOP_RIGHT
                });

            }

        })
            .catch(err => {
                toast.error(" We Have a Technical Problem , please try again ", {
                    position: toast.POSITION.TOP_RIGHT
                });
            })


    }



    render() {
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
                <div key="front">
                    <Avatar name={this.state.newUser.firstName + " " + this.state.newUser.lastName} size="70" round="50px" />
                    <form className="cardbody">
                        <section className="form-group"> <label>Fist Name : </label>  <span> {this.state.newUser.firstName} </span></section>
                        <section className="form-group">   <label>Last Name : </label>< span> {this.state.newUser.lastName}</span></section>
                        <section className="form-group">  <label>Email : </label>< span> {this.state.newUser.mail}</span></section>
                    </form>
                    <button onClick={this.handleClick} type="button" className="update-button" > Update</button>
                    <button onClick={this.deleteUser} type="button" className="delete-button" > Delete</button>
                </div>

                <div key="back">
                    <Form className="update-form" onChange={this.onChange} >

                        <section className="input-form">

                            <section id="formBasicFirstName">
                                <label>First Name</label>
                                <Form.Control type="text" value={this.state.newUser.firstName} placeholder="Enter Your First Name" name="firstName" required />
                            </section>

                            <section id="formBasicLastName">
                                <label>Last Name</label>
                                <Form.Control type="text" value={this.state.newUser.lastName} placeholder="Enter Your Last Name" name="lastName" required />
                            </section>

                            <section id="formBasicEmail">
                                <label>Email address</label>
                                <Form.Control type="email" value={this.state.newUser.mail} placeholder="Enter email" name="mail" required disabled />
                            </section>

                            <section id="formBasicPassword">
                                <label>Password</label>
                                <Form.Control type="password" placeholder="Password" name="password" required />
                            </section>
                            <section className="submit-back">
                                <button onClick={this.onSubmit} type="button" className="submit-button" > Submit </button>

                                <i className="fas fa-undo" onClick={this.handleClick}></i>
                            </section>
                        </section >

                    </Form>

                </div>
            </ReactCardFlip>
        )
    }
}

export default MemberCard;