import { create } from "../pages/toDoList/createTask.ts";
import { list } from "../pages/toDoList/taskList.ts";
import { wrapper } from "../pages/toDoList/wraptasksview.ts";
import homeIndex from "../pages/home/home.index.ts";
import noPageFoundIndex from "../pages/noPageFound/noPageFound.index.ts";
import { login } from "../pages/user/login.ts";
import { logout } from "../pages/user/logout.ts";
import { register } from "../pages/user/register.ts";
//import { createContacts } from "../pages/contacts/create.contact.ts";

type RouteParams = {
  /**
   * This is a path for route url
   */
  path: any;
  /**
   * This is a label for the route as a name
   */
  linkLabel?: string; 
  /**
   * This is the content that route renders
   */
  content: any;
  /**
   * If path needs to be authenticated. ie. true, false
   */
  isAuthenticated?: boolean;
};

const routes: RouteParams[] = [
  {
    path: "/",
    linkLabel: "Home",
    content: homeIndex,
  },
  {
    path: "/login",
    linkLabel: "Login",
    content: login,
  },
  {
    path: "/register",
    linkLabel: "Signup",
    content: register,
  },
  {
    path: "/logout",
    linkLabel: "Signup",
    content: logout,
  },
  {
    path: "/toDoList",
    linkLabel: "ToDoList",
    content: create,
    isAuthenticated: true
  },
  {
    path: "/wrapper",
    linkLabel: "Wrapper",
    content: wrapper,
    isAuthenticated: true
  },
  {
    path: "/taskList",
    linkLabel: "TaskList",
    content: list,
    isAuthenticated: true
  },
  {
    path: "/404",
    linkLabel: "404",
    content: noPageFoundIndex,
  }
];

export default routes;
