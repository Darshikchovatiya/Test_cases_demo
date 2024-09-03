import React, { useState } from "react";
import Add_stu from "./component/Add_stu/Add_stu";
import View_stu from "./component/View_stu/View_stu";
import Header from "./component/Header/Header";
import { Route, Routes } from "react-router";
import Home from "./component/Home/Home";
import Edit_stu from "./component/Edit_stu/Edit_stu";
import View from "./component/View/View";
import Users from "./Users";
import handleOtherMethod from "./helper";

function App() {
  const [data, setData] = useState("");
  const [data1, setData1] = useState("");
  const [data2, setData2] = useState("");

  const handleData = () => {
    setData2("Hello");
  };

  return (
    <>
      {/* <h1>Vite React</h1>
        <p>Hello coder First React TEST Case xyz</p>
        <p>Freedom is not given, it is taken</p>
        <img src="https://images.pexels.com/photos/6296908/pexels-photo-6296908.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" title='sky and mountain' />
        <input type="text" placeholder='Enter name' name='name' id='nameId' value='darshik' /> */}

      {/* <h1>Test on change event</h1>
        <input type="text" value={data} onChange={(e) => {setData(e.target.value + "test")}} /> */}

      {/* <h1>Test Click event with button </h1>
        <button onClick={()=> {setData1('hello')}}>Updated data</button>
        <h1>{data1}</h1> */}

      {/* <h1>Jest testing</h1> */}

      {/* <h1>Class Component method testing</h1>
        <Users /> */}

      {/* <h1>Functional Component method testing</h1>
        <button data-testid="btn1" onClick={handleData}>Update</button>
        <button onClick={handleOtherMethod}>Print</button>

        <h2>{data2}</h2> */}

      {/* <h1>getByRole Query</h1>
        <input type="text" defaultValue="hello" disabled />
        <button>Click me</button> */}

      {/* <h1>Multiple elements with Role</h1>
        <h1>Custom Role</h1>
        <button>Click 1</button>
        <button>Click 2</button>

        <label htmlFor="input1">User name</label>
        <input type="text" id='input1' />
        <label htmlFor="input2">User age</label>
        <input type="text" id='input2' />
        <div role='dummy'>dummy text</div>


        <div className="app">
            <h1>RTL Query : getAllByRole</h1>
            <button>Click Me</button>
            <button>Click Me</button>

            <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
            </select>
        </div>

        <div className="app">
            <h1>RTL Query : getByLabelText</h1>
            <label htmlFor="user_name">UserName</label>
            <input type="text" id="user_name" defaultValue="darshik" />

            <br />
            <br />
            <label htmlFor="skills">Skills</label>
            <input type="checkbox" id="skills" defaultChecked={true} />
        </div>

        <div className="app">
            <h1>RTL Query : getAllByLabelText</h1>
            <label htmlFor="fname1">FirstName</label>
            <input type="text" id="fname1" defaultValue="dev" />

            <label htmlFor="fname2">FirstName</label>
            <input type="text" id="fname2" defaultValue="dev" />

            <label htmlFor="fname3">FirstName</label>
            <input type="text" id="fname3" defaultValue="dev" />
            <br />
            <br />

            <label htmlFor="course1">Course</label>
            <input type="checkbox" id="course1" defaultChecked={true} />

            <label htmlFor="course2">Course</label>
            <input type="checkbox" id="course2" defaultChecked={true} />

            <label htmlFor="course3">Course</label>
            <input type="checkbox" id="course3" defaultChecked={true} />

        </div> */}

      <div className="App">
        <h1>RTL Query : getByPlaceholderText</h1>
        <input type="text" placeholder="enter username" defaultValue="Dc" />

        <h1>RTL Query : getAllByPlaceholderText</h1>
        <input type="text" placeholder="enter name" defaultValue="cd" />
        <input type="text" placeholder="enter name" defaultValue="cd" />
        <input type="text" placeholder="enter name" defaultValue="cd" />
      </div>

      <div className="App">
        <h1>RTL Query : getByText and getAllByText</h1>
        <button>Login</button>
        <p className="paraStyle" id="p1">P tag testing</p>
        <h1>Heading tag</h1>

        <h1>multiple h1 testing</h1>
        <h1>multiple h1 testing</h1>
      </div>

      <div className="App">
        <h1>RTL Query : getByTestId and getAllByTestId</h1>
        <div data-testid="divtest1">Testing with test id</div>
        <h2 data-testid="h2test">h2 tag testing</h2>

        <div data-testid="div1test">Testing div1 with test id</div>
        <div data-testid="div1test">Testing div2 with test id</div>

      </div>


      {/* <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/add_student' element={<Add_stu />} />
                <Route path='/view_student' element={<View_stu />} />
                <Route path='/edit_student' element={<Edit_stu />} />
                <Route path='/view' element={<View />} />
            </Routes> */}
    </>
  );
}

export default App;
