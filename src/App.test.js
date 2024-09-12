import App from "./App";
import { act, configure, fireEvent, logRoles, prettyDOM, render, screen, within } from "@testing-library/react";
import renderer from 'react-test-renderer';
import Users from "./Users";
import handleOtherMethod from "./helper";
import userEvent from "@testing-library/user-event";
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


// test("getByRole Testing", () => {
//     render(<App />);
//     const btn1 = screen.getByRole('button', { name: 'Click 1' });
//     const btn2 = screen.getByRole('button', { name: 'Click 2' });
//     const input1 = screen.getByRole('textbox', { name: 'User name' });
//     const input2 = screen.getByRole('textbox', { name: 'User age' });
//     const dv1 = screen.getByRole('dummy');
//     expect(dv1).toBeInTheDocument();

//     expect(btn1).toBeInTheDocument();
//     expect(btn2).toBeInTheDocument();
//     expect(input1).toBeInTheDocument();
//     expect(input2).toBeInTheDocument();
// })


// test('getAllByRole', () => {
//     render(<App />);
//     const btns = screen.getAllByRole('button');
//     const options = screen.getAllByRole('option');

//     for (let i = 0; i < btns.length; i++) {
//         expect(btns[i]).toBeInTheDocument();
//     }

//     for (let i = 0; i < options.length; i++) {
//         expect(options[i]).toBeInTheDocument();
//     }
// })


// test('getByLabelText test 1', () => {
//     render(<App />);
//     const input = screen.getByLabelText('UserName');

//     expect(input).toBeInTheDocument();
//     expect(input).toHaveValue("darshik");
// })

// test('getByLabelText test 2', () => {
//     render(<App />);
//     const checkbox = screen.getByLabelText('Skills');

//     expect(checkbox).toBeInTheDocument();
//     expect(checkbox).toBeChecked();
// })


// test('getAllByLabelText input test case', () => {
//     render(<App />);
//     const inputs = screen.getAllByLabelText('FirstName');

//     for(let i = 0; i < inputs.length; i++){
//         expect(inputs[i]).toBeInTheDocument();
//         expect(inputs[i]).toHaveValue("dev");
//     }
// })


// test('getAllByLabelText checkbox test case', () => {
//     render(<App />);
//     const checkboxs = screen.getAllByLabelText('Course');

//     for(let i = 0; i < checkboxs.length; i++){
//         expect(checkboxs[i]).toBeInTheDocument();
//         expect(checkboxs[i]).toBeChecked();
//     }
// })



// test('getByPlaceholderText : test case for single input filed', () => {
//     render(<App />);
//     const input = screen.getByPlaceholderText("enter username");
//     expect(input).toBeInTheDocument();
//     expect(input).toHaveValue("Dc");
// })

// test('getAllByPlaceholderText : test case for multiple input filed', () => {
//     render(<App />);
//     const inputs = screen.getAllByPlaceholderText("enter name");

//     for (let i = 0; i < inputs.length; i++) {
//         expect(inputs[i]).toBeInTheDocument();
//         expect(inputs[i]).toHaveValue("cd");
//     }
// })

// test('getByText : single button testing', () => {
//     render(<App />);
//     const btn = screen.getByText('Login');
//     expect(btn).toBeInTheDocument();
// })

// test('getByText : single p tag testing', () => {
//     render(<App />);
//     const pTag = screen.getByText('P tag testing');
//     expect(pTag).toBeInTheDocument();
//     expect(pTag).toHaveClass('paraStyle');
//     expect(pTag).toHaveAttribute('id');
// })

// test('getByText : single h1 tag testing', () => {
//     render(<App />);
//     const h1Tag = screen.getByText('Heading tag');
//     expect(h1Tag).toBeInTheDocument();
// })

// test('getAllByText : multiple h1 tag testing', () => {
//     render(<App />);
//     const h1tags = screen.getAllByText('multiple h1 testing');

//     for (let i = 0; i < h1tags.length; i++) {
//         expect(h1tags[i]).toBeInTheDocument();
//     }
// })

// test('getByTestId : Testing with test id', () => {
//     render(<App />);
//     const divId = screen.getByTestId('divtest1');
//     expect(divId).toBeInTheDocument();
// })

// test('getByTestId : Testing h2 with test id', () => {
//     render(<App />);
//     const h2Id = screen.getByTestId('h2test');
//     expect(h2Id).toBeInTheDocument();
// })

// test('getAllByTestId : Testing div with test id', () => {
//     render(<App />);
//     const divIds = screen.getAllByTestId('div1test');

//     for (let i = 0; i < divIds.length; i++) {
//         expect(divIds[i]).toBeInTheDocument();
//     }
// })



// configure({ testIdAttribute: 'id' })

// test('test div with data test id', () => {
//     render(<App />);
//     const divElement = screen.getByTestId("testdiv");
//     expect(divElement).toBeInTheDocument();
// })

// test('testing with display value', () => {
//     render(<App />);
//     const inputVal = screen.getByDisplayValue('raj');
//     expect(inputVal).toBeInTheDocument();
// })

// test('textarea testing with display value', () => {
//     render(<App />);
//     const textarea = screen.getByDisplayValue('hi hello');
//     expect(textarea).toBeInTheDocument();
// })

// test('radio testing with display value', () => {
//     render(<App />);
//     const radio = screen.getByDisplayValue('male');
//     expect(radio).toBeInTheDocument();
// })

// test('multiple element testing with display value', () => {
//     render(<App />);
//     const inputsVal = screen.getAllByDisplayValue('dev');

//     for (let i = 0; i < inputsVal.length; i++) {
//         expect(inputsVal[i]).toBeInTheDocument();
//     }
// })


