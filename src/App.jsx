import React, { useEffect, useState } from "react";
import Add_stu from "./component/Add_stu/Add_stu";
import View_stu from "./component/View_stu/View_stu";
import Header from "./component/Header/Header";
import { Route, Routes } from "react-router";
import Home from "./component/Home/Home";
import Edit_stu from "./component/Edit_stu/Edit_stu";
import View from "./component/View/View";
import Users from "./Users";
import handleOtherMethod from "./helper";
import User from "./User";

function App(props) {
  const [data, setData] = useState("");
  const [data1, setData1] = useState("");
  const [data2, setData2] = useState("");
  const [data3, setData3] = useState(false);
  const [data4, setData4] = useState("");
  const [name, setName] = useState("");
  const [name2, setName2] = useState("");
  const [count, setCount] = useState(0);

  const handleData = () => {
    setData2("Hello");
  };

  useEffect(() => {
    setTimeout(() => {
      setData3(true)
    }, 2000);
  })

  let login = true;

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

      {/* <div className="App">
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

      </div> */}


      {/* <div className="App">
        <h1>Overriding data-testid</h1>
        <div id="testdiv">Dummy text</div>
      </div>

      <div className="App">
        <h1>getByDisplayValue and getAllByDisplayValue</h1>
        <input type="text" defaultValue='raj' />
        <br />
        <br />
        <textarea defaultValue="hi hello"></textarea>
        <br />
        <br />
        <input type="radio" defaultValue='male' />
        <br />
        <br />
        <input type="text" defaultValue='dev' />
        <input type="text" defaultValue='dev' />
      </div>


      <div className="App">
        <h1>getByTitle and getAllByTitle</h1>
        <button title="click me">Click me</button>
        <br />
        <br />
        <span title="Hot beverage" style={{fontSize: '100px'}}>&#9749;</span>
        <br />
        <span title="Watch" style={{fontSize: '100px'}}>&#8986;</span>
        <span title="Watch" style={{fontSize: '100px'}}>&#8986;</span>
      </div>

      <div className="App">
        <h1>getByAltText and getAllByAltText</h1>
        <img src="https://images.pexels.com/photos/13349864/pexels-photo-13349864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="ganesh ji"/>
        <br />
        <br />
        <img src="https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="nature" />
        <img src="https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="nature" />
      </div> */}


      {/* <div className="App">
          <h1>Assertion Methods</h1>
          <input type="text" defaultValue='shiv' name="userName" className="test-style dummy" id="user-name" data-test="test" />
          <button className="btn2" disabled name="btn-id">Click Me</button>
        </div>
        <br />
        <br />


        <div className="App">
          <h1>TextMatch with String and Regex</h1>
          <div>Hello World</div>
        </div>
        <br />


        <div className="App">
          <h1>TextMatch with Function</h1>
          <div>Good Morning</div>
          <div>hi Morning</div>
        </div>
        <br />

        <div className="App">
          <h1>QueryBy and QueryAllBy</h1>
          {
            login ? <button>Logout</button> : <button>Login</button>
          }
        </div> */}


      {/* <div className="App">
            <h1>findBy and findAllBy</h1>
            {
              data3?<h1>data found</h1>:<h1>no data found</h1>
            }
          </div>
          <br />
          <br />

          <div className="App">
            <h1 id="testId">Hello World</h1>
          </div>
          <br />

          <div className="App">
            <div>
              Code
              <p>hi</p>
              <p>hello</p>
              <p>hey</p>
            </div>
          </div> */}


      {/* <div className="App">
        <h1>{data4}</h1>
        <button onClick={() => setData4('hi')}>Click me</button>
      </div>
      <br /> */}

      {/* <div className="App">
        <h1>onChange Event Testing</h1>
        <h2>{name}</h2>
        <input type="text" onChange={e => setName(e.target.value)} placeholder="Enter name" />
      </div>
      <br /> */}

      <div className="App">
        <h1>act function Testing</h1>
        <h2>{name2}</h2>
        <input type="text" onChange={e => setName2(e.target.value)} placeholder="Enter name" />
      </div>
      <br />

      <div className="App">
        <h1>Test component Props</h1>
        <User name="mohit" />
      </div>
      <br />

      <div className="App">
        <h1>Functional Props Testing and Function Mocking</h1>
        <button onClick={props.testFunction}>Click</button>
      </div>
      <br />

      <div className="App">
        <h1>Debugging in React testing library</h1>
        <button onClick={()=>setCount(count => count + 1)}>Click to increase: {count}</button>
        <h2>Heading 2</h2>
        <h5>Heading 5</h5>
        <input />
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
