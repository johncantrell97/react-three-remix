import Instructions from "~/components/dom/Instructions";
import Shader from "~/components/canvas/Shader/Shader";
import BoxComponent from "~/components/canvas/Box";

export const handle = {
  r3f: (props) => {
    return (
    <>
      <BoxComponent route='/' />
    </>
  )  
}
}

export default function Index() {
  return (
    <>
       <Instructions />
    </>
  );
}
