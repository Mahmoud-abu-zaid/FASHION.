export default function Lifestyle() {
  return (
    <>
      <div>
        <div>
          <h2 className="text-[30px] py-[60px] mx-9 relative">
            <img className="  absolute z-[-1]  left-20 bottom-14 w-[140px]" src="/public/img/Vector 8.png" alt="" />
            <b>Young’s Favourite</b>
          </h2>
        </div>
        <div className="flex justify-center items-center flex-wrap">
          <div className="m-3 md:w-[40%] ">
            <img className="md:w-[100%] md:h-[350px] rounded-lg" src="/img/Screenshot 2025-02-26 160734.png" alt="" />
            <div className="flex justify-between py-3 p-2">
              <div>
                <h3>
                  <b>Trending on instagram</b>
                </h3>
                <p>Explore Now!</p>
              </div>
              <div>
              <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
          <div className="m-3 md:w-[40%]">
            <img className="md:w-[100%] md:h-[350px] rounded-lg " src="/img/Screenshot 2025-02-26 160734.png" alt="" />
            <div className="flex justify-between py-3  p-2">
              <div>
                <h3>
                  <b>All Under $40</b>
                </h3>
                <p>Explore Now!</p>
              </div>
              <div>
              <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
