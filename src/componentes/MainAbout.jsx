import React from 'react'
import { useState } from 'react'



export default function MainAbout() {
  
    const [num, setNum] = useState(1);

    const cambiarimagen = () => {

        num< 3 ? setNum(num+1) : setNum(1);

    }

const cambiarimagenizquieerda = (  ) => {

    num>1? setNum(num-1) : setNum(3)    ;
}
  
  
    return (
    <div className='row bg-success'> 
        <div className='col-4 container'>
            
            <br />
        <img src={`img${num}.jpg`} alt="" className='col-5' />
        <br />
        <button onClick={cambiarimagenizquieerda}>Izquierda</button> 
        <button onClick={cambiarimagen}>Derecha</button>
        
            </div>
            
        
        <div className='col-8'>
            <p className='col-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit veritatis repudiandae placeat numquam nam qui perferendis! Ad magnam porro iure, tenetur adipisci et corrupti ratione, aut voluptatibus magni eos dolorum.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum officiis officia vitae mollitia iste voluptas aliquid, facere, ab consequatur doloremque laboriosam repellendus quidem fugit hic, odit labore eum vero porro.
                
            </p>
        </div>
    </div>
  )
}
