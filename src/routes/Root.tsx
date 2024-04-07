import { useLoaderData, Outlet, Link } from "react-router-dom";

export async function loader(){
  console.log(import.meta.env.VITE_BACKEND_URL)
    try{

      const response = await fetch(`/api`);
      console.log(response)
  

      return response
    }catch(error){
      console.error(error)
      return false
    }
    
}
export default function Root(){
  const {data} = useLoaderData() as any
  console.log(data)
  return (
    <div>
        <header>
          <h1>Cool App</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/profile">Profile</Link></li>
            </ul>
          </nav>
        </header>
        <Outlet/>
    </div>
  )
}