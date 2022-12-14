import React,{useState} from "react";
import { Tabs  } from "antd";
import './HomeMore.scss'
import 'animate.css';
import cn from 'classnames'
function HomeMore() {
  const { TabPane } = Tabs;
  const [isTurnMore,setIsTurnMore] = useState(true)
  return (
    <div className="py-3 mt-3 homeMore">
      <Tabs defaultActiveKey="1" centered animated={true} >
        <TabPane className={cn( 'transform animate__animated animate__backInDown',{
          'hidden':isTurnMore

        })} 
          tab={<div className="text-xl hover:scale-110 text-black transition-all duration-500 ease-in-out font-semibold ">Movies 24h</div>}
          key="1"
        >
          <div  className="grid grid-cols-12 mt-4  ">
            <div className="md:col-start-3 md:col-span-4 col-start-2 col-span-10 md:pr-2  ">
              <div style={{ width: "100%"}}>
                <img
                  style={{ height: "287px",width:'100%' }}
                  className="rounded-md"
                  src="https://znews-photo.zingcdn.me/w660/Uploaded/vnaits/2022_06_27/fid20178_trid20431.jpg"
                  alt=""
                />

                <a className="text-lg my-2 text-black font-semibold hover:text-red-400 block">
                  Minions will be coming to Vietnam in June
                </a>
                <p>
                  We know how gibberish the minions are saying but did you know
                  some of the words the minions are saying are ... Minion
                  Language, English Translation. Bello!
                </p>
              </div>
            </div>
            <div className="md:col-start-7 md:col-span-4 col-start-2 col-span-10 md:pl-2 ">
              <div style={{ width: "100%"  }}>
                <img
                  style={{ height: "287px",width:'100%'  }}
                  className="rounded-md"
                  src="https://cdnimg.vietnamplus.vn/t620/uploaded/tpuohuo/2022_07_20/1650197263_conan.jpg"
                  alt=""
                />
                <a className="text-lg my-2 text-black font-semibold hover:text-red-400 block">
                  How did fans feel after watching Conan movie 25 ?
                </a>
                <p>
                  Great Detective Conan, officially translated as Detective
                  Conan) in its original release in Japan, is based on the manga
                  series of the same name by Gosho Aoyama.{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-12 mt-4">
              <div className="md:col-start-3 md:col-span-8 col-start-2 col-span-10   ">
                <div className="flex justify-between flex-wrap">
                  <div className="md:w-1/3 md:pr-2" >
                    <div style={{ width: "100%" }}>
                      <img
                       style={{height:'176px',width:'100%'}}
                        className="rounded-md"
                        src="https://s3img.vcdn.vn/123phim/2020/07/gerard-butler-cung-bo-cu-deadpool-tham-gia-greenland-15937528932506.png"
                        alt=""
                      />
                      <a
                        className="text-base font-semibold text-black hover:text-red-400 block my-2"
                        href=""
                      >
                        Gerard with Deadpool's old girl friend took part in
                        Greenland
                      </a>
                      <p>
                        The action movie with apocalyptic theme Greenland:
                        Meteor Point from the series producer John Wick released
                      </p>
                    </div>
                  </div>

                  <div className="md:w-1/3 md:px-2">
                    <div style={{ width: "100%" }}>
                      <img
                        style={{ height: "176px", width: "100%" }}
                        className="rounded-md"
                        src="https://i.imgur.com/vz02jVn.jpg"
                        alt=""
                      />
                      <a
                        className="text-base font-semibold text-black hover:text-red-400 block my-2"
                        href=""
                      >
                        The actress of The witch has a simple life
                      </a>
                      <p>
                        The actress of the witch has very simple single life .
                        She said she doesn't want to live in the city because
                        it's very noisy
                      </p>
                    </div>
                  </div>
                  <div className=" md:w-1/3 md:pl-2">
                    <div className="flex flex-col">
                      <div className="flex  mb-4">
                        <img
                          className="rounded-sm"
                          style={{ height: "50px", width: "50px" }}
                          src="https://s3img.vcdn.vn/123phim/2020/07/pee-nak-2-van-kiep-thien-thu-di-tu-khong-het-nghiep-15937498464029.png"
                          alt=""
                        />
                        <a className="text-black hover:text-red-400 text-base ml-2">
                          Pee Nak 2 - V???n ki???p thi??n thu, ??i tu kh??ng h???t
                          nghi???p!
                        </a>
                      </div>
                      <div className="flex mb-4">
                        <img
                          className="rounded-sm"
                          style={{ height: "50px", width: "50px" }}
                          src="https://s3img.vcdn.vn/123phim/2020/07/loat-phim-kinh-di-khong-the-bo-lo-trong-thang-7-15937470779379.png"
                          alt=""
                        />
                        <a className="text-black hover:text-red-400 text-base ml-2">
                          Lo???t phim kinh d??? kh??ng th??? b??? l??? trong th??ng 7!
                        </a>
                      </div>
                      <div className="flex  mb-4">
                        <img
                          className="rounded-sm"
                          style={{ height: "50px", width: "50px" }}
                          src="https://s3img.vcdn.vn/123phim/2020/06/rom-tung-trailer-he-lo-cuoc-song-cua-dan-choi-so-de-15929959532579.jpg"
                          alt=""
                        />
                        <a className="text-black hover:text-red-400 text-base ml-2">
                          R??M tung trailer h?? l??? cu???c s???ng c???a d??n ch??i s??? ?????
                        </a>
                      </div>
                      <div className="flex  mb-4">
                        <img
                          className="rounded-sm"
                          style={{ height: "50px", width: "50px" }}
                          src="https://s3img.vcdn.vn/123phim/2020/06/antebellum-trailer-cuoi-cung-khong-he-lo-bat-cu-thong-tin-gi-them-15929866818923.jpg"
                          alt=""
                        />
                        <a className="text-black hover:text-red-400 text-base ml-2">
                          Antebellum - Trailer cu???i c??ng kh??ng h?? l??? b???t c???
                          th??ng tin g?? th??m
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPane>
        <TabPane
        className={cn('animate__animated animate__backInDown',{
          'hidden':isTurnMore,

        })} 
          tab={<div className="text-xl text-black hover:scale-110 transition-all duration-500 ease-in-out font-semibold">Review</div>}
          key="2"
        >
          <div className="grid grid-cols-12 mt-4 ">
            <div className="md:col-start-3 md:col-span-4 col-start-2 col-span-10 md:pr-2 ">
              <div style={{ width: "100%" }}>
                <img
                  style={{ height: "287px" ,width:"100%"}}
                  className="rounded-md"
                  src="https://s3img.vcdn.vn/123phim/2020/03/review-nang-3-loi-hua-cua-cha-cau-chuyen-tinh-than-cam-dong-cua-kha-nhu-va-kieu-minh-tuan-15834049872311.jpg"
                  alt=""
                />

                <a className="text-lg my-2 text-black font-semibold hover:text-red-400 block">
                  [Review] N???ng 3: L???i H???a C???a Cha - C??u chuy???n t??nh th??n c???m
                  ?????ng c???a Kh??? Nh?? v?? Ki???u Minh Tu???n
                </a>
                <p>
                  Nh?? hai ph???n phim tr?????c, N???ng 3 ti???p t???c mang ?????n c??u chuy???n
                  t??nh cha, m??? - con ?????y n?????c m???t c???a b??? ba nh??n v???t ch??nh.
                </p>
              </div>
            </div>
            <div className="md:col-start-7 md:col-span-4 col-start-2 col-span-10 md:pl-2">
              <div style={{ width: "100%" }}>
                <img
                  style={{ height: "287px" ,width: "100%" }}
                  className="rounded-md"
                  src="https://s3img.vcdn.vn/123phim/2020/03/review-onward-khi-phep-thuat-manh-me-nhat-chinh-la-tinh-than-15832047938817.jpg"
                  alt=""
                />
                <a className="text-lg my-2 text-black font-semibold hover:text-red-400 block">
                  [Review] Onward - Khi ph??p thu???t m???nh m??? nh???t ch??nh l?? t??nh
                  th??n
                </a>
                <p>
                  T??c ph???m m???i nh???t c???a Pixar ti???p t???c l?? c??u chuy???n h??i h?????c v??
                  c???m x??c v??? t??nh c???m gia ????nh.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-12 mt-4">
              <div className="md:col-start-3 md:col-span-8 col-start-2 col-span-10    ">
                <div className="flex justify-between flex-wrap">
                  <div className="md:w-1/3 md:pr-2">
                    <div style={{ width: "100%" }}>
                      <img
                      style={{ height: "176px" ,width: "100%" }}
                        className="rounded-sm"
                        src="https://s3img.vcdn.vn/123phim/2020/02/review-ke-vo-hinh-con-gi-dang-so-hon-ke-giet-nguoi-benh-hoan-vo-hinh-15828835353362.jpg"
                        alt=""
                      />
                      <a
                        className="text-base font-semibold text-black hover:text-red-400 block my-2"
                        href=""
                      >
                        [Review] K??? V?? H??nh - C??n g?? ????ng s??? h??n k??? gi???t ng?????i
                        b???nh ho???n v?? h??nh?
                      </a>
                      <p>
                        Phi??n b???n hi???n ?????i c???a The Invisible Man l?? m???t trong
                        nh???ng phim kinh d??? xu???t s???c nh???t n??m nay.
                      </p>
                    </div>
                  </div>

                  <div className=" md:w-1/3 md:px-2">
                    <div style={{ width: "100%" }}>
                      <img
                        style={{ height: "176px", width: "100%" }}
                        className="rounded-sm"
                        src="https://s3img.vcdn.vn/123phim/2020/02/review-cau-be-ma-2-ban-trai-cua-be-beo-la-day-chu-dau-xa-15823608583110.jpg"
                        alt=""
                      />
                      <a
                        className="text-base font-semibold text-black hover:text-red-400 block my-2"
                        href=""
                      >
                        [Review] C???u B?? Ma 2 - B???n trai c???a 'b?? Beo' l?? ????y ch???
                        ????u xa
                      </a>
                      <p>
                        Brahms: The Boy II c?? nh???ng m??n h?? d???a ???n t?????ng nh??ng
                        c??i k???t l???i kh??ng t????ng x???ng v???i ph???n m??? ?????u h???a h???n.
                      </p>
                    </div>
                  </div>
                  <div className=" md:w-1/3 md:pl-2">
                    <div className="flex flex-col">
                      <div className="flex  mb-4">
                        <img
                          className="rounded-sm"
                          style={{ height: "50px", width: "50px" }}
                          src="https://s3img.vcdn.vn/123phim/2020/02/review-nhim-sonic-cuoi-tha-ga-cung-chang-nhim-sieu-thanh-lay-loi-15821907793369.jpg"
                          alt=""
                        />
                        <a className="text-black hover:text-red-400 text-base ml-2">
                          [Review] Nh??m Sonic - C?????i th??? ga c??ng ch??ng nh??m si??u thanh l???y l???i
                        </a>
                      </div>
                      <div className="flex mb-4">
                        <img
                          className="rounded-sm"
                          style={{ height: "50px", width: "50px" }}
                          src="https://s3img.vcdn.vn/123phim/2020/02/review-thang-nam-hanh-phuc-ta-tung-co-buong-bo-chua-bao-gio-la-viec-de-dang-15817967038683.jpg"
                          alt=""
                        />
                        <a className="text-black hover:text-red-400 text-base ml-2">
                          [Review] Th??ng N??m H???nh Ph??c Ta T???ng C?? - Bu??ng b??? ch??a bao gi??? l?? vi???c d??? d??ng
                        </a>
                      </div>
                      <div className="flex  mb-4">
                        <img
                          className="rounded-sm"
                          style={{ height: "50px", width: "50px" }}
                          src="https://s3img.vcdn.vn/123phim/2020/02/review-sac-dep-doi-tra-huong-giang-ke-chuyen-doi-minh-qua-phim-anh-15817958389162.jpg"
                          alt=""
                        />
                        <a className="text-black hover:text-red-400 text-base ml-2">
                          [Review] S???c ?????p D???i Tr?? - H????ng Giang k??? chuy???n ?????i m??nh qua phim ???nh
                        </a>
                      </div>
                      <div className="flex  mb-4">
                        <img
                          className="rounded-sm"
                          style={{ height: "50px", width: "50px" }}
                          src="https://s3img.vcdn.vn/123phim/2020/02/review-birds-of-prey-15809871977193.jpg"
                          alt=""
                        />
                        <a className="text-black hover:text-red-400 text-base ml-2">
                          [Review] Birds of Prey - M??n l???t x??c ho??nh tr??ng c???a Harley Quinn v?? DC
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPane>
        <TabPane
        className={cn('animate__animated animate__backInDown ',{
          'hidden':isTurnMore,
          // 'scale-0':isTurnMore,
        })} 
          tab={<div className="text-xl hover:scale-110 text-black transition-all duration-500 ease-in-out font-semibold">Voucher</div>}
          key="3"
        >
            <div className="grid grid-cols-12 mt-4">
            <div className="md:col-start-3 md:col-span-4 col-start-2 col-span-10 md:pr-2 ">
              <div style={{ width: "100%" }}>
                <img
                  style={{ height: "287px",width: "100%" }}
                  className="rounded-md"
                  src="https://s3img.vcdn.vn/123phim/2019/10/123phim-nhap-ma-bkt-giam-ngay-20k-khi-dat-ve-bac-kim-thang-15712976725554.jpg"
                  alt=""
                />

                <a className="text-lg my-2 text-black font-semibold hover:text-red-400 block">
                  [123Phim] NH???P M?? 'BKT' - Gi???m ngay 20k khi ?????t v?? B???c Kim Thang
                </a>
                <p>
                  123Phim ?????ng h??nh c??ng phim Vi???t - Gi???m ngay 20k m???i giao d???ch khi ?????t v?? B???c Kim Thang tr??n ???ng d???ng 123Phim.
                </p>
              </div>
            </div>
            <div className="md:col-start-7 md:col-span-4 col-start-2 col-span-10 md:pl-2  ">
              <div style={{ width: "100%" }}>
                <img
                  style={{ height: "287px",width: "100%" }}
                  className="rounded-md"
                  src="https://s3img.vcdn.vn/123phim/2019/08/sinh-nhat-mega-gs-15663933683466.jpg"
                  alt=""
                />
                <a className="text-lg my-2 text-black font-semibold hover:text-red-400 block">
                 Sinh Nh???t Mega GS
                </a>
                <p>
                 ?????n h???n l???i l??n, v???y l?? m???t n??m n???a ???? tr??i qua v?? ch??ng ta l???i ?????n th??ng 8, th??ng sinh nh???t c???a Mega GS Cinemas.
                </p>
              </div>
            </div>
          </div>
             <div className="grid grid-cols-12 ">
            <div className="md:col-start-3 md:col-span-4 col-start-2 col-span-10 md:pr-2 ">
              <div style={{ width: "100%" }}>
                <img
                  style={{ height: "287px", width: "100%"  }}
                  className="rounded-md"
                  src="https://s3img.vcdn.vn/123phim/2019/05/galaxy-trang-thi-xem-phim-hay-say-qua-tang-15572160162243.jpg"
                  alt=""
                />

                <a className="text-lg my-2 text-black font-semibold hover:text-red-400 block">
                 [Galaxy Tr??ng Thi] Xem Phim Hay, Say Qu?? T???ng
                </a>
                <p>
                 Nh??n d???p khai tr????ng Galaxy Tr??ng Thi, Galaxy Cinema d??nh t???ng c??c Stars H?? N???i lo???t ph???n qu?? si??u h???p d???n.
                </p>
              </div>
            </div>
            <div className="md:col-start-7 md:col-span-4 col-start-2 col-span-10 md:pl-2">
              <div style={{ width: "100%" }}>
                <img
                  style={{ height: "287px" ,width: "100%"}}
                  className="rounded-md"
                  src="https://s3img.vcdn.vn/123phim/2019/05/123phim-tixshop-tro-lai-qua-xin-hon-xua-15583511037699.jpg"
                  alt=""
                />
                <a className="text-lg my-2 text-black font-semibold hover:text-red-400 block">
                 [123Phim] TixShop tr??? l???i, qu?? ???x???n??? h??n x??a
                </a>
                <p>
                  Nhi???u Tix l??m g??, ????? ti??u v??o TixShop ch??? c??n ch??? chi.
                </p>
              </div>
            </div>
          </div>
        </TabPane>
      </Tabs>
      <div className=" bg-white my-4 text-center" >
        <button
        onClick={()=>setIsTurnMore(!isTurnMore)}
          style={{ border: "2px solid #ccc" }}
          className="px-3 py-2 rounded-md text-gray-400 text-lg hover:scale-110 transition-all duration-500 hover:bg-gray-500" 
        >
          {isTurnMore ? 'Show more...' : 'Shorten'}
        </button>
      </div>
    </div>
  );
}

export default HomeMore;
