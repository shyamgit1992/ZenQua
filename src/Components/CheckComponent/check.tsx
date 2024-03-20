import React from "react";
interface User{
    name:string;
    gender:string;
    
}
interface State{
    name:string;
    gender:string;
    uList: User[];
}
class Check extends React.Component<{},State>{
    constructor(props:State){
        super(props);
        this.state = {
            name : '',
            gender : '',
            uList : []
           
        };
        
    };
    
    handleSubmit = () => {
        const { name, gender, uList } = this.state;
        if(name != "" && gender != ""){
            const obj = {
                name : name,
                gender : gender
            }
            console.log(obj);
            this.setState({
                uList: [...uList,obj],
                name: '',
                gender: ''
            });
            //const val = document.getElementById("box");
            const m:any = document.getElementById("male");
            m.checked = false;
            const f:any = document.getElementById("female");
            f.checked = false;
        }else{
            this.setState({
                name: '',
                gender: ''
            });
            const m:any = document.getElementById("male");
            m.checked = false;
            const f:any = document.getElementById("female");
            f.checked = false;
        }
    }
    render(){
        const {name,gender,uList} = this.state;
        return(
            <div>
                 {/* Start Breadcrumbs */}
  <div className="breadcrumbs">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 offset-lg-3 col-md-12 col-12">
          <div className="breadcrumbs-content">
            <h1 className="page-title">Check Form</h1>
            <ul className="breadcrumb-nav">
              <li>
                <a>Home</a>
              </li>
              <li>Check Form</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Breadcrumbs */}
  {/* Start Reset Password Area */}
  <div id="/check" className="account-login section reset-pass">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12">
          <form className="card login-form inner-content" onSubmit={this.handleSubmit}>
            <div className="card-body">
              <div className="title">
                <h3>Check Register Form</h3>
               
              </div>
              <div className="input-head">
                <div className="form-group input-group">
                  <label>
                    <i className="lni lni-user" />
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your Name"
                    value={name}
                    onChange={e=>this.setState({name : e.target.value})}


                    //required=""
                  />
                </div>
              </div>
              <div className="input-head">
                <div className="form-check">
                  <label>
                    <i className="lni lni-male" /> Male
                  </label>
                  <input
                    className="form-check-input"
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    onChange={e=>this.setState({gender : e.target.value})}
                  />
                  </div>
                  <div className="form-check">
                  <label>
                    <i className="lni lni-female" /> Female
                  </label>
                  <input
                    className="form-check-input gender"
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    onChange={e=>this.setState({gender : e.target.value})}
                  />
                </div>
              </div>
              <div className="button">
                <button className="btn" type="button" onClick={this.handleSubmit}>
                  Submit
                </button>
              </div>
              
            </div>
          </form>
          <br/>
          <hr/>
          <div className="title">
                <h3>List of User</h3>
               
              </div>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>Gender</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                uList.map((row,i)=>(
                                    <tr key={i}>
                                        <td>{row.name}</td>
                                        <td>{row.gender}</td>

                                    </tr>   

                                ))
                            }
                        </tbody>
                    </table>
                    <div>
                    {
                    uList.map((row,i)=>(
                    <div key={i} style={{marginTop:"5px",width:637,height:50,backgroundColor:"#0069FF"}}><h3 style={{padding:"7px",textAlign:"center",color:"#fff"}}>{row.name}</h3></div>
                    ))
                    }
                    </div>
                    
        </div>
      </div>
    </div>
  </div>
  
            </div>
        )
    }

}
export default Check;