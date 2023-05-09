import TasksContextProvider from "lib/context/tasks-context/TasksContextProvider";
import Layout from "./components/support/layout/Layout";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <TasksContextProvider>
      <Layout>
        <Outlet />
      </Layout>
      <ToastContainer />
    </TasksContextProvider>
  );
}

export default App;
