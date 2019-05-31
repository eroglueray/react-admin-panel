import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import AddNewPost from "./views/AddNewPost";
import ComponentsOverview from "./views/ComponentsOverview";
import ActionTextInput from "./views/ActionTextInput";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/blog-overview" />
  },
  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: ActionTextInput
  }
];