// test('button testing with title attribute', () => {
//     render(<App />);
//     const btnTitle = screen.getByTitle('click me');
//     expect(btnTitle).toBeInTheDocument();
// })

// test('span testing with title attribute', () => {
//     render(<App />);
//     const spanTitle = screen.getByTitle('Hot beverage');
//     expect(spanTitle).toBeInTheDocument();
// })

// test('multiple span and icon testing with title attribute', () => {
//     render(<App />);
//     const spansTitle = screen.getAllByTitle('Watch');

//     for (let i = 0; i < spansTitle.length; i++) {
//         expect(spansTitle[i]).toBeInTheDocument();
//     }
// })

// test('testing image element with alt text', () => {
//     render(<App />);
//     const img = screen.getByAltText('ganesh ji');
//     expect(img).toBeInTheDocument();
// })

// test('testing multiple image element with alt text', () => {
//     render(<App />);
//     const imgs = screen.getAllByAltText('nature');
//     for (let i = 0; i < imgs.length; i++) {
//         expect(imgs[i]).toBeInTheDocument();
//     }
// })



// test('test input', () => {
//     render(<App />);
//     const input = screen.getByRole('textbox');
//     expect(input).toBeInTheDocument();
//     expect(input).toHaveValue();
//     expect(input).toHaveValue('shiv');
//     expect(input).toBeEnabled();
//     // expect(input).toBeDisabled();
//     expect(input).toHaveAttribute('id');
//     expect(input).toHaveAttribute('data-test');
//     expect(input).toHaveClass('test-style');
//     expect(input).toHaveClass('dummy');
// })

// test('test negative cases', () => {
//     render(<App />);
//     const btn = screen.getByRole("button");
//     expect(btn).toBeInTheDocument();
//     expect(btn).not.toHaveClass("btn1");
//     expect(btn).not.toHaveAttribute("id");
//     expect(btn).not.toBeEnabled();
// })

// test('text match with string',()=>{
//     render(<App />);
//     // const div = screen.getByText("Hello World",{exact:false});
//     // const div = screen.getByText("hello world",{exact:false});
//     const div = screen.getByText("hello",{exact:false});
//     expect(div).toBeInTheDocument();
// })

// test('text match with Regex',()=>{
//     render(<App />);
//     // const div = screen.getByText(/Hello/);
//     // const div = screen.getByText(/lo Wo/);
//     // const div = screen.getByText(/hello/i);
//     const div = screen.getByText(/Hello w?orld/i);
    
//     expect(div).toBeInTheDocument();
// })

// test('text match with function',()=>{
//     render(<App />);
//     // const div1 = screen.getByText((content,element)=>content.startsWith('Good'));
//     // const div1 = screen.getByText((content,element)=>content.endsWith('Morning'));
//     // const div1 = screen.getByText((content,element)=>content.endsWith('ng'));
//     // const div1 = screen.getByText((content,element)=>content.includes('ood'));

//     // const div1 = screen.getByText((content,element)=>{
//     //     return content.includes('Mor');
//     // });
//     const div1 = screen.getByText((content,element)=>{
//         return content.length==12
//     });


//     expect(div1).toBeInTheDocument();
// })

// test('QueryBy test case', () => {
//     render(<App />);
//     // const dv = screen.getByText('Login');
//     const dv = screen.queryByText('Login');
//     expect(dv).not.toBeInTheDocument();
// })



// test('test element with find by',async () => {
//     render(<App />);
//     const el = await screen.findByText('data found',{},{timeout:5000});
//     expect(el).toBeInTheDocument();
// })

// test('test case with custom query', () => {
//     render(<App />);
//     const cq = document.querySelector('#testId');
//     expect(cq).toBeInTheDocument();
//     expect(cq).toHaveTextContent('Hello World');
//     expect(cq).toHaveAttribute('id');
// })

// test('Test with within function',()=>{
//     render(<App />);
//     let pe = screen.getByText('Code');
//     let ce = within(pe).getByText('hi');
//     let ce2 = within(pe).getByText('hello');
//     expect(pe).toBeInTheDocument();
//     expect(ce).toBeInTheDocument();
//     expect(ce2).toBeInTheDocument();
// })



// test('Click Event with User Event Library', async () => {
//     userEvent.setup();
//     render(<App />);
//     const btn = screen.getByText('Click me');
//      await userEvent.click(btn);
//     expect(screen.getByText('hi')).toBeInTheDocument();
// })

// test('onChange Event Testing',async ()=>{
//     userEvent.setup();
//     render(<App />);
//     const input = screen.getByRole('textbox');
//     await userEvent.type(input,"hey");
//     expect(screen.getByText('hey')).toBeInTheDocument();
// })

// test('Act function',async () => {
//     userEvent.setup();
//     render(<App />);
//     const input = screen.getByRole('textbox');
//     await act(async ()=>{
//         await userEvent.type(input,"good mor");
//     })
//     expect(screen.getByText('good mor')).toBeInTheDocument();
// })

// test('Functional Props Testing',async ()=>{
//     const testFunction = jest.fn();
//     userEvent.setup();
//     render(<App testFunction={testFunction} />);
//     const btn = screen.getByRole('button');
//     await userEvent.click(btn);
//     expect(testFunction).toBeCalled();
// })

// test('testing component', () => {
//     const {container, debug} = render(<App />);
//     // const head2 = screen.getByText('Heading 2');
//     // expect(head2).toBeInTheDocument();
//     // console.log(container);
//     // console.log(prettyDOM(container));
//     // debug();
//     logRoles(container);
// })


test('test handing', () => {
    render(<App />);
    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument();
})