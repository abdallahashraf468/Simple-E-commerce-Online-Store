import React from 'react'
import Products from './Products';
 const Home = () => {
  return (
    <div className='hero'>
      <div className="card bg-primary text-white border-0">
  <img src="/image/pexels-alex-green-5699826.jpg" className="card-img " alt="Background"
  height="580px" />
  <div className="card-img-overlay d-flex flex-column justify-content-center">
    <div className="container">
 <h5 className="card-title display-3 fw-bolder mb-1"><em> Wellcome  ... </em></h5>
    <p className="card-text lead fs-2"> <em>Check Out All The Trends of Store </em></p>
    </div>
  </div>
</div>

                                                  {/*import Products  */}
                                                      <Products />
    </div>
  );
};
export default Home;