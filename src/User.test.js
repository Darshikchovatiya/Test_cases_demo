import { render, screen } from "@testing-library/react"
import User from "./User"

test('Props Testing',()=>{
    const uname = 'om'
    render(<User name={uname} />);
    const user = screen.getByText(`User name: ${uname}`);
    expect(user).toBeInTheDocument();
})