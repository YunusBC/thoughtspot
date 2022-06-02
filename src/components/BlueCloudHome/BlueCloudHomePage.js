import React from "react";
import "./index.css";
import TopMenuNav from "../TopMenuNav/TopMenuNav";
import LandingMenu from "../TopMenuNav/LandingMenu";

const BlueCloudHomePage = () => {
  return (
    <>
      <div className="wrapper">
        <div className="preloader">
          <div className="spinner">
            <span className="cube1"></span>
            <span className="cube2"></span>
          </div>
        </div>
        <header className="header header-light header-layout1">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid px-0">
              <a className="navbar-brand" href="index.html">
                <img
                  src="https://blue.cloud/assets/images/logo/logo-dark.svg"
                  className="logo-dark"
                  alt=""
                />
              </a>
              <button className="navbar-toggler" type="button">
                <span className="menu-lines">
                  <span></span>
                </span>
              </button>
              <div className="collapse navbar-collapse" id="mainNavigation">
                <ul className="navbar-nav ml-auto">
                  <li className="nav__item with-dropdown">
                    <a href="#" className="dropdown-toggle nav__item-link">
                      Services
                    </a>
                    <i className="fa fa-angle-down" data-toggle="dropdown"></i>
                    <ul className="dropdown-menu">
                      <li className="nav__item">
                        <a
                          href="https://blue.cloud/AI-services"
                          className="nav__item-link"
                        >
                          AI Services
                        </a>
                      </li>

                      <li className="nav__item">
                        <a
                          href="https://blue.cloud/data-engineering_analytics"
                          className="nav__item-link"
                        >
                          Data Engineering & Analytics
                        </a>
                      </li>

                      <li className="nav__item">
                        <a
                          href="https://blue.cloud/digital-transformation"
                          className="nav__item-link"
                        >
                          Digital Transformation
                        </a>
                      </li>

                      <li className="nav__item">
                        <a
                          href="https://blue.cloud/digital-services"
                          className="nav__item-link"
                        >
                          Digital Services
                        </a>
                      </li>

                      <li className="nav__item">
                        <a
                          href="https://blue.cloud/cloud-operations"
                          className="nav__item-link"
                        >
                          Cloud Operations
                        </a>
                      </li>

                      <li className="nav__item">
                        <a
                          href="https://blue.cloud/strategic-management-consulting"
                          className="nav__item-link"
                        >
                          Strategic Management Consulting
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav__item">
                    <a
                      href="https://blue.cloud/insights"
                      className="nav__item-link"
                    >
                      Insights
                    </a>
                  </li>

                  <li className="nav__item with-dropdown">
                    <a href="#" className="dropdown-toggle nav__item-link">
                      About Us
                    </a>
                    <i className="fa fa-angle-down" data-toggle="dropdown"></i>
                    <ul className="dropdown-menu">
                      <li className="nav__item">
                        <a
                          href="https://blue.cloud/company-overview"
                          className="nav__item-link"
                        >
                          Company Overview
                        </a>
                      </li>

                      <li className="nav__item">
                        <a
                          href="https://blue.cloud/leadership"
                          className="nav__item-link"
                        >
                          Leadership
                        </a>
                      </li>
                      <li className="nav__item">
                        <a
                          href="https://blue.cloud/clients"
                          className="nav__item-link"
                        >
                          Clients
                        </a>
                      </li>
                      <li className="nav__item">
                        <a
                          href="https://blue.cloud/partners"
                          className="nav__item-link"
                        >
                          Partners
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav__item">
                    <a
                      href="https://blue.cloud/newsroom"
                      className="nav__item-link"
                    >
                      Newsroom
                    </a>
                  </li>

                  <li className="nav__item">
                    <a
                      target="_blank"
                      href="https://www2.jobdiva.com/portal/?a=9ojdnwmtjxde32cg1gov4ju06dici30416djr1trt929gj9kc3exrk24kkukdpqb&amp;compid=0#/"
                      className="nav__item-link"
                    >
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
              <div className="header-actions d-flex align-items-center">
                <a
                  href="https://blue.cloud/contact-us"
                  className="btn btn__primary action-btn__request"
                >
                  <span>Contact Us</span>
                  <i className="icon-arrow-right"></i>
                </a>
              </div>
            </div>
          </nav>
        </header>
        <section className="slider slider-layout1">
          <div
            className="slick-carousel carousel-arrows-light m-slides-0"
            data-slick='{"slidesToShow": 1, "arrows": true, "dots": false, "speed": 500,"fade": true,"cssEase": "linear"}'
          >
            <a href="https://blue.cloud/company-overview">
              <div className="slide-item align-v-h">
                <div className="bg-img">
                  <img
                    src="https://blue.cloud/assets/images/sliders/9-mini.jpg"
                    alt=""
                  />
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
                      <div className="slide-item__content">
                        <h3 className="slide-item-sub__title mt-160">
                          from Fortune 500 Enterprises to Silicon Valley
                          Startups
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            <a href="https://blue.cloud/AI-services">
              <div className="slide-item align-v-h bg-overlay">
                <div className="bg-img">
                  <img
                    src="https://blue.cloud/assets/images/sliders/5.jpg"
                    alt=""
                  />
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 text-right">
                      <div className="slide-item__content bal">
                        <h2 className="slide-item__title">AI Services</h2>
                        <h3 className="slide-item-sub__title">
                          Enabling Innovation at Scale
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            <a href="https://blue.cloud/cloud-operations">
              <div className="slide-item align-v-h bg-overlay">
                <div className="bg-img">
                  <img
                    src="https://blue.cloud/assets/images/sliders/6.jpg"
                    alt=""
                  />
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 text-left">
                      <div className="slide-item__content bal">
                        <h2 className="slide-item__title">Cloud-Only</h2>
                        <h3 className="slide-item-sub__title">
                          Enabling Innovation at Scale
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            <a href="https://blue.cloud/data-engineering_analytics">
              <div className="slide-item align-v-h bg-overlay">
                <div className="bg-img">
                  <img
                    src="https://blue.cloud/assets/images/sliders/7.jpg"
                    alt=""
                  />
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 text-left">
                      <div className="slide-item__content ball">
                        <h2 className="slide-item__title">
                          Intelligent Analytics
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </section>
        <section className="features-latout1 py-0">
          <div className="container">
            <div className="row mx-0">
              <div className="col-sm-12 col-md-12 col-lg-12 px-0 features-wrapper d-flex flex-wrap">
                <div className="feature-item">
                  <div className="feature-item__content">
                    <h4 className="feature-item__title color-orange">200+</h4>
                    <p className="feature-item__desc">
                      <em>AI and Analytics Implementations</em>
                    </p>
                    <p className="feature-item__desc">Across Industries</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-item__content">
                    <h4 className="feature-item__title color-yellow">10+</h4>
                    <p className="feature-item__desc">
                      <em>Fortune 500 Clients</em>
                    </p>
                    <p className="feature-item__desc">Multi Year Engagements</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-item__content">
                    <h4 className="feature-item__title color-green">400+</h4>
                    <p className="feature-item__desc">
                      <em>Consultants</em>
                    </p>
                    <p className="feature-item__desc">Worldwide</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-item__content">
                    <h4 className="feature-item__title color-theme">7+</h4>
                    <p className="feature-item__desc">
                      <em>Technology Partners</em>
                    </p>
                    <p className="feature-item__desc">
                      <div>
                        <img
                          className="float-left"
                          width="25px"
                          src="https://blue.cloud/assets/images/partners/snowflake-emblem.svg"
                          alt=""
                        />
                        <img
                          className="float-left"
                          width="25px"
                          src="https://blue.cloud/assets/images/partners/thoughtspot-emblem.svg"
                          alt=""
                        />
                        <img
                          className="float-left"
                          width="25px"
                          src="https://blue.cloud/assets/images/partners/starburst-emblem.svg"
                          alt=""
                        />
                        <img
                          className="float-left"
                          width="96px"
                          src="https://blue.cloud/assets/images/partners/DataRobot-emblem.svg"
                          alt=""
                        />
                        <br />
                        <br />
                        <img
                          className="float-left"
                          width="38px"
                          src="https://blue.cloud/assets/images/partners/aws-emblem.svg"
                          alt=""
                        />
                        <img
                          className="float-left"
                          width="32px"
                          src="https://blue.cloud/assets/images/partners/azure-emblem.svg"
                          alt=""
                        />
                        <img
                          className="float-left"
                          width="32px"
                          src="https://blue.cloud/assets/images/partners/gcloud-emblem.svg"
                          alt=""
                        />
                      </div>
                    </p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-item__content">
                    <h4 className="feature-item__title color-theme">#1</h4>
                    <p className="feature-item__desc">
                      <em>Employee First</em>
                    </p>
                    <p className="feature-item__desc">
                      Culture of Empowerment and Learning across all Global
                      Teams
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="services">
          <div className="services-bg">
            <div className="bg-img">
              <img
                src="https://blue.cloud/assets/images/backgrounds/home1_bg1.png"
                alt=""
              />
            </div>
          </div>
          <div className="container">
            <div className="row heading heading-2 mb-10">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <h2 className="heading__title">Real Solutions, Real Fast.</h2>
              </div>
            </div>

            <div className="row text-center row justify-content-md-center">
              <div className="col-sm-6 col-md-6 col-lg-4">
                <div className="service-item">
                  <div className="service__icon">
                    <i className="flaticon-artificial-intelligence color-blue"></i>
                  </div>
                  <div className="service__content">
                    <h4 className="service__title">AI Services</h4>
                    <p className="service__desc">
                      AI Solutions help companies make smarter, faster decisions
                      in an automated way.
                    </p>
                    <a
                      href="https://blue.cloud/AI-services"
                      className="btn btn__indexserv"
                    >
                      <span>Read More</span>
                      <i className="icon-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6 col-lg-4">
                <div className="service-item">
                  <div className="service__icon">
                    <i className="flaticon-laptop color-green"></i>
                  </div>
                  <div className="service__content">
                    <h4 className="service__title">
                      Data Engineering & Analytics
                    </h4>
                    <p className="service__desc">
                      Key driver of business strategy for a true digital
                      organization.
                    </p>
                    <a
                      href="https://blue.cloud/data-engineering_analytics"
                      className="btn btn__indexserv"
                    >
                      <span>Read More</span>
                      <i className="icon-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6 col-lg-4">
                <div className="service-item">
                  <div className="service__icon">
                    <i className="flaticon-digital-strategy color-orange"></i>
                  </div>
                  <div className="service__content">
                    <h4 className="service__title">Digital Transformation</h4>
                    <p className="service__desc">
                      Holistic, complete and effective solutions by harnessing
                      cloud, data and AI to build bridges between IT and
                      business.
                    </p>
                    <a
                      href="https://blue.cloud/digital-transformation"
                      className="btn btn__indexserv"
                    >
                      <span>Read More</span>
                      <i className="icon-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6 col-lg-4">
                <div className="service-item">
                  <div className="service__icon">
                    <i className="flaticon-information-management color-theme"></i>
                  </div>
                  <div className="service__content">
                    <h4 className="service__title">Digital Services</h4>
                    <p className="service__desc">
                      Simplify, modernize, digitalize and transform your
                      business. Provide richer and better experiences,
                      resiliency and agility.
                    </p>
                    <a
                      href="https://blue.cloud/digital-services"
                      className="btn btn__indexserv"
                    >
                      <span>Read More</span>
                      <i className="icon-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6 col-lg-4">
                <div className="service-item">
                  <div className="service__icon">
                    <i className="flaticon-operating color-yellow"></i>
                  </div>
                  <div className="service__content">
                    <h4 className="service__title">Cloud Operations</h4>
                    <p className="service__desc">
                      End to end cloud operations that enable you to expand on
                      your cloud strategy and empower the digital
                      transformation...
                    </p>
                    <a
                      href="https://blue.cloud/cloud-operations"
                      className="btn btn__indexserv"
                    >
                      <span>Read More</span>
                      <i className="icon-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6 col-lg-4">
                <div className="service-item">
                  <div className="service__icon">
                    <i className="flaticon-planning color-ash"></i>
                  </div>
                  <div className="service__content">
                    <h4 className="service__title">
                      Strategic Management Consulting
                    </h4>
                    <p className="service__desc">
                      Technology is the catalyst to change your business model
                      but it should not drive the way you transform...
                    </p>
                    <a
                      href="https://blue.cloud/strategic-management-consulting"
                      className="btn btn__indexserv"
                    >
                      <span>Read More</span>
                      <i className="icon-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="portfolio-standard portfolio-standard-carousel bg-gray">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6">
                <div className="heading mb-40">
                  <h3 className="heading__title">Featured Business Cases</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <div
                  className="slick-carousel"
                  data-slick='{"slidesToShow": 3, "slidesToScroll": 1, "arrows": true, "dots": true, "responsive": [ {"breakpoint": 992, "settings": {"slidesToShow": 3}}, {"breakpoint": 767, "settings": {"slidesToShow": 2}}, {"breakpoint": 480, "settings": {"slidesToShow": 1}}]}'
                >
                  <div className="portfolio-item">
                    <div className="portfolio-item__img">
                      <img
                        src="https://blue.cloud/assets/images/case-studies/data-1.png"
                        alt=""
                      />
                    </div>
                    <div className="portfolio-item__content">
                      <h4 className="portfolio-item__title">
                        <a href="https://blue.cloud/cloud-data-modernization">
                          Cloud Data Modernization – Large Real Estate Services
                          Company
                        </a>
                      </h4>
                      <a
                        href="https://blue.cloud/cloud-data-modernization"
                        className="btn btn__loadMore"
                      >
                        <i className="icon-arrow-right"></i>{" "}
                        <span>Explore More</span>
                      </a>
                    </div>
                  </div>

                  <div className="portfolio-item">
                    <div className="portfolio-item__img">
                      <img
                        src="https://blue.cloud/assets/images/case-studies/cloud-service-1.png"
                        alt=""
                      />
                    </div>
                    <div className="portfolio-item__content">
                      <h4 className="portfolio-item__title">
                        <a href="https://blue.cloud/modernize-and-transform-operations">
                          Modernize and Transform Operations
                        </a>
                      </h4>
                      <a
                        href="https://blue.cloud/modernize-and-transform-operations"
                        className="btn btn__loadMore"
                      >
                        <i className="icon-arrow-right"></i>{" "}
                        <span>Explore More</span>
                      </a>
                    </div>
                  </div>

                  <div className="portfolio-item">
                    <div className="portfolio-item__img">
                      <img
                        src="https://blue.cloud/assets/images/case-studies/cloud-service-2.png"
                        alt=""
                      />
                    </div>
                    <div className="portfolio-item__content">
                      <h4 className="portfolio-item__title">
                        <a href="https://blue.cloud/post-merger_data-platform-consolidation">
                          Post Merger; Data Platform Consolidation
                        </a>
                      </h4>
                      <a
                        href="https://blue.cloud/post-merger_data-platform-consolidation"
                        className="btn btn__loadMore"
                      >
                        <i className="icon-arrow-right"></i>{" "}
                        <span>Explore More</span>
                      </a>
                    </div>
                  </div>

                  <div className="portfolio-item">
                    <div className="portfolio-item__img">
                      <img
                        src="https://blue.cloud/assets/images/case-studies/digital-service-1.png"
                        alt=""
                      />
                    </div>
                    <div className="portfolio-item__content">
                      <h4 className="portfolio-item__title">
                        <a href="https://blue.cloud/enhanced-customer-experience-through-modernization">
                          Enhanced Customer Experience through Modernization
                        </a>
                      </h4>
                      <a
                        href="https://blue.cloud/enhanced-customer-experience-through-modernization"
                        className="btn btn__loadMore"
                      >
                        <i className="icon-arrow-right"></i>{" "}
                        <span>Explore More</span>
                      </a>
                    </div>
                  </div>

                  <div className="portfolio-item">
                    <div className="portfolio-item__img">
                      <img
                        src="https://blue.cloud/assets/images/case-studies/digital-service-2.png"
                        alt=""
                      />
                    </div>
                    <div className="portfolio-item__content">
                      <h4 className="portfolio-item__title">
                        <a href="https://blue.cloud/streamlining-business-processes-to-increase-efficiency">
                          Streamlining business processes to increase efficiency
                        </a>
                      </h4>
                      <a
                        href="https://blue.cloud/streamlining-business-processes-to-increase-efficiency"
                        className="btn btn__loadMore"
                      >
                        <i className="icon-arrow-right"></i>{" "}
                        <span>Explore More</span>
                      </a>
                    </div>
                  </div>

                  <div className="portfolio-item">
                    <div className="portfolio-item__img">
                      <img
                        src="https://blue.cloud/assets/images/case-studies/digital-strategy-2.png"
                        alt=""
                      />
                    </div>
                    <div className="portfolio-item__content">
                      <h4 className="portfolio-item__title">
                        <a href="https://blue.cloud/enabling-business-insights">
                          Enabling Business Insights{" "}
                        </a>
                      </h4>
                      <a
                        href="https://blue.cloud/enabling-business-insights"
                        className="btn btn__loadMore"
                      >
                        <i className="icon-arrow-right"></i>{" "}
                        <span>Explore More</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="blog-grid">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
                <div className="heading text-center mb-50">
                  <h2 className="heading__subtitle">Newsroom</h2>
                  <h3 className="heading__title">Recent Articles</h3>
                  <span className="divider-line mx-auto"></span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="post-item">
                  <div className="post-item__img">
                    <a href="https://blue.cloud/Blue.cloud-Recognized-on-CRN’s-2022-Solution-Provider-500-List">
                      <img
                        src="https://blue.cloud/assets/images/news/crn2022.jpg"
                        alt="Blue.cloud Recognized on CRN’s 2022 Solution Provider 500 List"
                      />
                    </a>
                  </div>
                  <div className="post-item__content">
                    <div className="post-item__meta d-flex flex-wrap align-items-center">
                      <span className="post-item__meta-date">
                        June 01, 2022{" "}
                      </span>
                    </div>
                    <h4 className="post-item__title">
                      <a href="https://blue.cloud/Blue.cloud-Recognized-on-CRN’s-2022-Solution-Provider-500-List">
                        <span className="color-theme">Blue.cloud</span>{" "}
                        Recognized on CRN’s 2022 Solution Provider 500 List
                      </a>
                    </h4>
                    <p className="post-item__desc">
                      Cloud-only digital transformation company is a newcomer on
                      the list after 185% year-over-year revenue growth in 2021
                    </p>
                    <a
                      href="https://blue.cloud/Blue.cloud-Recognized-on-CRN’s-2022-Solution-Provider-500-List"
                      className="btn btn__link"
                    >
                      <i className="icon-arrow-right"></i>
                      <span>Read More</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="post-item">
                  <div className="post-item__img">
                    <a href="https://blue.cloud/Blue.cloud’s-Brian-Alvarez-awarded-CFO-of-the-year-2022-by-Tampa-Bay-Business-Journal">
                      <img
                        src="https://blue.cloud/assets/images/news/cfo-brian.jpg"
                        alt="Blue.cloud’s Brian Alvarez Awarded CFO of the Year 2022 by Tampa Bay Business Journal"
                      />
                    </a>
                  </div>
                  <div className="post-item__content">
                    <div className="post-item__meta d-flex flex-wrap align-items-center">
                      <span className="post-item__meta-date">
                        May 31, 2022{" "}
                      </span>
                    </div>
                    <h4 className="post-item__title">
                      <a href="https://blue.cloud/Blue.cloud’s-Brian-Alvarez-awarded-CFO-of-the-year-2022-by-Tampa-Bay-Business-Journal">
                        <span className="color-theme">Blue.cloud</span>'s Brian
                        Alvarez Awarded CFO of the Year 2022 by Tampa Bay
                        Business Journal
                      </a>
                    </h4>
                    <p className="post-item__desc">
                      TBBJ’s CFO of the Year ceremony honored the top financial
                      executives who help grow their companies and play an
                      active role in the region's economy at the Hilton Tampa
                      Downtown on May 26, 2022.
                    </p>
                    <a
                      href="https://blue.cloud/Blue.cloud’s-Brian-Alvarez-awarded-CFO-of-the-year-2022-by-Tampa-Bay-Business-Journal"
                      className="btn btn__link"
                    >
                      <i className="icon-arrow-right"></i>
                      <span>Read More</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="post-item">
                  <div className="post-item__img">
                    <a
                      href="https://www.bizjournals.com/tampabay/news/2022/05/19/meet-brian-alvarez-a-2022-cfo-of-the-year-honoree.html"
                      target="_blank"
                    >
                      <img
                        src="https://blue.cloud/assets/images/news/cfo.jpg"
                        alt="Meet Brian Alvarez, a 2022 CFO of the Year honoree"
                      />
                    </a>
                  </div>
                  <div className="post-item__content">
                    <div className="post-item__meta d-flex flex-wrap align-items-center">
                      <span className="post-item__meta-date">
                        May 19, 2022{" "}
                      </span>
                    </div>
                    <h4 className="post-item__title">
                      {" "}
                      <a
                        href="https://www.bizjournals.com/tampabay/news/2022/05/19/meet-brian-alvarez-a-2022-cfo-of-the-year-honoree.html"
                        target="_blank"
                      >
                        Meet Brian Alvarez, a 2022 CFO of the Year honoree
                      </a>
                    </h4>
                    <p className="post-item__desc">
                      Brian Alvarez is the CFO of Blue.cloud, a technology
                      services company that helps clients transform to the
                      cloud.
                    </p>
                    <a
                      href="https://www.bizjournals.com/tampabay/news/2022/05/19/meet-brian-alvarez-a-2022-cfo-of-the-year-honoree.html"
                      target="_blank"
                      className="btn btn__link"
                    >
                      <i className="icon-arrow-right"></i>
                      <span>Read More</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="counters-layout2">
          <div className="bg-img">
            <img
              src="https://blue.cloud/assets/images/backgrounds/2.jpg"
              alt="background"
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <div className="heading-layout3 mb-70">
                  <h3 className="heading__title">
                    Delivering High Quality Projects and Innovative Solutions.
                  </h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-3 col-lg-3">
                <div className="counter-item">
                  <div className="color-blue">
                    {" "}
                    <div className="counter">110</div> <span>+</span>
                  </div>
                  <p className="clear counter-item__desc">
                    Happy
                    <br />
                    Customers
                  </p>
                </div>
              </div>

              <div className="col-sm-6 col-md-3 col-lg-3">
                <div className="counter-item">
                  <div className="color-orange">
                    {" "}
                    <div className="counter">93</div> <span>%</span>
                  </div>
                  <p className="clear counter-item__desc">
                    Employee
                    <br />
                    Delight
                  </p>
                </div>
              </div>

              <div className="col-sm-6 col-md-3 col-lg-3">
                <div className="counter-item">
                  <div className="color-yellow">
                    <div className="counter">400</div>
                    <span>+</span>
                  </div>
                  <p className="clear counter-item__desc">
                    Global
                    <br />
                    BlueStars
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3">
                <div className="counter-item">
                  <div className="color-green">
                    <div className="counter">80</div> <span>+</span>
                  </div>
                  <p className="clear counter-item__desc">
                    Certified
                    <br />
                    Professionals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="clients" className="clients border-top">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-6 clients-sep pt-30 pb-30">
                <h5>Clients who have trusted us</h5>
                <div
                  className="slick-carousel"
                  data-slick='{"slidesToShow": 3, "slidesToScroll": 1, "arrows": false, "dots": false, "autoplay": true, "responsive": [ {"breakpoint": 992, "settings": {"slidesToShow": 3}}, {"breakpoint": 767, "settings": {"slidesToShow": 2}}, {"breakpoint": 480, "settings": {"slidesToShow": 1}}]}'
                >
                  <div className="client">
                    <a href="https://blue.cloud/clients">
                      <img
                        src="https://blue.cloud/assets/images/clients/hsbc.svg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="client">
                    <a href="https://blue.cloud/clients">
                      <img
                        src="https://blue.cloud/assets/images/clients/jll.svg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="client">
                    <a href="https://blue.cloud/clients">
                      <img
                        src="https://blue.cloud/assets/images/clients/ama.svg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="client">
                    <a href="https://blue.cloud/clients">
                      <img
                        src="https://blue.cloud/assets/images/clients/fedex.svg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="client">
                    <a href="https://blue.cloud/clients">
                      <img
                        src="https://blue.cloud/assets/images/clients/sodexo.svg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="client">
                    <a href="https://blue.cloud/clients">
                      <img
                        src="https://blue.cloud/assets/images/clients/danaher.svg"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-6 pt-30 pb-30">
                <h5>Our Technology Partners</h5>
                <div
                  className="slick-carousel"
                  data-slick='{"slidesToShow": 3, "slidesToScroll": 1, "arrows": false, "dots": false, "autoplay": true, "responsive": [ {"breakpoint": 992, "settings": {"slidesToShow": 3}}, {"breakpoint": 767, "settings": {"slidesToShow": 2}}, {"breakpoint": 480, "settings": {"slidesToShow": 1}}]}'
                >
                  <div className="client">
                    <a href="https://blue.cloud/partners">
                      <img
                        src="https://blue.cloud/assets/images/partners/GCloud.svg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="client">
                    <a href="https://blue.cloud/partners">
                      <img
                        src="https://blue.cloud/assets/images/partners/thoughtspot.svg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="client">
                    <a href="https://blue.cloud/partners">
                      <img
                        src="https://blue.cloud/assets/images/partners/snowflake.svg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="client">
                    <a href="https://blue.cloud/partners">
                      <img
                        src="https://blue.cloud/assets/images/partners/azure.svg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="client">
                    <a href="https://blue.cloud/partners">
                      <img
                        src="https://blue.cloud/assets/images/partners/salesforce.svg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="client">
                    <a href="https://blue.cloud/partners">
                      <img
                        src="https://blue.cloud/assets/images/partners/365.svg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="client">
                    <a href="https://blue.cloud/partners">
                      <img
                        src="https://blue.cloud/assets/images/partners/DataRobot.svg"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer id="footer" className="footer">
          <div className="footer-newsletter">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-3">
                  <div className="footer__newsletter-text">
                    <h6>
                      Subscribe for industry alerts, our latest news, thoughts,
                      and insights
                    </h6>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-9 col-xl-7">
                  <form
                    className="footer__newsletter-form d-flex flex-wrap"
                    id="subscribeForm"
                    method="post"
                    action="https://blue.cloud/php/subscribe.php"
                  >
                    <div className="form-group d-flex flex-1 mb-20 mr-1">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                        name="name"
                        required
                      />
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email Address"
                        name="email"
                        required
                      />
                    </div>
                    <button
                      className="btn btn__primary btn__hover3 mb-20"
                      type="submit"
                    >
                      Subscribe Now!
                    </button>
                  </form>
                  <div className="contact-result"></div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-3 col-xl-2">
                  <div className="social__icons justify-content-end">
                    <a
                      href="https://www.linkedin.com/company/bluecloudservices"
                      className="linkedin"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a
                      href="https://www.facebook.com/BluecloudInc/"
                      className="fb"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      href="https://twitter.com/BlueCloudInc20"
                      className="twitter"
                      target="_blank"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-6 col-sm-6 col-md-3 col-lg-3 footer__widget footer__widget-nav">
                  <h6 className="footer__widget-title">
                    <a href="#">Services</a>
                  </h6>
                  <div className="footer__widget-content">
                    <nav>
                      <ul className="list-unstyled">
                        <li>
                          <a href="https://blue.cloud/AI-services">
                            AI Services
                          </a>
                        </li>
                        <li>
                          <a href="https://blue.cloud/data-engineering_analytics">
                            Data Engineering &amp; Analytics
                          </a>
                        </li>
                        <li>
                          <a href="https://blue.cloud/digital-transformation">
                            Digital Transformation
                          </a>
                        </li>
                        <li>
                          <a href="https://blue.cloud/digital-services">
                            Digital Services
                          </a>
                        </li>
                        <li>
                          <a href="https://blue.cloud/cloud-operations">
                            Cloud Operations
                          </a>
                        </li>
                        <li>
                          <a href="https://blue.cloud/strategic-management-consulting">
                            Strategic Management Consulting
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>

                <div className="col-6 col-sm-6 col-md-3 col-lg-3 footer__widget footer__widget-nav">
                  <h6 className="footer__widget-title">
                    <a href="https://blue.cloud/AI-services">AI Services</a>
                  </h6>
                  <div className="footer__widget-content">
                    <nav>
                      <ul className="list-unstyled">
                        <li>
                          <a href="https://blue.cloud/AI-finance">
                            AI for Financial Services
                          </a>
                        </li>
                        <li>
                          <a href="https://blue.cloud/AI-retail">
                            AI in Retail
                          </a>
                        </li>
                        <li>
                          <a href="https://blue.cloud/AI-energy">
                            AI for Energy
                          </a>
                        </li>
                        <li>
                          <a href="https://blue.cloud/AI-manufacturing">
                            AI for Manufacturing
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>

                <div className="col-6 col-sm-6 col-md-3 col-lg-3 footer__widget footer__widget-nav">
                  <h6 className="footer__widget-title">
                    <a href="https://blue.cloud/data-engineering_analytics">
                      Data Engineering & Analytics
                    </a>
                  </h6>
                  <div className="footer__widget-content">
                    <nav>
                      <ul className="list-unstyled">
                        <li>
                          <a href="https://blue.cloud/data-engineering_analytics-details#data-warehousing">
                            Data Warehouse & Data Lake
                          </a>
                        </li>
                        <li>
                          <a href="https://blue.cloud/data-engineering_analytics-details#data-analytics">
                            Data Analytics
                          </a>
                        </li>
                        <li>
                          <a href="https://blue.cloud/data-engineering_analytics-details#data-science">
                            Data Science (AI & ML)
                          </a>
                        </li>
                        <li>
                          <a href="https://blue.cloud/data-engineering_analytics-details#data-quality">
                            Data Quality and Governance
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>

                <div className="col-6 col-sm-6 col-md-3 col-lg-3 footer__widget footer__widget-nav">
                  <h6 className="footer__widget-title">
                    <a href="https://blue.cloud/digital-transformation">
                      Digital Transformation
                    </a>
                  </h6>
                  <div className="footer__widget-content">
                    <nav>
                      <ul className="list-unstyled">
                        <li>
                          <a href="https://blue.cloud/digital-transformation-details#digital-transformation">
                            Digital Transformation
                          </a>
                        </li>
                        <li>
                          <a href="https://blue.cloud/digital-transformation-details#cloud-transformation">
                            Cloud Transformation
                          </a>
                        </li>
                        <li>
                          <a href="https://blue.cloud/digital-transformation-details#data-transformation">
                            Data and Insights Transformation
                          </a>
                        </li>
                        <li>
                          <a href="https://blue.cloud/digital-transformation-details#digital-operations">
                            Digital Operations
                          </a>
                        </li>
                        <li>
                          <a href="https://blue.cloud/digital-transformation-details#architecture-roadmap">
                            Architecture &amp; Roadmap
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>

                <div className="col-6 col-sm-6 col-md-3 col-lg-3 footer__widget footer__widget-nav">
                  <h6 className="footer__widget-title">
                    <a href="https://blue.cloud/digital-services">
                      Digital Services
                    </a>
                  </h6>
                  <div className="footer__widget-content">
                    <nav>
                      <ul className="list-unstyled">
                        <li>
                          <a href="https://blue.cloud/digital-services-details#application-engineering">
                            Application Engineering Services
                          </a>
                        </li>
                        <li>
                          <a href="https://blue.cloud/digital-services-details#application-management">
                            Application Management Services
                          </a>
                        </li>
                        <li>
                          <a href="https://blue.cloud/digital-services-details#enterprise-application">
                            Enterprise Applications (ERP/CRM)
                          </a>
                        </li>
                        <li>
                          <a href="https://blue.cloud/digital-services-details#digital-assurance">
                            Digital Assurance & Testing
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>

                <div className="col-6 col-sm-6 col-md-3 col-lg-3 footer__widget footer__widget-nav">
                  <h6 className="footer__widget-title">
                    <a href="https://blue.cloud/cloud-operations">
                      Cloud Operations
                    </a>
                  </h6>
                  <div className="footer__widget-content">
                    <nav>
                      <ul className="list-unstyled">
                        <li>
                          <a href="https://blue.cloud/cloud-operations-details#cloud-service-design">
                            Cloud Services Design
                          </a>
                        </li>
                        <li>
                          <a href="https://blue.cloud/cloud-operations-details#cloud-ops">
                            Cloud Ops and Support
                          </a>
                        </li>
                        <li>
                          <a href="https://blue.cloud/cloud-operations-details#cloud-security">
                            Cloud Security & Compliance
                          </a>
                        </li>
                        <li>
                          <a href="https://blue.cloud/cloud-operations-details#cloud-optimization">
                            Cost Optimization & Management
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>

                <div className="col-6 col-sm-6 col-md-3 col-lg-3 footer__widget footer__widget-nav">
                  <h6 className="footer__widget-title">
                    <a href="https://blue.cloud/strategic-management-consulting">
                      Strategic Management Consulting
                    </a>
                  </h6>
                  <div className="footer__widget-content">
                    <nav>
                      <ul className="list-unstyled">
                        <li>
                          <a href="https://blue.cloud/strategic-management-consulting-details#IT-strategy">
                            IT Strategy
                          </a>
                        </li>
                        <li>
                          <a href="https://blue.cloud/strategic-management-consulting-details#leadership-consulting">
                            Leadership Consulting
                          </a>
                        </li>
                        <li>
                          <a href="https://blue.cloud/strategic-management-consulting-details#enterprise-program">
                            Enterprise Program & Project – Rationalization &
                            Development
                          </a>
                        </li>
                        <li>
                          <a href="https://blue.cloud/strategic-management-consulting-details#virtual-PMO">
                            Virtual PMO
                          </a>
                        </li>
                        <li>
                          <a href="https://blue.cloud/strategic-management-consulting-details#digital-strategy-transformation">
                            Digital Strategy Transformation
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>

                <div className="col-6 col-sm-6 col-md-3 col-lg-3 footer__widget footer__widget-nav">
                  <h6 className="footer__widget-title">
                    <a href="#">About Us</a>
                  </h6>
                  <div className="footer__widget-content">
                    <nav>
                      <ul className="list-unstyled">
                        <li>
                          <a href="https://blue.cloud/company-overview">
                            Company Overview
                          </a>
                        </li>
                        <li>
                          <a href="https://blue.cloud/leadership">Leadership</a>
                        </li>
                        <li>
                          <a href="https://blue.cloud/clients">Clients</a>
                        </li>
                        <li>
                          <a href="https://blue.cloud/partners">Partners</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="footer__copyright">
                    <span>
                      &copy; Copyright 2022 Blue.cloud Inc | All Rights Reserved{" "}
                    </span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <nav>
                    <ul className="list-unstyled footer__copyright-links d-flex flex-wrap justify-content-end">
                      <li>
                        <a
                          target="_blank"
                          href="https://www2.jobdiva.com/portal/?a=9ojdnwmtjxde32cg1gov4ju06dici30416djr1trt929gj9kc3exrk24kkukdpqb&amp;compid=0#/"
                          className="nav__item-link"
                        >
                          Careers
                        </a>
                      </li>
                      <li>
                        <a href="https://blue.cloud/newsroom">Newsroom</a>
                      </li>
                      <li>
                        <a href="https://blue.cloud/contact-us">Contact Us</a>
                      </li>
                      <li>
                        <a href="https://blue.cloud/privacy-policy">
                          Privacy Policy
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <button id="scrollTopBtn">
          <i className="fas fa-long-arrow-alt-up"></i>
        </button>{" "}
      </div>
    </>
  );
};

export default BlueCloudHomePage;
