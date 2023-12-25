import React from 'react';
import ReactDOM from 'react-dom/client';
import { Friend, Header, FriendList, HomePage } from './components/router';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const Api = {
  friends: [
    {name: "Артем", age: 16, hobby: "Футбол"},
    {name: "Максим", age: 16, hobby: "Програмування"},
    {name: "Даня", age: 16, hobby: "Баскетбол"},
  ],

  all: function(){return this.friends},
  get: function(name){
    const isFriend = f => f.name === name
    return this.friends.find(isFriend)
  }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header/>,
    children: [
      {
        path: "",
        element: <HomePage/>
      },
      {
        path: `friends`,
        element: <FriendList friends={Api.all()}/>
      },
      {
        path: `friends/:friendName`,
        element: <Friend api={Api} />
      }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
