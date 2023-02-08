import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ( { category } ) => {

  // Los customHooks deben empezar con la palabra use
  const { images, isLoading} = useFetchGifs( category );

  // const [images, setImages] = useState([]);

  // const getImages = async() => {
  //   const newImages = await getGifs( category );
  //   setImages(newImages);
  // }

  // // useEffect tiene dos argumentos el callback que  es la funcion a ejecutar y  las dependencias
  // // Si se pone un array vacío como dependencias,significa que sólo se ejecutará al iniciarse el componente
  // // copmo que en GifGridExpert renderizamos las categorias cada vez que añadimos una categoría
  // // useEffect hace que sólo se renderice la nueva categoría sin perder las anteriores
  // // sin el useEffect se renderizarían todas las categorías otra vez.
  // useEffect( () => {
  //     getImages();
  // }, [])

  // Atención las peticiones http para obtener los gifs se disparan dos veces por que en main.jsx hay indicado el modo estricto

  return (
    <>
        <h3>{ category }</h3>
        {
            isLoading && <h2>Cargando...</h2>
        }

        <div className="card-grid">
            { 
                images.map( (image) => (
                    <GifItem key={image.id} { ...image }/> //otra forma de enviar propiedades es usar el spread para enviar cada dato por separado como propiedades
                )) 
            }
        </div>
    </>
  )
}
