import App from "./App";
import { fireEvent, render, screen } from "@testing-library/react";
import renderer from 'react-test-renderer';
import Users from "./Users";
import handleOtherMethod from "./helper";
// import cleandb from "./service";



// beforeAll(()=>{
//     console.log("+++++ beforeAll hook call *****")
// })

// beforeEach(()=>{
//     // console.log("+++++ beforeEach hook call *****")
//     cleandb();
// })

// test('Always true test', () => {
//     expect(true).toBe.true;
// })

// test.skip('Heading should be Vite React', () => {
//     render(<App />);
//     const headingElement = screen.getByText('Vite React');
//     expect(headingElement).toBeInTheDocument();
// })

// test('Test p tag value', () => {
//     render(<App />);
//     const text = screen.getByText(/First React Test Case/i);
//     const text2 = screen.getByText('Freedom is not given, it is taken');
//     const imgtitle = screen.getByTitle('sky and mountain');
//     expect(text).toBeInTheDocument();
//     expect(text2).toBeInTheDocument();
//     expect(imgtitle).toBeInTheDocument();
// })

// test('Testing input box', () => {
//     render(<App />);
//     const checkInput = screen.getByRole('textbox');
//     const checkInputplaceholder = screen.getByPlaceholderText('Enter name');
//     expect(checkInput).toBeInTheDocument();
//     expect(checkInputplaceholder).toBeInTheDocument();
//     expect(checkInput).toHaveAttribute('name', 'name');
//     expect(checkInput).toHaveAttribute('id', 'nameId');
//     expect(checkInput).toHaveAttribute('type', 'text');
//     expect(checkInput).toHaveAttribute('value', 'darshik');
// })

// describe.skip('Ui test case group', () => {

//     test('test case 1', () => {
//         render(<App />);
//         const checkInput = screen.getByRole('textbox');
//         expect(checkInput).toHaveAttribute('name', 'name');
//     })

//     test('test case 2', () => {
//         render(<App />);
//         const checkInput = screen.getByRole('textbox');
//         expect(checkInput).toHaveAttribute('type', 'text');
//     })

//     test('test case 3', () => {
//         render(<App />);
//         const checkInput = screen.getByRole('textbox');
//         expect(checkInput).toHaveAttribute('name', 'name');
//     })
// })

// describe('Api test case group', () => {

//     test('APi test case 1', () => {
//         render(<App />);
//         const checkInput = screen.getByRole('textbox');
//         expect(checkInput).toHaveAttribute('name', 'name');
//     })

//     test('Api test case 2', () => {
//         render(<App />);
//         const checkInput = screen.getByRole('textbox');
//         expect(checkInput).toHaveAttribute('type', 'text');
//     })

//     test('Api test case 3', () => {
//         render(<App />);
//         const checkInput = screen.getByRole('textbox');
//         expect(checkInput).toHaveAttribute('name', 'name');
//     })

//     describe('inner describe test case group', () => {
//         test('inner describe test case 1', () => {
//             render(<App />);
//             const checkInput = screen.getByRole('textbox');
//             expect(checkInput).toHaveAttribute('id', 'nameId');
//         })
//     })
// })



// test('on change event testing', ()=>{
//     render(<App />);
//     const checkInput = screen.getByRole('textbox');
//     fireEvent.change(checkInput,{target:{value:'dev'}});
//     expect(checkInput.value).toBe('devtest');
// })

// test('click event testing', () => {
//     console.log("testing");
//     render(<App />);
//     const checkBtn = screen.getByRole('button');
//     fireEvent.click(checkBtn);
//     expect(screen.getByText("hello")).toBeInTheDocument();
// })

// test('click event testing 1', () => {
//     console.log("testing 1");
//     render(<App />);
//     const checkBtn = screen.getByRole('button');
//     fireEvent.click(checkBtn);
//     expect(screen.getByText("hello")).toBeInTheDocument();
// })

// test('click event testing 2', () => {
//     console.log("testing 2");
//     render(<App />);
//     const checkBtn = screen.getByRole('button');
//     fireEvent.click(checkBtn);
//     expect(screen.getByText("hello")).toBeInTheDocument();
// })



// afterAll(()=>{
//     console.log('_______ afterAll _________')
// })

// afterEach(()=>{
//     console.log('_______ afterEach _________')
// })


// test("sanpshot for app component", ()=>{
//     const conatiner = render(<App />);
//     expect(conatiner).toMatchSnapshot();
// })

// test("class component method testing", () => {
//     const componentData = renderer.create(<Users />).getInstance();
//     let a = "test";
//     let b = "extratext";
//     expect(componentData.getUserList(a)).toMatch(a+b);
// })

// test("method testing case 1", () => {
//     render(<App />);
//     const btn = screen.getByTestId('btn1');
//     fireEvent.click(btn);
//     expect(screen.getByText("Hello")).toBeInTheDocument();
// })

// test("method testing case 2", () => {
//     expect(handleOtherMethod()).toMatch("Hi");
// })


test("get by role", () => {
    render(<App />);
    const inputFiled = screen.getByRole('textbox');
    const btn = screen.getByRole('button');

    expect(inputFiled).toBeInTheDocument();
    expect(inputFiled).toHaveValue("hello");
    expect(inputFiled).toBeDisabled();
    expect(btn).toBeInTheDocument();
})