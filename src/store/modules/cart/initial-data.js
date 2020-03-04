import produto01image from '../../../assets/img/produto-01.jpeg';
import produto02image from '../../../assets/img/produto-02.jpeg';
import produto03image from '../../../assets/img/produto-03.jpeg';
import produto04image from '../../../assets/img/produto-04.jpeg';
import produto05image from '../../../assets/img/produto-05.jpeg';
import produto06image from '../../../assets/img/produto-06.jpeg';
import produto07image from '../../../assets/img/produto-07.jpeg';
import produto08image from '../../../assets/img/produto-08.jpeg';
import { formatPrice } from '../../../util/format';

const itens = [
    {
        id: 1,
        name: 'AirPods Apple Fones de ouvido',
        price: 1499,
        image: produto01image,
    },
    {
        id: 2,
        name: 'Capa de silicone para iPhone 8/7 cor Areia - rosa',
        price: 299,
        image: produto02image,
    },
    {
        id: 3,
        name: 'Apple Pencil',
        price: 729,
        image: produto03image,
    },
    {
        id: 4,
        name: 'Magic Moude 2 - Prateado',
        price: 549,
        image: produto04image,
    },
    {
        id: 5,
        name: 'Caixa prateada de alumínio com pulseira esportiva branca',
        price: 2899,
        image: produto05image,
    },
    {
        id: 6,
        name: 'Cabo de lightning para USB (1m)',
        price: 149,
        image: produto06image,
    },
    {
        id: 7,
        name: 'Smart Keyboard para iPad Pro de 12,9 polegadas - inglês (EUA)',
        price: 1099,
        image: produto07image,
    },
    {
        id: 8,
        name: 'Carregador USB de 5w Apple',
        price: 149,
        image: produto08image,
    },
];

export default itens.map((item) => {
    return {
        ...item,
        formattedPrice: formatPrice(item.price),
        cashText: `Em 12x de ${formatPrice(item.price / 12)}`,
        termText: `${formatPrice(item.price * 0.9)} à vista (10% de desconto)`,
        amount: 0,
    };
});
