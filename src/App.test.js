import App from "./App";
import { render, screen } from "@testing-library/react";

test('Always true test', () => {
    expect(true).toBe.true;
})

test('Heading should be Vite React', () => {
    render(<App />);
    const headingElement = screen.getByText('Vite React');
    expect(headingElement).toBeInTheDocument();
})

test('Test p tag value', () => {
    render(<App />);
    const text = screen.getByText(/First React Test Case/i);
    const text2 = screen.getByText('Freedom is not given, it is taken');
    const imgtitle = screen.getByTitle('sky and mountain');
    expect(text).toBeInTheDocument();
    expect(text2).toBeInTheDocument();
    expect(imgtitle).toBeInTheDocument();
})

test('Testing input box', () => {
    render(<App />);
    const checkInput = screen.getByRole('textbox');
    const checkInputplaceholder = screen.getByPlaceholderText('Enter name');
    expect(checkInput).toBeInTheDocument();
    expect(checkInputplaceholder).toBeInTheDocument();
})