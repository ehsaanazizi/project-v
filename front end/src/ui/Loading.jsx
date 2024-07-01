import { ThreeDots } from 'react-loader-spinner'

function Loading({width="75", height="40"}) {
  return (
    <div>
      <ThreeDots
  height={height}
  width={width}
  color="rgb(var(--color-primary-900))"
  radius={9}
  wrapperStyle={{
    display:"flex",
    justifcenter:"center"
  }}
  visible={true}
  />
    </div>
  )
}

export default Loading


















// import { ThreeDots } from "react-loader-spinner";

// function Loading({ width = "75", height = "40" }) {
//   return (
//     <ThreeDots
//       height={height}
//       width={width}
//       radius={9}
//       color="rgb(var(--color-primary-900))"
//       wrapperStyle={{
//         display: "flex",
//         justifyContent: "center",
//       }}
//       visible={true}
//     />
//   );
// }
// export default Loading;
