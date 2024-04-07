import { useLoaderData} from "react-router-dom";


export default function Index(){

  const data = useLoaderData() as JSX.Element
  console.log(data)

  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}