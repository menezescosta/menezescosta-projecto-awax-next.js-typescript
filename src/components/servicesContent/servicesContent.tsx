import * as C from './style';
import Image from 'next/image';
import medalia from '../../../images/medalha.png';
import estrela from '../../../images/estrela.png';
import relogio from '../../../images/relogio.png';
import message from '../../../images/balao.png';

const ServicesContent=()=>{
    return(
        <C.Container id='services'>
            <div className='title'>
                <h2>SERVICES</h2>
                <span>SERVICES THAT WE PROVIDE</span>
            </div>
            <C.Services>
                <div className='service'>
                    <Image src={medalia} alt='medalha'/>
                    <div className='name'>HIGH QUALITY DESIGN</div>
                    <small>Lorem ipsum dolor sit amet consectetur </small>
                </div>
                <div className='service'>
                    <Image src={estrela} alt='medalha' />
                    <div className='name'>MODERN DESIGN</div>
                    <small>Lorem ipsum dolor sit amet consectetur </small>
                </div >
                <div className='service'>
                    <Image src={relogio} alt='medalha' />
                    <div className='name'>REGULAR UPDATES</div>
                    <small>Lorem ipsum dolor sit amet consectetur </small>
                </div>
                <div className='service'>
                    <Image src={message} alt='medalha' />
                    <div className='name'>FAST AND FREE SUPPORT</div>
                    <small>Lorem ipsum dolor sit amet consectetur </small>
                </div>
            </C.Services>
        </C.Container>
    );
}
export default ServicesContent;