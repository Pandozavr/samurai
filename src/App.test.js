import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import ProfileReducer, {addPost} from "./redux/profile-reducer";

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});



let state = {
  PostData: [
    {id: "1", post: "First post"},
    {id: "2", post: "Second post"},
    {id: "3", post: "Third post"}
  ]
};

it("addPost", () => {
  let action = addPost("blab");

  let newState = ProfileReducer(state, action);

  expect(newState.PostData[3].post).toBe("blab");
});