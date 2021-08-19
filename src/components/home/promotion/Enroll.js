import React, { Component } from 'react';

import Fade from 'react-reveal/Fade';
import { firebasePromotions } from '../../../firebase';
import FormFields from '../../ui/formFields';
import { validate } from '../../ui/misc';

class Enroll extends Component {

    state = {
        formError: false,
        formSuccess: '',
        formData: {
            email: {
                element: 'input',
                value: '',
                config: {
                    name: 'email_input',
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                validation: {
                    required: true,
                    email: true
                },
                valid: false,
                validationMessage: ''
            }
        }
    }

    updateForm(element) {
        const newFormData = { ...this.state.formData };
        const newElement = { ...newFormData[element.id] };

        newElement.value = element.event.target.value;

        let validData = validate(newElement);

        newElement.valid = validData[0];
        newElement.validationMessage = validData[1];
        console.log(validData);

        newFormData[element.id] = newElement;

        this.setState({
            formError: false,
            formData: newFormData
        })
    }

    resetFormSuccess(type) {
        const newFormData = { ...this.state.formData };

        for (let key in newFormData) {
            newFormData[key]['value'] = '';
            newFormData[key]['valid'] = false;
            newFormData[key]['validationMessage'] = '';
        }

        this.setState({
            formError: false,
            formData: newFormData,
            formSuccess: type ? 'Congratulations' : 'Already on database'
        })

        this.successMessage();
    }

    successMessage() {
        setTimeout(() => {
            this.setState({
                formSuccess: ''
            })
        }, 2000)
    }

    submitForm(event) {
        event.preventDefault();
        let dataToSubmit = {};
        let formIsValid = true;

        for (let key in this.state.formData) {
            dataToSubmit[key] = this.state.formData[key].value;
            formIsValid = this.state.formData[key].valid && formIsValid;
        }

        if (formIsValid) {
            firebasePromotions.orderByChild('email').equalTo(dataToSubmit.email).once('value').
                then((snapshot) => {
                    if (snapshot.val() === null) {
                        firebasePromotions.push(dataToSubmit);
                        this.resetFormSuccess(true);
                    } else {
                        this.resetFormSuccess(false);
                    }
                })


        } else {
            this.setState({
                formError: false
            })
        }
    }

    render() {
        return (
            <Fade>
                <div className="enroll_wrapper">
                    <form onSubmit={(event) => this.submitForm(event)}>
                        <div className="enroll_title">
                            <div className="enroll_title">
                                Enter your title
                            </div>
                            <div className="enroll_input">
                                <FormFields
                                    id={'email'}
                                    formData={this.state.formData.email}
                                    change={(element) => this.updateForm(element)}
                                />
                                {this.state.formError ?
                                    <div className="error_label">Something is wrong, please try again.</div>
                                    : null
                                }
                                <div className="success_label">{this.state.formSuccess}</div>
                                <button onClick={(event) => this.submitForm(event)}>Enroll</button>
                                <div className="enroll_discl">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </Fade>
        )
    }
}

export default Enroll;
