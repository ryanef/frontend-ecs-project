import { useLoaderData} from "react-router-dom";

export async function loader(){
    console.log("Profile page!")
    try{
      const res = await fetch("/api/profile")
      const data = await res.json()
      console.log(data)
      return data

    }catch(error){

      console.error(error)
      return "error in profile"
    }
}
export default function Profile(){

  const data = useLoaderData() as JSX.Element
  console.log(data)

  return (
    <div>
      <h2>Profile page</h2>
      <h3>{data}</h3>
    </div>
  )
}