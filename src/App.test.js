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


// test("get by role", () => {
//     render(<App />);
//     const inputFiled = screen.getByRole('textbox');
//     const btn = screen.getByRole('button');

//     expect(inputFiled).toBeInTheDocument();
//     expect(inputFiled).toHaveValue("hello");
//     expect(inputFiled).toBeDisabled();
//     expect(btn).toBeInTheDocument();
// })

test("getByRole Testing", () => {
    render(<App />);
    const btn1 = screen.getByRole('button', { name: 'Click 1' });
    const btn2 = screen.getByRole('button', { name: 'Click 2' });
    const input1 = screen.getByRole('textbox', { name: 'User name' });
    const input2 = screen.getByRole('textbox', { name: 'User age' });
    const dv1 = screen.getByRole('dummy');
    expect(dv1).toBeInTheDocument();

    expect(btn1).toBeInTheDocument();
    expect(btn2).toBeInTheDocument();
    expect(input1).toBeInTheDocument();
    expect(input2).toBeInTheDocument();
})


test('getAllByRole', () => {
    render(<App />);
    const btns = screen.getAllByRole('button');
    const options = screen.getAllByRole('option');

    for (let i = 0; i < btns.length; i++) {
        expect(btns[i]).toBeInTheDocument();
    }

    for (let i = 0; i < options.length; i++) {
        expect(options[i]).toBeInTheDocument();
    }
})


test('getByLabelText test 1', () => {
    render(<App />);
    const input = screen.getByLabelText('UserName');

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("darshik");
})

test('getByLabelText test 2', () => {
    render(<App />);
    const checkbox = screen.getByLabelText('Skills');

    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toBeChecked();
})


test('getAllByLabelText input test case', () => {
    render(<App />);
    const inputs = screen.getAllByLabelText('FirstName');

    for(let i = 0; i < inputs.length; i++){
        expect(inputs[i]).toBeInTheDocument();
        expect(inputs[i]).toHaveValue("dev");
    }
})


test('getAllByLabelText checkbox test case', () => {
    render(<App />);
    const checkboxs = screen.getAllByLabelText('Course');

    for(let i = 0; i < checkboxs.length; i++){
        expect(checkboxs[i]).toBeInTheDocument();
        expect(checkboxs[i]).toBeChecked();
    }
})