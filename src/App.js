import Categories from "./components/categories/categories.component"

const App =()=>{
    const categories =[
        {
          id: 1,
          title:'Hats',
          url:'https://i.ibb.co/cvpntL1/hats.png'
        },
        {
          id: 2,
          title:'Jackets',
          url:'https://i.ibb.co/px2tCc3/jackets.png'
        },
        {
          id: 3,
          title:'Sneakers',
          url:'https://i.ibb.co/0jqHpnp/sneakers.png'
        },
        {
          id: 4,
          title:'Womens',
          url:'https://i.ibb.co/GCCdy8t/women.png'
        },
        {
          id: 5,
          title:'Mens',
          url:'https://i.ibb.co/R70vBrQ/men.png'
        }

        
      ]
      return(
        <Categories categories={categories}/>
      )
}
export default App;