import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Items } from "@/components/items"

const Home = () => {
  // const products =[
  //   {
  //     id: 1,
  //     name: "Аркана на джагернаута",
  //     img: "https://static.wikia.nocookie.net/dota2_gamepedia/images/5/5c/Cosmetic_icon_Bladeform_Legacy.png/revision/latest?cb=20180127175847",
  //     description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat fugit inventore laudantium, dolor autem perferendis! Asperiores eaque est minima nobis nisi dolores laborum, expedita aut cupiditate incidunt suscipit alias adipisci?",
  //     price: "26 $"
  //   }
  //   {
  //     id: 2,
  //     name: "Аркана на течиса",
  //     img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcUmrBhVRUnDCOak0NzbXEk7Jw1QpbKqPzhs0uHPdHMUuI3kw9XcwPL3a-qCkDsAscF33buX94ql2wXhrUY_Nj31doLAcwA6fxiOrTu9sR-h",
  //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, ipsam.",
  //     price: "19 $"
  //   }
  // ]
  return(
    <div className="wrapper">
       <Header />
       <Items name='Аркана на джагернаута' img='https://static.wikia.nocookie.net/dota2_gamepedia/images/5/5c/Cosmetic_icon_Bladeform_Legacy.png/revision/latest?cb=20180127175847' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit.' price = '20 $'></Items>
       <Footer />


    </div>
  )
}
export default Home