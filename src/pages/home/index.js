// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import {
  Container,
  ContainerCategory,
  ContainerTitle,
  ContainerGames,
  Title,
  Line,
} from './styles';

import gameData from '../../core/utils/gameData';

import GameCard from '../../components/gameCard';

SwiperCore.use([Navigation]);

const Home = () => (
  <Container>
    <ContainerCategory>
      <ContainerTitle>
        <Title>DESTAQUES</Title>
        <Line />
      </ContainerTitle>

      <ContainerGames>
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          navigation
        >
          {gameData.map((game) => (
            <SwiperSlide key={game.id}>
              <GameCard game={game} />
            </SwiperSlide>
          ))}
        </Swiper>
      </ContainerGames>
    </ContainerCategory>

    <ContainerCategory>
      <ContainerTitle>
        <Title>Mais Vendidos</Title>
        <Line />
      </ContainerTitle>

      <ContainerGames>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          navigation
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {gameData.map((game) => (
            <SwiperSlide key={game.id}>
              <GameCard game={game} />
            </SwiperSlide>
          ))}
        </Swiper>
      </ContainerGames>
    </ContainerCategory>
  </Container>
);

export default Home;
