
import React from 'react';
import css from '@/app/blog/posts.module.css'
import image from '@/app/images/14.png'
import image1 from '@/app/images/13.png'
import image2 from '@/app/images/16.png'
import image3 from '@/app/images/31.png'
import image4 from '@/app/images/32.png'
import image5 from '@/app/images/33.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';


const Posts = () => {
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className={css.blogcard}>
              <img className="rounded img-fluid w-100 fit-cover" src={image.src} alt="Blog 01" />
              <div className={css.cardbody}>
                <h5 className={css.cardtitle}>Blog 01</h5>
                <p className={css.cardtext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                <Link href="#" className={css.readmore}>Read More &gt;&gt;</Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className={css.blogcard}>
              <img className="rounded img-fluid w-100 fit-cover" src={image1.src} alt="Blog 02" />
              <div className={css.cardbody}>
                <h5 className={css.cardtitle}>Blog 02</h5>
                <p className={css.cardtext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                <Link href="#" className={css.readmore}>Read More &gt;&gt;</Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className={css.blogcard}>
              <img className="rounded img-fluid w-100 fit-cover" src={image2.src} alt="Blog 03" />
              <div className={css.cardbody}>
                <h5 className={css.cardtitle}>Blog 03</h5>
                <p className={css.cardtext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                <Link href="#" className={css.readmore}>Read More &gt;&gt;</Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className={css.blogcard}>
              <img className="rounded img-fluid w-100 fit-cover" src={image3.src} alt="Blog 04" />
              <div className={css.cardbody}>
                <h5 className={css.cardtitle}>Blog 04</h5>
                <p className={css.cardtext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                <Link href="#" className={css.readmore}>Read More &gt;&gt;</Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className={css.blogcard}>
              <img className="rounded img-fluid w-100 fit-cover" src={image4.src} alt="Blog 05" />
              <div className={css.cardbody}>
                <h5 className={css.cardtitle}>Blog 05</h5>
                <p className={css.cardtext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                <Link href="#" className={css.readmore}>Read More &gt;&gt;</Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className={css.blogcard}>
              <img className="rounded img-fluid w-100 fit-cover" src={image5.src} alt="Blog 06" />
              <div className={css.cardbody}>
                <h5 className={css.cardtitle}>Blog 06</h5>
                <p className={css.cardtext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                <Link href="#" className={css.readmore}>Read More &gt;&gt;</Link>
              </div>
            </div>
          </div>
          <div className="col-12 text-center mt-4">
            <button className="btn btn-primary" type="button" id="subscribe-btn">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
