import React from 'react';
import Main from '../components/Main';
import Row from '../components/Row';

const Home = () => {
  const row1Images = [
    'https://i.ytimg.com/vi/tWwJGc3mmL8/maxresdefault.jpg',
    'https://pbs.twimg.com/media/Fp86VQdWAAEzGxA?format=jpg&name=900x900',
    'https://i.ytimg.com/vi/TyPQ4LfHqMs/maxresdefault.jpg',
    'https://static.moviecrow.com/marquee/thani-oruvan-2-jayam-ravi-nayanthara-director-mohan-raja-are-back/220745_thumb_565.jpg',
    'https://i.ytimg.com/vi/psJjZ7XByWQ/maxresdefault.jpg',
    'https://pbs.twimg.com/media/FmgAlWCaMAEbj-G.jpg',
    'https://i.ytimg.com/vi/7oBFNp-SPNQ/maxresdefault.jpg',
    'https://www.transcontinentaltimes.com/wp-content/uploads/2023/05/Lal-Salaam-1.jpeg',
    'https://teluguace.com/wp-content/uploads/2023/01/Captain-Miller-Movie-OTT-Release-Date.jpg',
    
  ];
  
  const row2Images = [
    
    'https://th.bing.com/th/id/OIP.QBirtfLqpHzvczPZ0HvCbQAAAA?pid=ImgDet&rs=1',
    'https://th.bing.com/th/id/OIP.h7F_mNHfpZvE1PzvZkZfcwHaEK?pid=ImgDet&rs=1',
    'https://i.ytimg.com/vi/dk6jjQOO2ls/maxresdefault.jpg',
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-hTcwU1Ufvefk6atSn4t-CUQm9lq9WqV9Kh0TT4OIkueFe_ODHDpSDOxr4MuZV-P1hxKJ9YgToexK18Eh73PXgU1Of9YRboQxjEO81tXH300oJndetbIQ5WNY1oebLiE_mAnUFXaxgMiPUv_woTjoW3F3g7o5yLVYitYqPTcbtEKU_-c_LMTBGI1blg/s1600/1600x960_1295898-vikram-movie.jpg',
    'https://i.ytimg.com/vi/ztnYp4l3LeE/maxresdefault.jpg',
    'https://i0.wp.com/www.newsbugz.com/wp-content/uploads/2023/06/Maaveeran-Movie.jpg?resize=590%2C354&ssl=1',
    'https://i.ytimg.com/vi/S1B9fvHWaEg/maxresdefault.jpg',
    'https://static-ai.asianetnews.com/images/01grx693j3rs7q8zepmgrdfkv5/dada-movie_1200x630xt.jpg',
    'https://images.cinemaexpress.com/uploads/user/imagelibrary/2023/4/18/w600X390/por_thozhil.jpg',
    'https://data1.ibtimes.co.in/en/full/774881/thiruchitrambalam.jpg',
    
  ];
  const row3Images = [
    'https://wallpapercave.com/wp/wp7791778.jpg',
    'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/87b0870c431586e7a596c243c023724be476a557649e2f76ea442662ace1f6c5._RI_V_TTW_.jpg',
    'https://th.bing.com/th/id/OIP.7Oui9fHNsljEa4fBTqBFIgHaEK?pid=ImgDet&rs=1',
    'https://i.pinimg.com/originals/f4/0a/60/f40a6068234d77a20bf334c5af5e4175.png',
    'https://i.pinimg.com/originals/54/0f/d0/540fd0849120ce4471fab3afb1d963e8.png',
    'https://th.bing.com/th/id/OIP.cpoBo9rG2gF_UEowHw3GCQAAAA?pid=ImgDet&rs=1',
    'https://th.bing.com/th/id/OIP.YoYn6IcP-epSCk-4kUfpBAHaDt?pid=ImgDet&rs=1',
    'https://www.newsfolo.com/wp-content/uploads/2017/09/vikram-747x420.png',
    'https://ibtpress.com/wp-content/uploads/2021/07/Sarpatta-Parambarai-Release-Date.jpg',
    'https://www.filmibeat.com/wimgm/1366x70/desktop/2018/10/vada-chennai_153924252680.jpg',

  ];
  const row4Images = [
    'https://img.starbiz.com/resize/750x-/2019/01/16/anbe-sivam-65b7.jpg',
    'https://i.pinimg.com/originals/f5/6f/bb/f56fbb4c4c324db616aab66dd32ad8cc.png',
    'https://secure-media0.hotstar.com/r1/thumbs/PCTV/59/1000058059/PCTV-1000058059-hcdl.jpg',
    'https://wallpapercave.com/wp/wp6482875.jpg',
    'https://i.pinimg.com/originals/a1/08/3e/a1083e73d51f50d583588a6b2b6507bf.png',
    'https://d229kpbsb5jevy.cloudfront.net/firstshows/content/common/movie/images/movie-icon-qc7xs2imvw.jpeg',
    'https://i.pinimg.com/originals/72/7c/75/727c75af00c52b7e973c3514de5aff0c.png',    
    'https://1.bp.blogspot.com/-AAH__VzeD5w/UvO7lh-vqYI/AAAAAAAADUg/RYr3xS2pbE4/s1600/302735_478852368821614_428075790_n.jpg',
    'https://i.ytimg.com/vi/ZMKZnTGRkmM/maxresdefault.jpg',
    'https://i.pinimg.com/originals/32/d3/5f/32d35ff08983dbcb384717d886b2ed07.png',
    // Add more image URLs here
  ];
  const row5Images = [
    'https://i.pinimg.com/originals/c3/e4/dc/c3e4dc62880d22b6eb7e3b30c76b5b4f.png',
    'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/8dedf3fc9ed701461ad512f19fe1616b756adacacb48fe1093bfb12b1e7ed006._RI_V_TTW_.jpg',
    'https://cdn.allhorror.com/uploads/2018/03/sjngiJfq0uNTYW84A3ujWVzrFV9.jpg',
    'https://i.pinimg.com/originals/ad/6b/92/ad6b92ea723a91fa958b5b76a51568e4.png',
    'https://th.bing.com/th/id/OIP.LkdkE60bB3sQT_LjP_yjmwHaEK?pid=ImgDet&rs=1',
    'https://i.ytimg.com/vi/-57xIBwtWrs/maxresdefault.jpg',
    'https://imgcacheblog.instube.com/2020/04/Chandramukhi-Movie-Download-InsTube.jpg',
    'https://akamaividz2.zee5.com/image/upload/w_1170,h_658,c_scale,f_auto,q_auto/resources/0-0-2511/list/002511_list_187316981.jpg',
    'https://static.moviecrow.com/marquee/andhaghaaram-review---a-slow-burn-thriller-that-is-excruciatingly-complex-and-keeps-you-fascinated/181830_thumb_665.jpg',
    'https://occ-0-1167-300.1.nflxso.net/dnm/api/v6/7e0PTVDdJ65eumyzagWiJKiw6MU/AAAABcVKn3FN_2yzqglCA5SXxomJCio_EVtsniTolCFRqUHnzqW0_rqZg-Xl3v5eDtOyngnGhQRkFUAP67V_77POEdsRSb6Z.jpg?r=626',
    // Add more image URLs here
  ];
  return (
    <>
      <Main />
      <Row rowID='1' title='Upcoming Movies' images={row1Images} />
      <Row rowID='2' title='Trending Movies' images={row2Images} />
      <Row rowID='3' title='BlockBuster Movies' images={row3Images} />
      <Row rowID='4' title='Top Rated Movies' images={row4Images} />
      <Row rowID='5' title='Horror Movies' images={row5Images} />
    </>
  );
};

export default Home;