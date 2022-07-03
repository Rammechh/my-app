// import Card from "./Components/Card"

// import Counter from "./Counter"
// import Product from "./Product"
import Product2 from "./Product2"

// const names = [
//   "sunny",
//   "parth",
//   "raja",
// ]

// const names = [
//   {
//     image: "",
//     title: "sunny",
//     desc: "desc"
//   },
//   {
//     image: "",
//     title: "parth",
//     desc: "desc"
//   },
//   {
//     image: "",
//     title: "ayush",
//     desc: "desc"
//   }
// ]

// function App(){
//   return (
    
//     // <div>
//     //   Hello world
//     //   <Card name = "sunny" surname = "dhana"/>
//     //   <Card name = "ram"/>
//     //   <Card />
//     //   <Card />
//     // </div>

//     <div>
//       Hello world
//       {names.map((name, index) => {
//         return (
//           //<div>{name}</div>
//           //<Card name = {name.title}{...name}/>

//           //to avoid error use unique key for map
//           <Card key= {`${name}-${index}`} name = {name.title} />
//         )
//       } )}
//     </div>

//   )
// }

function App(){
  return (
    <div>
      {/* <Counter/> */}
      <Product2 />
    </div>
  )
}
export default App
