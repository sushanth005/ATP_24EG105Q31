import EditCounter1 from "./EditCounter1"
import EditCounter2 from "./EditCounter2"
import EditCounter3 from "./EditCounter3"
import EditCounter4 from "./EditCounter4"


function RootLayout() {
  return (
    <div className="bg-red-600 min-h-screen">
        <div className=" flex justify-around pt-15 mb-5">
            <EditCounter1/>
            <EditCounter2/>
        </div>
        <div className="flex justify-around">
            <EditCounter3/>
            <EditCounter4/>
        </div>
    </div>
  )
}

export default RootLayout