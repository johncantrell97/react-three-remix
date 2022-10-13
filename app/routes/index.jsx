import Instructions from "~/components/dom/Instructions";
import Shader from "~/components/canvas/Shader/Shader";

export const handle = {
  r3f: (props) => {
    return (
    <>
      <Shader />
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
