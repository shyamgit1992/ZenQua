import React from "react";
import validator from 'validator';
import { NavLink } from "react-router-dom";
interface SignUpState {
    errors: {
      [key: string]: string;
    };
    output: string;
    formData: {
      name: string;
      email: string;
      mobile: string;
      dob: string;
      password: string;
    };
  }
  
  class SignUp extends React.Component<{}, SignUpState> {
    constructor(props: {}) {
      super(props);
      this.state = {
        errors: {},
        output: '',
        formData: {
          name: '',
          email: '',
          mobile: '',
          dob: '',
          password: '',
        },
      };
    }

    handleNavClick = (path: string) => {
      //console.log('Pathname:', path);
      setTimeout(() => {
        const element = document.getElementById(path);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 10); // Adjust the timeout duration as needed
    };
  
    componentDidUpdate(prevProps: {}, prevState: SignUpState) {
      if (prevState.formData !== this.state.formData) {
        this.validateForm();
      }
    }
  
    validateForm = () => {
      let errors: { [key: string]: string } = {};
  
      const { formData } = this.state;
  
      if (!formData.name.trim()) {
        errors.name = 'Name is required';
      }
  
      if (!formData.email.trim()) {
        errors.email = 'Email is required';
      } else if (!validator.isEmail(formData.email)) {
        errors.email = 'Email is invalid';
      }
  
      if (!formData.mobile.trim()) {
        errors.mobile = 'Mobile number is required';
      } else if (!validator.isMobilePhone(formData.mobile, 'any', { strictMode: false })) {
        errors.mobile = 'Mobile number is invalid';
      }
  
      if (!formData.password.trim()) {
        errors.password = 'Password is required';
      } else if (formData.password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
      }
  
      this.setState({ errors });
    };
  
    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const { formData, errors } = this.state;
  
      // Check if any field is empty
      const emptyFields: (keyof SignUpState['formData'])[] = [];
      for (const key of Object.keys(formData) as (keyof SignUpState['formData'])[]) {
        if (formData[key].trim() === '') {
          emptyFields.push(key);
        }
      }
  
      if (emptyFields.length > 0) {
        const error = `Field(s) ${emptyFields.join(', ')} is required`;
        this.setState({ output: error });
        return;
      }
  
      // If no empty fields, check for other errors
      if (Object.keys(errors).length === 0) {
        console.log('Form submitted:', formData);
        // Clear the form after submission
        this.setState({
          formData: {
            name: '',
            email: '',
            mobile: '',
            dob: '',
            password: '',
          },
          output: 'Form submitted successfully!', // Update output message
        });
        // Proceed with form submission logic
      } else {
        console.log('Form has errors:', errors);
        if (errors.name && errors.email && errors.mobile && errors.password) {
          this.setState({ output: "Field is Required" });
        } else {
          this.setState({ output: errors.name || errors.email || errors.mobile || errors.password });
        }
      }
    }
    render(){
        const { formData, output} = this.state;
        return(
        <div>
                 {/* Start Breadcrumbs */}
        <div className="breadcrumbs">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 offset-lg-3 col-md-12 col-12">
                <div className="breadcrumbs-content">
                  <h1 className="page-title">Sign Up</h1>
                  <ul className="breadcrumb-nav">
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>Sign Up</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Breadcrumbs */}
        {/* Start Account Signup Area */}
        <div id="/signup" className="account-login section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12">
                <form className="card login-form inner-content" onSubmit={this.handleSubmit}>
                  <div className="card-body">
                    <div className="title">
                      <h3>Let's join us</h3>
                      <p>Use the form below to create your account.</p>
                    </div>
                    <div className="alt-option">
                      <a href="javascript:void(0)" className="option-button google">
                        <i className="lni lni-google" />
                        Google Sign in
                      </a>
                      <a href="javascript:void(0)" className="option-button facebook">
                        <i className="lni lni-facebook-filled" /> Facebook Sign in
                      </a>
                    </div>
                    <div className="or">
                      <span>or sign up with your email</span>
                    </div>
                    <div className="input-head">
                      <center>
                        <b style={{"color":"brown","fontWeight":"bolder"}}>
                          {output}
                        </b>
                      </center>  
                      <div className="form-group input-group">
                        <label>
                          <i className="lni lni-user" />
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Enter your name"
                          //required=""
                          value={formData.name}
                          onChange={e => this.setState({ formData: { ...formData, name: e.target.value } })}
                        />
                      </div>
                      <div className="form-group input-group">
                        <label>
                          <i className="lni lni-envelope" />
                        </label>
                        <input
                          className="form-control"
                          type="email"
                          name="email"
                          id="reg-email"
                          placeholder="Enter your email"
                          //required=""
                          value={formData.email}
                          onChange={e => this.setState({ formData: { ...formData, email: e.target.value } })}
                        />
                      </div>
                      <div className="form-group input-group">
                        <label>
                          <i className="lni lni-phone" />
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="mobile"
                          id="reg-mobile"
                          placeholder="Enter your mobile number"
                          //required=""
                          value={formData.mobile}
                          onChange={e => this.setState({ formData: { ...formData, mobile: e.target.value } })}
                        />
                      </div>
                      <div className="form-group input-group">
                        <label>
                          <i className="lni lni-cake" />
                        </label>
                        <input
                          className="form-control"
                          type="date"
                          name="dob"
                          id="reg-dob"
                          //required=""
                          value={formData.dob}
                          onChange={e => this.setState({ formData: { ...formData, dob: e.target.value } })}
                        />
                      </div>
                      <div className="form-group input-group">
                        <label>
                          <i className="lni lni-lock-alt" />
                        </label>
                        <input
                          className="form-control"
                          type="password"
                          name="password"
                          id="reg-pass"
                          placeholder="Enter your password"
                          //required=""
                          value={formData.password}
                          onChange={e => this.setState({ formData: { ...formData, password: e.target.value } })}
                        />
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between bottom-content">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input width-auto"
                          id="exampleCheck1"
                        />
                        <label className="form-check-label">
                          Agree to{" "}
                          <a href="javascript:void(0)">privacy &amp; conditions</a>
                        </label>
                      </div>
                    </div>
                    <div className="button">
                      <button type="submit" className="btn">
                        Sign Up
                      </button>
                    </div>
                    <h4 className="create-account">
                      Already have an account? <NavLink onClick={() => this.handleNavClick('/login')} to="/login"><a>Sign In Now</a></NavLink>
                    </h4>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* End Account Signup Area */}
        </div>
        )
    }
    

}
export default SignUp;