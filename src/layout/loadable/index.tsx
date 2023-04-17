import { Suspense, ComponentType } from "react";

// ===========================|| LOADABLE - LAZY LOADING ||=========================== //

function Loadable(Component: ComponentType) {
  return (props: any) => (
    <Suspense>
      <Component {...props} />
    </Suspense>
  );
}

export default Loadable;
