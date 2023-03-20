import { useRoutes } from "react-router-dom";
import { Main_page } from "../components/pages";


function Router(){
    const routes =[
        {
            path: '/',
            element: <Main_page/>,
            
        },
    ]
    return useRoutes(routes)
}
export default Router;