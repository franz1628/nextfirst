import Button from "./Button"

interface PaginadoProps {
    pageActual : number
    totalPage : number
    onSetPageActual : (pageActual:number)=>void
}

const Paginado:React.FC<PaginadoProps> = ({pageActual, totalPage,onSetPageActual}) => {

    return <div className="flex justify-center items-center space-x-2 mt-4">

                <Button color="primary" onClick={()=>{onSetPageActual(1)}} disabled={pageActual==1}>
                    &lt;&lt;
                </Button>
                <Button color="primary" onClick={()=>{onSetPageActual(pageActual-1)}} disabled={pageActual==1}>
                    &lt;
                </Button>

                <Button color="primary" >
                    {pageActual}
                </Button>
            
                <Button color="primary" onClick={()=>{onSetPageActual(pageActual+1)}} disabled={pageActual==totalPage}>
                    &gt;
                </Button>

                <Button color="primary" onClick={()=>{onSetPageActual(totalPage)}} disabled={pageActual==totalPage}>
                    &gt;&gt;
                </Button>
            </div>
}

export default Paginado;