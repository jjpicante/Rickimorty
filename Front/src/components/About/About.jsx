import styles from "./About.module.css"

const fotoJuan = "https://i.postimg.cc/mDXyGq7K/fotoasd.jpg"
export default function CartaCreador(){
    return (
    <div className={styles.cartas}>
     <div className= {styles.cardsindiv}>
         <h2 className={styles.name}>Juan Fiorovic</h2>
         <h2>Human</h2>
         <h2>Male</h2>
         <img src= {fotoJuan} alt={"img not found"} />
      </div>
    </div> 
    )
}