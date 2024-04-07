
export async function loader(){
    console.log("About page!")
    try{

      return "About loader"

    }catch(error){

      console.error(error)
      return "error in profile"
    }
}
export default function About(){


  return (
    <div>
      <h1>About</h1>
    </div>
  )
}