import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./route";
import './App.less';

function App() {
  return (
    <div className="react-app-continer">
        <BrowserRouter>
            <Routes>
                {
                    routes.map((route, i) => (
                        <Route 
                            key={i} 
                            path={route.path}
                            element={<route.component />} 
                        />
                    ))
                }
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
