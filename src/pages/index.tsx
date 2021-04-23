// SPA
// SSR
// SSG

export default function Home(props) {

  return (
    <div>
    <h1>index</h1>
    <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}
// SSR
export async function getStaticProps(){
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()
  return{
    props:{
      episodes: data,
    },
    //QUANTO EM QUANTO TEMPO SERA FEITO NOVA CHAMADA PARA API
    revalidate: 60 * 60 * 8,
  }
}