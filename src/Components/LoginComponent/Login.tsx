import React from "react";
import validator from "validator";
import { NavLink } from "react-router-dom";
interface LoginState{
    errors : {
        [key : string]:string 
    };
    output:string;
    formData : {
        email : string;
        password : string;
    };


}
class Login extends React.Component<{},LoginState>{
    constructor(props: {}){
        super(props);
        this.state={
            errors: {},
            output:'',
            formData:{
                email : '',
                password : ''
            },
        };
    }
    componentDidUpdate(prevProps: {}, prevState: LoginState) {
        if (prevState.formData !== this.state.formData) {
          this.validateForm();
        }
    }
    validateForm = () => {
        
        let errors: { [key: string]: string } = {};
    
        const { formData } = this.state;
    
        
    
        if (!formData.email.trim()) {
          errors.email = 'Email is required';
        } else if (!validator.isEmail(formData.email)) {
          errors.email = 'Email is invalid';
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
        const emptyFields: (keyof LoginState['formData'])[] = [];
        for (const key of Object.keys(formData) as (keyof LoginState['formData'])[]) {
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
          console.log('SignIn:', formData);
          // Clear the form after submission
          this.setState({
            formData: {
              email: '',
              password: '',
            },
            output: 'Sign In successfully!', // Update output message
          });
          // Proceed with form submission logic
        } else {
          console.log('Form has errors:', errors);
          if (errors.email && errors.password) {
            this.setState({ output: "Field is Required" });
          } else {
            this.setState({ output: errors.email || errors.password });
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
            <h1 className="page-title">Sign In</h1>
            <ul className="breadcrumb-nav">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>Sign In</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Breadcrumbs */}
  {/* Start Account Sign In Area */}
  <div id="/login" className="account-login section">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12">
          <form className="card login-form inner-content"onSubmit={this.handleSubmit}>
            <div className="card-body">
              <div className="title">
                <h3>Welcome Back</h3>
                <p>Sign in by entering the information below.</p>
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
                    <i className="lni lni-envelope" />
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    id="reg-email"
                    placeholder="Enter your email"
                    //required=""
                    value={formData.email}
                    onChange={e => this.setState({ formData: { ...formData, email: e.target.value } })}
                  />
                </div>
                <div className="form-group input-group">
                  <label>
                    <i className="lni lni-lock-alt" />
                  </label>
                  <input
                    className="form-control"
                    type="password"
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
                  <label className="form-check-label">Remember me</label>
                </div>
                <a className="lost-pass">
                  <NavLink to="/resetpassword">Forgot password?</NavLink>
                </a>
              </div>
              <div className="button">
                <button className="btn" type="submit">
                  Sign In
                </button>
              </div>
              <h4 className="create-account">
                Don't have an account? <a href="signup.html">Sign Up Now</a>
              </h4>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* End Account Sign In Area */}
            </div>
        )
    }

}
export default Login;