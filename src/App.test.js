import App from "./App";
import { fireEvent, render, screen } from "@testing-library/react";

test('Always true test', () => {
    expect(true).toBe.true;
})

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



test('on change event testing', ()=>{
    render(<App />);
    const checkInput = screen.getByRole('textbox');
    fireEvent.change(checkInput,{target:{value:'dev'}});
    expect(checkInput.value).toBe('devtest');
})

// test('click event testing', () => {
//     render(<App />);
//     const checkBtn = screen.getByRole('button');
//     fireEvent.click(checkBtn,)
// })