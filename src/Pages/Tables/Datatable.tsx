import React from 'react'
import { NavLink } from 'react-router-dom'
import Swal from 'sweetalert2'

const Datatable = () => {

    const confirmDelte = () => {
        console.log("hello")
        Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                }
              })
            
    }

  return (
    <div>
       <body data-sidebar="dark">
    <div id="layout-wrapper"/>

        
        <header id="page-topbar">
            <div className="navbar-header">
                <div className="d-flex">
                   
                    <div className="navbar-brand-box">
                        <a href="index.html" className="logo logo-dark">
                            <span className="logo-sm">
                                <img src="assets/images/logo.svg" alt="" height="22"/>
                            </span>
                            <span className="logo-lg">
                                <img src="assets/images/logo-dark.png" alt="" height="17"/>
                            </span>
                        </a>

                        <a href="index.html" className="logo logo-light">
                            <span className="logo-sm">
                                <img src="assets/images/logo-light.svg" alt="" height="22"/>
                            </span>
                            <span className="logo-lg">
                                <img src="assets/images/logo-light.png" alt="" height="19"/>
                            </span>
                        </a>
                    </div>

                    <button type="button" className="btn btn-sm px-3 font-size-16 header-item waves-effect" id="vertical-menu-btn">
                        <i className="fa fa-fw fa-bars"></i>
                    </button>

                
                    <form className="app-search d-none d-lg-block">
                        <div className="position-relative">
                            <input type="text" className="form-control" placeholder="Search..."></input>
                        </div>
                    </form>

                    <div className="dropdown dropdown-mega d-none d-lg-block ms-2">
                        <button type="button" className="btn header-item waves-effect" data-bs-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                            <span key="t-megamenu">Mega Menu</span>
                            <i className="mdi mdi-chevron-down"></i> 
                        </button>
                        <div className="dropdown-menu dropdown-megamenu">
                            <div className="row">
                                <div className="col-sm-8">

                                    <div className="row">
                                        <div className="col-md-4">
                                            <h5 className="font-size-14" key="t-ui-components">UI Components</h5>
                                            <ul className="list-unstyled megamenu-list">
                                                <li>
                                                    <a href="javascript:void(0);" key="t-lightbox">Lightbox</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" key="t-range-slider">Range Slider</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" key="t-sweet-alert">Sweet Alert</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" key="t-rating">Rating</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" key="t-forms">Forms</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" key="t-tables">Tables</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" key="t-charts">Charts</a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="col-md-4">
                                            <h5 className="font-size-14" key="t-applications">Applications</h5>
                                            <ul className="list-unstyled megamenu-list">
                                                <li>
                                                    <a href="javascript:void(0);" key="t-ecommerce">Ecommerce</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" key="t-calendar">Calendar</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" key="t-email">Email</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" key="t-projects">Projects</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" key="t-tasks">Tasks</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" key="t-contacts">Contacts</a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="col-md-4">
                                            <h5 className="font-size-14" key="t-extra-pages">Extra Pages</h5>
                                            <ul className="list-unstyled megamenu-list">
                                                <li>
                                                    <a href="javascript:void(0);" key="t-light-sidebar">Light Sidebar</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" key="t-compact-sidebar">Compact Sidebar</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" key="t-horizontal">Horizontal layout</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" key="t-maintenance">Maintenance</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" key="t-coming-soon">Coming Soon</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" key="t-timeline">Timeline</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" key="t-faqs">FAQs</a>
                                                </li>
                        
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <h5 className="font-size-14" key="t-ui-components">UI Components</h5>
                                            <ul className="list-unstyled megamenu-list">
                                                <li>
                                                    <a href="javascript:void(0);" key="t-lightbox">Lightbox</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" key="t-range-slider">Range Slider</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" key="t-sweet-alert">Sweet Alert</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" key="t-rating">Rating</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" key="t-forms">Forms</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" key="t-tables">Tables</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" key="t-charts">Charts</a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="col-sm-5">
                                            <div>
                                                <img src="assets/images/megamenu-img.png" alt="" className="img-fluid mx-auto d-block"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="d-flex">

                    <div className="dropdown d-inline-block d-lg-none ms-2">
                        <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-search-dropdown"
                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="mdi mdi-magnify"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                            aria-labelledby="page-header-search-dropdown">
    
                            <form className="p-3">
                                <div className="form-group m-0">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username"/>
                                        <div className="input-group-append">
                                            <button className="btn btn-primary" type="submit"><i className="mdi mdi-magnify"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="dropdown d-inline-block">
                        <button type="button" className="btn header-item waves-effect"
                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img id="header-lang-img" src="assets/images/flags/us.jpg" alt="Header Language" height="16"/>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end">

            
                            <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="en">
                                <img src="assets/images/flags/us.jpg" alt="user-image" className="me-1" height="12"/> <span className="align-middle">English</span>
                            </a>
                          
                            <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="sp">
                                <img src="assets/images/flags/spain.jpg" alt="user-image" className="me-1" height="12"/> <span className="align-middle">Spanish</span>
                            </a>

                           
                            <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="gr">
                                <img src="assets/images/flags/germany.jpg" alt="user-image" className="me-1" height="12"/> <span className="align-middle">German</span>
                            </a>

                           
                            <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="it">
                                <img src="assets/images/flags/italy.jpg" alt="user-image" className="me-1" height="12"/> <span className="align-middle">Italian</span>
                            </a>

                          
                            <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="ru">
                                <img src="assets/images/flags/russia.jpg" alt="user-image" className="me-1" height="12"/> <span className="align-middle">Russian</span>
                            </a>
                        </div>
                    </div>

                    <div className="dropdown d-none d-lg-inline-block ms-1">
                        <button type="button" className="btn header-item noti-icon waves-effect"
                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="bx bx-customize"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                            <div className="px-lg-2">
                                <div className="row g-0">
                                    <div className="col">
                                        <a className="dropdown-icon-item" href="#">
                                            <img src="assets/images/brands/github.png" alt="Github"/>
                                            <span>GitHub</span>
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a className="dropdown-icon-item" href="#">
                                            <img src="assets/images/brands/bitbucket.png" alt="bitbucket"/>
                                            <span>Bitbucket</span>
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a className="dropdown-icon-item" href="#">
                                            <img src="assets/images/brands/dribbble.png" alt="dribbble"/>
                                            <span>Dribbble</span>
                                        </a>
                                    </div>
                                </div>

                                <div className="row g-0">
                                    <div className="col">
                                        <a className="dropdown-icon-item" href="#">
                                            <img src="assets/images/brands/dropbox.png" alt="dropbox"/>
                                            <span>Dropbox</span>
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a className="dropdown-icon-item" href="#">
                                            <img src="assets/images/brands/mail_chimp.png" alt="mail_chimp"/>
                                            <span>Mail Chimp</span>
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a className="dropdown-icon-item" href="#">
                                            <img src="assets/images/brands/slack.png" alt="slack"/>
                                            <span>Slack</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="dropdown d-none d-lg-inline-block ms-1">
                        <button type="button" className="btn header-item noti-icon waves-effect" data-bs-toggle="fullscreen">
                            <i className="bx bx-fullscreen"></i>
                        </button>
                    </div>

                    <div className="dropdown d-inline-block">
                        <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-notifications-dropdown"
                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="bx bx-bell bx-tada"></i>
                            <span className="badge bg-danger rounded-pill">3</span>
                        </button>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                            aria-labelledby="page-header-notifications-dropdown">
                            <div className="p-3">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h6 className="m-0" key="t-notifications"> Notifications </h6>
                                    </div>
                                    <div className="col-auto">
                                        <a href="#!" className="small" key="t-view-all"> View All</a>
                                    </div>
                                </div>
                            </div>
                          < >
                                <a href="javascript: void(0);" className="text-reset notification-item">
                                    <div className="d-flex">
                                        <div className="avatar-xs me-3">
                                            <span className="avatar-title bg-primary rounded-circle font-size-16">
                                                <i className="bx bx-cart"></i>
                                            </span>
                                        </div>
                                        <div className="flex-grow-1">
                                            <h6 className="mb-1" key="t-your-order">Your order is placed</h6>
                                            <div className="font-size-12 text-muted">
                                                <p className="mb-1" key="t-grammer">If several languages coalesce the grammar</p>
                                                <p className="mb-0"><i className="mdi mdi-clock-outline"></i> <span key="t-min-ago">3 min ago</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a href="javascript: void(0);" className="text-reset notification-item">
                                    <div className="d-flex">
                                        <img src="assets/images/users/avatar-3.jpg"
                                            className="me-3 rounded-circle avatar-xs" alt="user-pic"/>
                                        <div className="flex-grow-1">
                                            <h6 className="mb-1">James Lemire</h6>
                                            <div className="font-size-12 text-muted">
                                                <p className="mb-1" key="t-simplified">It will seem like simplified English.</p>
                                                <p className="mb-0"><i className="mdi mdi-clock-outline"></i> <span key="t-hours-ago">1 hours ago</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a href="javascript: void(0);" className="text-reset notification-item">
                                    <div className="d-flex">
                                        <div className="avatar-xs me-3">
                                            <span className="avatar-title bg-success rounded-circle font-size-16">
                                                <i className="bx bx-badge-check"></i>
                                            </span>
                                        </div>
                                        <div className="flex-grow-1">
                                            <h6 className="mb-1" key="t-shipped">Your item is shipped</h6>
                                            <div className="font-size-12 text-muted">
                                                <p className="mb-1" key="t-grammer">If several languages coalesce the grammar</p>
                                                <p className="mb-0"><i className="mdi mdi-clock-outline"></i> <span key="t-min-ago">3 min ago</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <a href="javascript: void(0);" className="text-reset notification-item">
                                    <div className="d-flex">
                                        <img src="assets/images/users/avatar-4.jpg"
                                            className="me-3 rounded-circle avatar-xs" alt="user-pic"/>
                                        <div className="flex-grow-1">
                                            <h6 className="mb-1">Salena Layfield</h6>
                                            <div className="font-size-12 text-muted">
                                                <p className="mb-1" key="t-occidental">As a skeptical Cambridge friend of mine occidental.</p>
                                                <p className="mb-0"><i className="mdi mdi-clock-outline"></i> <span key="t-hours-ago">1 hours ago</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </>
                            <div className="p-2 border-top d-grid">
                                <a className="btn btn-sm btn-link font-size-14 text-center" href="javascript:void(0)">
                                    <i className="mdi mdi-arrow-right-circle me-1"></i> <span key="t-view-more">View More..</span> 
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="dropdown d-inline-block">
                        <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown"
                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img className="rounded-circle header-profile-user" src="assets/images/users/avatar-1.jpg"
                                alt="Header Avatar"/>
                            <span className="d-none d-xl-inline-block ms-1" key="t-henry">Henry</span>
                            <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end">
                            
                            <a className="dropdown-item" href="#"><i className="bx bx-user font-size-16 align-middle me-1"></i> <span key="t-profile">Profile</span></a>
                            <a className="dropdown-item" href="#"><i className="bx bx-wallet font-size-16 align-middle me-1"></i> <span key="t-my-wallet">My Wallet</span></a>
                            <a className="dropdown-item d-block" href="#"><span className="badge bg-success float-end">11</span><i className="bx bx-wrench font-size-16 align-middle me-1"></i> <span key="t-settings">Settings</span></a>
                            <a className="dropdown-item" href="#"><i className="bx bx-lock-open font-size-16 align-middle me-1"></i> <span key="t-lock-screen">Lock screen</span></a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item text-danger" href="#"><i className="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i> <span key="t-logout">Logout</span></a>
                        </div>
                    </div>

                    <div className="dropdown d-inline-block">
                        <button type="button" className="btn header-item noti-icon right-bar-toggle waves-effect">
                            <i className="bx bx-cog bx-spin"></i>
                        </button>
                    </div>

                </div>
            </div>
        </header>

        <div className="vertical-menu">

            <div data-simplebar className="h-100">

            
                <div id="sidebar-menu">
                
                    <ul className="metismenu list-unstyled" id="side-menu">
                        <li className="menu-title" key="t-menu">Menu</li>

                        <li>
                            <a href="javascript: void(0);" className="waves-effect">
                                <i className="bx bx-home-circle"></i><span className="badge rounded-pill bg-info float-end">04</span>
                                <span key="t-dashboards">Dashboards</span>
                            </a>
                            <ul className="sub-menu" aria-expanded="false">
                                <li><a href="index.html" key="t-default">Default</a></li>
                                <li><a href="dashboard-saas.html" key="t-saas">Saas</a></li>
                                <li><a href="dashboard-crypto.html" key="t-crypto">Crypto</a></li>
                                <li><a href="dashboard-blog.html" key="t-blog">Blog</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" className="has-arrow waves-effect">
                                <i className="bx bx-layout"></i>
                                <span key="t-layouts">Layouts</span>
                            </a>
                            <ul className="sub-menu" aria-expanded="true">
                                <li>
                                    <a href="javascript: void(0);" className="has-arrow" key="t-vertical">Vertical</a>
                                    <ul className="sub-menu" aria-expanded="true">
                                        <li><a href="layouts-light-sidebar.html" key="t-light-sidebar">Light Sidebar</a></li>
                                        <li><a href="layouts-compact-sidebar.html" key="t-compact-sidebar">Compact Sidebar</a></li>
                                        <li><a href="layouts-icon-sidebar.html" key="t-icon-sidebar">Icon Sidebar</a></li>
                                        <li><a href="layouts-boxed.html" key="t-boxed-width">Boxed Width</a></li>
                                        <li><a href="layouts-preloader.html" key="t-preloader">Preloader</a></li>
                                        <li><a href="layouts-colored-sidebar.html" key="t-colored-sidebar">Colored Sidebar</a></li>
                                        <li><a href="layouts-scrollable.html" key="t-scrollable">Scrollable</a></li>
                                    </ul>
                                </li>

                                <li>
                                    <a href="javascript: void(0);" className="has-arrow" key="t-horizontal">Horizontal</a>
                                    <ul className="sub-menu" aria-expanded="true">
                                        <li><a href="layouts-horizontal.html" key="t-horizontal">Horizontal</a></li>
                                        <li><a href="layouts-hori-topbar-light.html" key="t-topbar-light">Topbar light</a></li>
                                        <li><a href="layouts-hori-boxed-width.html" key="t-boxed-width">Boxed width</a></li>
                                        <li><a href="layouts-hori-preloader.html" key="t-preloader">Preloader</a></li>
                                        <li><a href="layouts-hori-colored-header.html" key="t-colored-topbar">Colored Header</a></li>
                                        <li><a href="layouts-hori-scrollable.html" key="t-scrollable">Scrollable</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className="menu-title" key="t-apps">Apps</li>

            

                        <li>
                            <a href="javascript: void(0);" className="waves-effect">
                                <i className="bx bx-calendar"></i><span className="badge rounded-pill bg-success float-end">New</span>
                                <span key="t-dashboards">Calendars</span>
                            </a>
                            <ul className="sub-menu" aria-expanded="false">
                                <li><a href="calendar.html" key="t-tui-calendar">TUI Calendar</a></li>
                                <li><a href="calendar-full.html" key="t-full-calendar">Full Calendar</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="chat.html" className="waves-effect">
                                <i className="bx bx-chat"></i>
                                <span key="t-chat">Chat</span>
                            </a>
                        </li>

                        <li>
                            <a href="apps-filemanager.html" className="waves-effect">
                                <i className="bx bx-file"></i>
                                <span className="badge rounded-pill bg-success float-end" key="t-new">New</span>
                                <span key="t-file-manager">File Manager</span>
                            </a>
                        </li>

                        <li>
                            <a href="javascript: void(0);" className="has-arrow waves-effect">
                                <i className="bx bx-store"></i>
                                <span key="t-ecommerce">Ecommerce</span>
                            </a>
                            <ul className="sub-menu" aria-expanded="false">
                                <li><a href="ecommerce-products.html" key="t-products">Products</a></li>
                                <li><a href="ecommerce-product-detail.html" key="t-product-detail">Product Detail</a></li>
                                <li><a href="ecommerce-orders.html" key="t-orders">Orders</a></li>
                                <li><a href="ecommerce-customers.html" key="t-customers">Customers</a></li>
                                <li><a href="ecommerce-cart.html" key="t-cart">Cart</a></li>
                                <li><a href="ecommerce-checkout.html" key="t-checkout">Checkout</a></li>
                                <li><a href="ecommerce-shops.html" key="t-shops">Shops</a></li>
                                <li><a href="ecommerce-add-product.html" key="t-add-product">Add Product</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" className="has-arrow waves-effect">
                                <i className="bx bx-bitcoin"></i>
                                <span key="t-crypto">Crypto</span>
                            </a>
                            <ul className="sub-menu" aria-expanded="false">
                                <li><a href="crypto-wallet.html" key="t-wallet">Wallet</a></li>
                                <li><a href="crypto-buy-sell.html" key="t-buy">Buy/Sell</a></li>
                                <li><a href="crypto-exchange.html" key="t-exchange">Exchange</a></li>
                                <li><a href="crypto-lending.html" key="t-lending">Lending</a></li>
                                <li><a href="crypto-orders.html" key="t-orders">Orders</a></li>
                                <li><a href="crypto-kyc-application.html" key="t-kyc">KYC Application</a></li>
                                <li><a href="crypto-ico-landing.html" key="t-ico">ICO Landing</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" className="has-arrow waves-effect">
                                <i className="bx bx-envelope"></i>
                                <span key="t-email">Email</span>
                            </a>
                            <ul className="sub-menu" aria-expanded="false">
                                <li><a href="email-inbox.html" key="t-inbox">Inbox</a></li>
                                <li><a href="email-read.html" key="t-read-email">Read Email</a></li>
                                <li>
                                    <a href="javascript: void(0);">
                                        <span className="badge rounded-pill badge-soft-success float-end" key="t-new">New</span>
                                        <span key="t-email-templates">Templates</span>
                                    </a>
                                    <ul className="sub-menu" aria-expanded="true">
                                        <li><a href="email-template-basic.html" key="t-basic-action">Basic Action</a></li>
                                        <li><a href="email-template-alert.html" key="t-alert-email">Alert Email</a></li>
                                        <li><a href="email-template-billing.html" key="t-bill-email">Billing Email</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" className="has-arrow waves-effect">
                                <i className="bx bx-receipt"></i>
                                <span key="t-invoices">Invoices</span>
                            </a>
                            <ul className="sub-menu" aria-expanded="false">
                                <li><a href="invoices-list.html" key="t-invoice-list">Invoice List</a></li>
                                <li><a href="invoices-detail.html" key="t-invoice-detail">Invoice Detail</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" className="has-arrow waves-effect">
                                <i className="bx bx-briefcase-alt-2"></i>
                                <span key="t-projects">Projects</span>
                            </a>
                            <ul className="sub-menu" aria-expanded="false">
                                <li><a href="projects-grid.html" key="t-p-grid">Projects Grid</a></li>
                                <li><a href="projects-list.html" key="t-p-list">Projects List</a></li>
                                <li><a href="projects-overview.html" key="t-p-overview">Project Overview</a></li>
                                <li><a href="projects-create.html" key="t-create-new">Create New</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" className="has-arrow waves-effect">
                                <i className="bx bx-task"></i>
                                <span key="t-tasks">Tasks</span>
                            </a>
                            <ul className="sub-menu" aria-expanded="false">
                                <li><a href="tasks-list.html" key="t-task-list">Task List</a></li>
                                <li><a href="tasks-kanban.html" key="t-kanban-board">Kanban Board</a></li>
                                <li><a href="tasks-create.html" key="t-create-task">Create Task</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" className="has-arrow waves-effect">
                                <i className="bx bxs-user-detail"></i>
                                <span key="t-contacts">Contacts</span>
                            </a>
                            <ul className="sub-menu" aria-expanded="false">
                                <li><a href="contacts-grid.html" key="t-user-grid">Users Grid</a></li>
                                <li><a href="contacts-list.html" key="t-user-list">Users List</a></li>
                                <li><a href="contacts-profile.html" key="t-profile">Profile</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" className="waves-effect">
                                <span className="badge rounded-pill bg-success float-end" key="t-new">New</span>
                                <i className="bx bx-detail"></i>
                                <span key="t-blog">Blog</span>
                            </a>
                            <ul className="sub-menu" aria-expanded="false">
                                <li><a href="blog-list.html" key="t-blog-list">Blog List</a></li>
                                <li><a href="blog-grid.html" key="t-blog-grid">Blog Grid</a></li>
                                <li><a href="blog-details.html" key="t-blog-details">Blog Details</a></li>
                            </ul>
                        </li>

                        <li className="menu-title" key="t-pages">Pages</li>

                        <li>
                            <a href="javascript: void(0);" className="waves-effect">
                                <span className="badge rounded-pill bg-success float-end" key="t-new">New</span>
                                <i className="bx bx-user-circle"></i>
                                <span key="t-authentication">Authentication</span>
                            </a>
                            <ul className="sub-menu" aria-expanded="false">
                                <li><a href="auth-login.html" key="t-login">Login</a></li>
                                <li><a href="auth-login-2.html" key="t-login-2">Login 2</a></li>
                                <li><a href="auth-register.html" key="t-register">Register</a></li>
                                <li><a href="auth-register-2.html" key="t-register-2">Register 2</a></li>
                                <li><a href="auth-recoverpw.html" key="t-recover-password">Recover Password</a></li>
                                <li><a href="auth-recoverpw-2.html" key="t-recover-password-2">Recover Password 2</a></li>
                                <li><a href="auth-lock-screen.html" key="t-lock-screen">Lock Screen</a></li>
                                <li><a href="auth-lock-screen-2.html" key="t-lock-screen-2">Lock Screen 2</a></li>
                                <li><a href="auth-confirm-mail.html" key="t-confirm-mail">Confirm Email</a></li>
                                <li><a href="auth-confirm-mail-2.html" key="t-confirm-mail-2">Confirm Email 2</a></li>
                                <li><a href="auth-email-verification.html" key="t-email-verification">Email verification</a></li>
                                <li><a href="auth-email-verification-2.html" key="t-email-verification-2">Email Verification 2</a></li>
                                <li><a href="auth-two-step-verification.html" key="t-two-step-verification">Two Step Verification</a></li>
                                <li><a href="auth-two-step-verification-2.html" key="t-two-step-verification-2">Two Step Verification 2</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" className="has-arrow waves-effect">
                                <i className="bx bx-file"></i>
                                <span key="t-utility">Utility</span>
                            </a>
                            <ul className="sub-menu" aria-expanded="false">
                                <li><a href="pages-starter.html" key="t-starter-page">Starter Page</a></li>
                                <li><a href="pages-maintenance.html" key="t-maintenance">Maintenance</a></li>
                                <li><a href="pages-comingsoon.html" key="t-coming-soon">Coming Soon</a></li>
                                <li><a href="pages-timeline.html" key="t-timeline">Timeline</a></li>
                                <li><a href="pages-faqs.html" key="t-faqs">FAQs</a></li>
                                <li><a href="pages-pricing.html" key="t-pricing">Pricing</a></li>
                                <li><a href="pages-404.html" key="t-error-404">Error 404</a></li>
                                <li><a href="pages-500.html" key="t-error-500">Error 500</a></li>
                            </ul>
                        </li>

                        <li className="menu-title" key="t-components">Components</li>

                        <li>
                            <a href="javascript: void(0);" className="has-arrow waves-effect">
                                <i className="bx bx-tone"></i>
                                <span key="t-ui-elements">UI Elements</span>
                            </a>
                            <ul className="sub-menu" aria-expanded="false">
                                <li><a href="ui-alerts.html" key="t-alerts">Alerts</a></li>
                                <li><a href="ui-buttons.html" key="t-buttons">Buttons</a></li>
                                <li><a href="ui-cards.html" key="t-cards">Cards</a></li>
                                <li><a href="ui-carousel.html" key="t-carousel">Carousel</a></li>
                                <li><a href="ui-dropdowns.html" key="t-dropdowns">Dropdowns</a></li>
                                <li><a href="ui-grid.html" key="t-grid">Grid</a></li>
                                <li><a href="ui-images.html" key="t-images">Images</a></li>
                                <li><a href="ui-lightbox.html" key="t-lightbox">Lightbox</a></li>
                                <li><a href="ui-modals.html" key="t-modals">Modals</a></li>
                                <li><a href="ui-offcanvas.html" key="t-offcanvas">Offcanvas</a></li>
                                <li><a href="ui-rangeslider.html" key="t-range-slider">Range Slider</a></li>
                                <li><a href="ui-session-timeout.html" key="t-session-timeout">Session Timeout</a></li>
                                <li><a href="ui-progressbars.html" key="t-progress-bars">Progress Bars</a></li>
                                <li><a href="ui-placeholders.html" key="t-placeholders">Placeholders</a></li>
                                <li><a href="ui-sweet-alert.html" key="t-sweet-alert">Sweet-Alert</a></li>
                                <li><a href="ui-tabs-accordions.html" key="t-tabs-accordions">Tabs & Accordions</a></li>
                                <li><a href="ui-typography.html" key="t-typography">Typography</a></li>
                                <li><a href="ui-toasts.html" key="t-toasts">Toasts</a></li>
                                <li><a href="ui-video.html" key="t-video">Video</a></li>
                                <li><a href="ui-general.html" key="t-general">General</a></li>
                                <li><a href="ui-colors.html" key="t-colors">Colors</a></li>
                                <li><a href="ui-rating.html" key="t-rating">Rating</a></li>
                                <li><a href="ui-notifications.html" key="t-notifications">Notifications</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" className="waves-effect">
                                <i className="bx bxs-eraser"></i>
                                <span className="badge rounded-pill bg-danger float-end">10</span>
                                <span key="t-forms">Forms</span>
                            </a>
                            <ul className="sub-menu" aria-expanded="false">
                                <li><a href="form-elements.html" key="t-form-elements">Form Elements</a></li>
                                <li><a href="form-layouts.html" key="t-form-layouts">Form Layouts</a></li>
                                <li><a href="form-validation.html" key="t-form-validation">Form Validation</a></li>
                                <li><a href="form-advanced.html" key="t-form-advanced">Form Advanced</a></li>
                                <li><a href="form-editors.html" key="t-form-editors">Form Editors</a></li>
                                <li><a href="form-uploads.html" key="t-form-upload">Form File Upload</a></li>
                                <li><a href="form-xeditable.html" key="t-form-xeditable">Form Xeditable</a></li>
                                <li><a href="form-repeater.html" key="t-form-repeater">Form Repeater</a></li>
                                <li><a href="form-wizard.html" key="t-form-wizard">Form Wizard</a></li>
                                <li><a href="form-mask.html" key="t-form-mask">Form Mask</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" className="has-arrow waves-effect">
                                <i className="bx bx-list-ul"></i>
                                <span key="t-tables">Tables</span>
                            </a>
                            <ul className="sub-menu" aria-expanded="false">
                                <li><a href="tables-basic.html" key="t-basic-tables">Basic Tables</a></li>
                                <li><a href="tables-datatable.html" key="t-data-tables">Data Tables</a></li>
                                <li><a href="tables-responsive.html" key="t-responsive-table">Responsive Table</a></li>
                                <li><a href="tables-editable.html" key="t-editable-table">Editable Table</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" className="has-arrow waves-effect">
                                <i className="bx bxs-bar-chart-alt-2"></i>
                                <span key="t-charts">Charts</span>
                            </a>
                            <ul className="sub-menu" aria-expanded="false">
                                <li><a href="charts-apex.html" key="t-apex-charts">Apex Charts</a></li>
                                <li><a href="charts-echart.html" key="t-e-charts">E Charts</a></li>
                                <li><a href="charts-chartjs.html" key="t-chartjs-charts">Chartjs Charts</a></li>
                                <li><a href="charts-flot.html" key="t-flot-charts">Flot Charts</a></li>
                                <li><a href="charts-tui.html" key="t-ui-charts">Toast UI Charts</a></li>
                                <li><a href="charts-knob.html" key="t-knob-charts">Jquery Knob Charts</a></li>
                                <li><a href="charts-sparkline.html" key="t-sparkline-charts">Sparkline Charts</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" className="has-arrow waves-effect">
                                <i className="bx bx-aperture"></i>
                                <span key="t-icons">Icons</span>
                            </a>
                            <ul className="sub-menu" aria-expanded="false">
                                <li><a href="icons-boxicons.html" key="t-boxicons">Boxicons</a></li>
                                <li><a href="icons-materialdesign.html" key="t-material-design">Material Design</a></li>
                                <li><a href="icons-dripicons.html" key="t-dripicons">Dripicons</a></li>
                                <li><a href="icons-fontawesome.html" key="t-font-awesome">Font Awesome</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" className="has-arrow waves-effect">
                                <i className="bx bx-map"></i>
                                <span key="t-maps">Maps</span>
                            </a>
                            <ul className="sub-menu" aria-expanded="false">
                                <li><a href="maps-google.html" key="t-g-maps">Google Maps</a></li>
                                <li><a href="maps-vector.html" key="t-v-maps">Vector Maps</a></li>
                                <li><a href="maps-leaflet.html" key="t-l-maps">Leaflet Maps</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" className="has-arrow waves-effect">
                                <i className="bx bx-share-alt"></i>
                                <span key="t-multi-level">Multi Level</span>
                            </a>
                            <ul className="sub-menu" aria-expanded="true">
                                <li><a href="javascript: void(0);" key="t-level-1-1">Level 1.1</a></li>
                                <li>
                                    <a href="javascript: void(0);" className="has-arrow" key="t-level-1-2">Level 1.2</a>
                                    <ul className="sub-menu" aria-expanded="true">
                                        <li><a href="javascript: void(0);" key="t-level-2-1">Level 2.1</a></li>
                                        <li><a href="javascript: void(0);" key="t-level-2-2">Level 2.2</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                    </ul>
                </div>
             
            </div>
        </div>
    
        


        
        <div className="main-content">

            <div className="page-content">
                <div className="container-fluid">

          
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                <h4 className="mb-sm-0 font-size-18">Data Tables</h4>

                                <div className="page-title-right">
                                    <ol className="breadcrumb m-0">
                                 <li>
                                    <NavLink className="btn btn-success" to="/form">Add</NavLink>
                                 </li>
                                        <li className="breadcrumb-item"><a href="javascript: void(0);">Tables</a></li>
                                        <li className="breadcrumb-item active">Data Tables</li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>
              
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
    
                                    <h4 className="card-title">Default Datatable</h4>
                                    <p className="card-title-desc">DataTables has most features enabled by
                                        default, so all you need to do to use it with your own tables is to call
                                        the construction function: <code>$().DataTable();</code>.
                                    </p>
    
                                    <table id="datatable" className="table table-bordered dt-responsive  nowrap w-100">
                                        <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
    
    
                                        <tbody>
                                        <tr>
                                            <td>Tiger Nixon</td>
                                            <td>System Architect</td>
                                            <td>Edinburgh</td>
                                            <td>61</td>
                                            <td>2011/04/25</td>
                                            <td>$320,800</td>
                                            <button className='btn btn-danger  btn-sm' onClick={() => confirmDelte()}><i className='fas fa-trash-alt' title='delete'></i></button>
                                        </tr>
                                       
                                        <tr>
                                            <td>Garrett Winters</td>
                                            <td>Accountant</td>
                                            <td>Tokyo</td>
                                            <td>63</td>
                                            <td>2011/07/25</td>
                                            <td>$170,750</td>
                                        </tr>
                                        <tr>
                                            <td>Ashton Cox</td>
                                            <td>Junior Technical Author</td>
                                            <td>San Francisco</td>
                                            <td>66</td>
                                            <td>2009/01/12</td>
                                            <td>$86,000</td>
                                        </tr>
                                        <tr>
                                            <td>Cedric Kelly</td>
                                            <td>Senior Javascript Developer</td>
                                            <td>Edinburgh</td>
                                            <td>22</td>
                                            <td>2012/03/29</td>
                                            <td>$433,060</td>
                                        </tr>
                                        <tr>
                                            <td>Airi Satou</td>
                                            <td>Accountant</td>
                                            <td>Tokyo</td>
                                            <td>33</td>
                                            <td>2008/11/28</td>
                                            <td>$162,700</td>
                                        </tr>
                                        <tr>
                                            <td>Brielle Williamson</td>
                                            <td>Integration Specialist</td>
                                            <td>New York</td>
                                            <td>61</td>
                                            <td>2012/12/02</td> 
                                        </tr>
                                        <tr>
                                            <td>Herrod Chandler</td>
                                            <td>Sales Assistant</td>
                                            <td>San Francisco</td>
                                            <td>59</td>
                                            <td>2012/08/06</td>
                                            <td>$137,500</td>
                                        </tr>
                                        <tr>
                                            <td>Rhona Davidson</td>
                                            <td>Integration Specialist</td>
                                            <td>Tokyo</td>
                                            <td>55</td>
                                            <td>2010/10/14</td>
                                            <td>$327,900</td>
                                        </tr>
                                        <tr>
                                            <td>Colleen Hurst</td>
                                            <td>Javascript Developer</td>
                                            <td>San Francisco</td>
                                            <td>39</td>
                                            <td>2009/09/15</td>
                                            <td>$205,500</td>
                                        </tr>
                                        <tr>
                                            <td>Sonya Frost</td>
                                            <td>Software Engineer</td>
                                            <td>Edinburgh</td>
                                            <td>23</td>
                                            <td>2008/12/13</td>
                                            <td>$103,600</td>
                                        </tr>
                                        <tr>
                                            <td>Jena Gaines</td>
                                            <td>Office Manager</td>
                                            <td>London</td>
                                            <td>30</td>
                                            <td>2008/12/19</td>
                                            <td>$90,560</td>
                                        </tr>
                                        <tr>
                                            <td>Quinn Flynn</td>
                                            <td>Support Lead</td>
                                            <td>Edinburgh</td>
                                            <td>22</td>
                                            <td>2013/03/03</td>
                                            <td>$342,000</td>
                                        </tr>
                                        <tr>
                                            <td>Charde Marshall</td>
                                            <td>Regional Director</td>
                                            <td>San Francisco</td>
                                            <td>36</td>
                                            <td>2008/10/16</td>
                                            <td>$470,600</td>
                                        </tr>
                                        <tr>
                                            <td>Haley Kennedy</td>
                                            <td>Senior Marketing Designer</td>
                                            <td>London</td>
                                            <td>43</td>
                                            <td>2012/12/18</td>
                                            <td>$313,500</td>
                                        </tr>
                                        <tr>
                                            <td>Tatyana Fitzpatrick</td>
                                            <td>Regional Director</td>
                                            <td>London</td>
                                            <td>19</td>
                                            <td>2010/03/17</td>
                                            <td>$385,750</td>
                                        </tr>
                                        <tr>
                                            <td>Michael Silva</td>
                                            <td>Marketing Designer</td>
                                            <td>London</td>
                                            <td>66</td>
                                            <td>2012/11/27</td>
                                            <td>$198,500</td>
                                        </tr>
                                        <tr>
                                            <td>Paul Byrd</td>
                                            <td>Chief Financial Officer (CFO)</td>
                                            <td>New York</td>
                                            <td>64</td>
                                            <td>2010/06/09</td>
                                            <td>$725,000</td>
                                        </tr>
                                        <tr>
                                            <td>Gloria Little</td>
                                            <td>Systems Administrator</td>
                                            <td>New York</td>
                                            <td>59</td>
                                            <td>2009/04/10</td>
                                            <td>$237,500</td>
                                        </tr>
                                        <tr>
                                            <td>Bradley Greer</td>
                                            <td>Software Engineer</td>
                                            <td>London</td>
                                            <td>41</td>
                                            <td>2012/10/13</td>
                                            <td>$132,000</td>
                                        </tr>
                                        <tr>
                                            <td>Dai Rios</td>
                                            <td>Personnel Lead</td>
                                            <td>Edinburgh</td>
                                            <td>35</td>
                                            <td>2012/09/26</td>
                                            <td>$217,500</td>
                                        </tr>
                                        <tr>
                                            <td>Jenette Caldwell</td>
                                            <td>Development Lead</td>
                                            <td>New York</td>
                                            <td>30</td>
                                            <td>2011/09/03</td>
                                            <td>$345,000</td>
                                        </tr>
                                        <tr>
                                            <td>Yuri Berry</td>
                                            <td>Chief Marketing Officer (CMO)</td>
                                            <td>New York</td>
                                            <td>40</td>
                                            <td>2009/06/25</td>
                                            <td>$675,000</td>
                                        </tr>
                                        <tr>
                                            <td>Caesar Vance</td>
                                            <td>Pre-Sales Support</td>
                                            <td>New York</td>
                                            <td>21</td>
                                            <td>2011/12/12</td>
                                            <td>$106,450</td>
                                        </tr>
                                        <tr>
                                            <td>Doris Wilder</td>
                                            <td>Sales Assistant</td>
                                            <td>Sidney</td>
                                            <td>23</td>
                                            <td>2010/09/20</td>
                                            <td>$85,600</td>
                                        </tr>
                                        <tr>
                                            <td>Angelica Ramos</td>
                                            <td>Chief Executive Officer (CEO)</td>
                                            <td>London</td>
                                            <td>47</td>
                                            <td>2009/10/09</td>
                                            <td>$1,200,000</td>
                                        </tr>
                                        <tr>
                                            <td>Gavin Joyce</td>
                                            <td>Developer</td>
                                            <td>Edinburgh</td>
                                            <td>42</td>
                                            <td>2010/12/22</td>
                                            <td>$92,575</td>
                                        </tr>
                                        <tr>
                                            <td>Jennifer Chang</td>
                                            <td>Regional Director</td>
                                            <td>Singapore</td>
                                            <td>28</td>
                                            <td>2010/11/14</td>
                                            <td>$357,650</td>
                                        </tr>
                                        <tr>
                                            <td>Brenden Wagner</td>
                                            <td>Software Engineer</td>
                                            <td>San Francisco</td>
                                            <td>28</td>
                                            <td>2011/06/07</td>
                                            <td>$206,850</td>
                                        </tr>
                                        <tr>
                                            <td>Fiona Green</td>
                                            <td>Chief Operating Officer (COO)</td>
                                            <td>San Francisco</td>
                                            <td>48</td>
                                            <td>2010/03/11</td>
                                            <td>$850,000</td>
                                        </tr>
                                        <tr>
                                            <td>Shou Itou</td>
                                            <td>Regional Marketing</td>
                                            <td>Tokyo</td>
                                            <td>20</td>
                                            <td>2011/08/14</td>
                                            <td>$163,000</td>
                                        </tr>
                                        <tr>
                                            <td>Michelle House</td>
                                            <td>Integration Specialist</td>
                                            <td>Sidney</td>
                                            <td>37</td>
                                            <td>2011/06/02</td>
                                            <td>$95,400</td>
                                        </tr>
                                        <tr>
                                            <td>Suki Burks</td>
                                            <td>Developer</td>
                                            <td>London</td>
                                            <td>53</td>
                                            <td>2009/10/22</td>
                                            <td>$114,500</td>
                                        </tr>
                                        <tr>
                                            <td>Prescott Bartlett</td>
                                            <td>Technical Author</td>
                                            <td>London</td>
                                            <td>27</td>
                                            <td>2011/05/07</td>
                                            <td>$145,000</td>
                                        </tr>
                                        <tr>
                                            <td>Gavin Cortez</td>
                                            <td>Team Leader</td>
                                            <td>San Francisco</td>
                                            <td>22</td>
                                            <td>2008/10/26</td>
                                            <td>$235,500</td>
                                        </tr>
                                        <tr>
                                            <td>Martena Mccray</td>
                                            <td>Post-Sales support</td>
                                            <td>Edinburgh</td>
                                            <td>46</td>
                                            <td>2011/03/09</td>
                                            <td>$324,050</td>
                                        </tr>
                                        <tr>
                                            <td>Unity Butler</td>
                                            <td>Marketing Designer</td>
                                            <td>San Francisco</td>
                                            <td>47</td>
                                            <td>2009/12/09</td>
                                            <td>$85,675</td>
                                        </tr>
                                        <tr>
                                            <td>Howard Hatfield</td>
                                            <td>Office Manager</td>
                                            <td>San Francisco</td>
                                            <td>51</td>
                                            <td>2008/12/16</td>
                                            <td>$164,500</td>
                                        </tr>
                                        <tr>
                                            <td>Hope Fuentes</td>
                                            <td>Secretary</td>
                                            <td>San Francisco</td>
                                            <td>41</td>
                                            <td>2010/02/12</td>
                                            <td>$109,850</td>
                                        </tr>
                                        <tr>
                                            <td>Vivian Harrell</td>
                                            <td>Financial Controller</td>
                                            <td>San Francisco</td>
                                            <td>62</td>
                                            <td>2009/02/14</td>
                                            <td>$452,500</td>
                                        </tr>
                                        <tr>
                                            <td>Timothy Mooney</td>
                                            <td>Office Manager</td>
                                            <td>London</td>
                                            <td>37</td>
                                            <td>2008/12/11</td>
                                            <td>$136,200</td>
                                        </tr>
                                        <tr>
                                            <td>Jackson Bradshaw</td>
                                            <td>Director</td>
                                            <td>New York</td>
                                            <td>65</td>
                                            <td>2008/09/26</td>
                                            <td>$645,750</td>
                                        </tr>
                                        <tr>
                                            <td>Olivia Liang</td>
                                            <td>Support Engineer</td>
                                            <td>Singapore</td>
                                            <td>64</td>
                                            <td>2011/02/03</td>
                                            <td>$234,500</td>
                                        </tr>
                                        <tr>
                                            <td>Bruno Nash</td>
                                            <td>Software Engineer</td>
                                            <td>London</td>
                                            <td>38</td>
                                            <td>2011/05/03</td>
                                            <td>$163,500</td>
                                        </tr>
                                        <tr>
                                            <td>Sakura Yamamoto</td>
                                            <td>Support Engineer</td>
                                            <td>Tokyo</td>
                                            <td>37</td>
                                            <td>2009/08/19</td>
                                            <td>$139,575</td>
                                        </tr>
                                        <tr>
                                            <td>Thor Walton</td>
                                            <td>Developer</td>
                                            <td>New York</td>
                                            <td>61</td>
                                            <td>2013/08/11</td>
                                            <td>$98,540</td>
                                        </tr>
                                        <tr>
                                            <td>Finn Camacho</td>
                                            <td>Support Engineer</td>
                                            <td>San Francisco</td>
                                            <td>47</td>
                                            <td>2009/07/07</td>
                                            <td>$87,500</td>
                                        </tr>
                                        <tr>
                                            <td>Serge Baldwin</td>
                                            <td>Data Coordinator</td>
                                            <td>Singapore</td>
                                            <td>64</td>
                                            <td>2012/04/09</td>
                                            <td>$138,575</td>
                                        </tr>
                                        <tr>
                                            <td>Zenaida Frank</td>
                                            <td>Software Engineer</td>
                                            <td>New York</td>
                                            <td>63</td>
                                            <td>2010/01/04</td>
                                            <td>$125,250</td>
                                        </tr>
                                        <tr>
                                            <td>Zorita Serrano</td>
                                            <td>Software Engineer</td>
                                            <td>San Francisco</td>
                                            <td>56</td>
                                            <td>2012/06/01</td>
                                            <td>$115,000</td>
                                        </tr>
                                        <tr>
                                            <td>Jennifer Acosta</td>
                                            <td>Junior Javascript Developer</td>
                                            <td>Edinburgh</td>
                                            <td>43</td>
                                            <td>2013/02/01</td>
                                            <td>$75,650</td>
                                        </tr>
                                        <tr>
                                            <td>Cara Stevens</td>
                                            <td>Sales Assistant</td>
                                            <td>New York</td>
                                            <td>46</td>
                                            <td>2011/12/06</td>
                                            <td>$145,600</td>
                                        </tr>
                                        <tr>
                                            <td>Hermione Butler</td>
                                            <td>Regional Director</td>
                                            <td>London</td>
                                            <td>47</td>
                                            <td>2011/03/21</td>
                                            <td>$356,250</td>
                                        </tr>
                                        <tr>
                                            <td>Lael Greer</td>
                                            <td>Systems Administrator</td>
                                            <td>London</td>
                                            <td>21</td>
                                            <td>2009/02/27</td>
                                            <td>$103,500</td>
                                        </tr>
                                        <tr>
                                            <td>Jonas Alexander</td>
                                            <td>Developer</td>
                                            <td>San Francisco</td>
                                            <td>30</td>
                                            <td>2010/07/14</td>
                                            <td>$86,500</td>
                                        </tr>
                                        <tr>
                                            <td>Shad Decker</td>
                                            <td>Regional Director</td>
                                            <td>Edinburgh</td>
                                            <td>51</td>
                                            <td>2008/11/13</td>
                                            <td>$183,000</td>
                                        </tr>
                                        <tr>
                                            <td>Michael Bruce</td>
                                            <td>Javascript Developer</td>
                                            <td>Singapore</td>
                                            <td>29</td>
                                            <td>2011/06/27</td>
                                            <td>$183,000</td>
                                        </tr>
                                        <tr>
                                            <td>Donna Snider</td>
                                            <td>Customer Support</td>
                                            <td>New York</td>
                                            <td>27</td>
                                            <td>2011/01/25</td>
                                            <td>$112,000</td>
                                        </tr>
                                        </tbody>
                                    </table>
    
                                </div>
                            </div>
                        </div> 
                    </div> 
    
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
    
                                    <h4 className="card-title">Buttons example</h4>
                                    <p className="card-title-desc">The Buttons extension for DataTables
                                        provides a common set of options, API methods and styling to display
                                        buttons on a page that will interact with a DataTable. The core library
                                        provides the based framework upon which plug-ins can built.
                                    </p>
    
                                    <table id="datatable-buttons" className="table table-bordered dt-responsive nowrap w-100">
                                        <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
                                        </tr>
                                        </thead>
    
    
                                        <tbody>
                                        <tr>
                                            <td>Tiger Nixon</td>
                                            <td>System Architect</td>
                                            <td>Edinburgh</td>
                                            <td>61</td>
                                            <td>2011/04/25</td>
                                            <td>$320,800</td>
                                        </tr>
                                        <tr>
                                            <td>Garrett Winters</td>
                                            <td>Accountant</td>
                                            <td>Tokyo</td>
                                            <td>63</td>
                                            <td>2011/07/25</td>
                                            <td>$170,750</td>
                                        </tr>
                                        <tr>
                                            <td>Ashton Cox</td>
                                            <td>Junior Technical Author</td>
                                            <td>San Francisco</td>
                                            <td>66</td>
                                            <td>2009/01/12</td>
                                            <td>$86,000</td>
                                        </tr>
                                        <tr>
                                            <td>Cedric Kelly</td>
                                            <td>Senior Javascript Developer</td>
                                            <td>Edinburgh</td>
                                            <td>22</td>
                                            <td>2012/03/29</td>
                                            <td>$433,060</td>
                                        </tr>
                                        <tr>
                                            <td>Airi Satou</td>
                                            <td>Accountant</td>
                                            <td>Tokyo</td>
                                            <td>33</td>
                                            <td>2008/11/28</td>
                                            <td>$162,700</td>
                                        </tr>
                                        <tr>
                                            <td>Brielle Williamson</td>
                                            <td>Integration Specialist</td>
                                            <td>New York</td>
                                            <td>61</td>
                                            <td>2012/12/02</td>
                                            <td>$372,000</td>
                                        </tr>
                                        <tr>
                                            <td>Herrod Chandler</td>
                                            <td>Sales Assistant</td>
                                            <td>San Francisco</td>
                                            <td>59</td>
                                            <td>2012/08/06</td>
                                            <td>$137,500</td>
                                        </tr>
                                        <tr>
                                            <td>Rhona Davidson</td>
                                            <td>Integration Specialist</td>
                                            <td>Tokyo</td>
                                            <td>55</td>
                                            <td>2010/10/14</td>
                                            <td>$327,900</td>
                                        </tr>
                                        <tr>
                                            <td>Colleen Hurst</td>
                                            <td>Javascript Developer</td>
                                            <td>San Francisco</td>
                                            <td>39</td>
                                            <td>2009/09/15</td>
                                            <td>$205,500</td>
                                        </tr>
                                        <tr>
                                            <td>Sonya Frost</td>
                                            <td>Software Engineer</td>
                                            <td>Edinburgh</td>
                                            <td>23</td>
                                            <td>2008/12/13</td>
                                            <td>$103,600</td>
                                        </tr>
                                        <tr>
                                            <td>Jena Gaines</td>
                                            <td>Office Manager</td>
                                            <td>London</td>
                                            <td>30</td>
                                            <td>2008/12/19</td>
                                            <td>$90,560</td>
                                        </tr>
                                        <tr>
                                            <td>Quinn Flynn</td>
                                            <td>Support Lead</td>
                                            <td>Edinburgh</td>
                                            <td>22</td>
                                            <td>2013/03/03</td>
                                            <td>$342,000</td>
                                        </tr>
                                        <tr>
                                            <td>Charde Marshall</td>
                                            <td>Regional Director</td>
                                            <td>San Francisco</td>
                                            <td>36</td>
                                            <td>2008/10/16</td>
                                            <td>$470,600</td>
                                        </tr>
                                        <tr>
                                            <td>Haley Kennedy</td>
                                            <td>Senior Marketing Designer</td>
                                            <td>London</td>
                                            <td>43</td>
                                            <td>2012/12/18</td>
                                            <td>$313,500</td>
                                        </tr>
                                        <tr>
                                            <td>Tatyana Fitzpatrick</td>
                                            <td>Regional Director</td>
                                            <td>London</td>
                                            <td>19</td>
                                            <td>2010/03/17</td>
                                            <td>$385,750</td>
                                        </tr>
                                        <tr>
                                            <td>Michael Silva</td>
                                            <td>Marketing Designer</td>
                                            <td>London</td>
                                            <td>66</td>
                                            <td>2012/11/27</td>
                                            <td>$198,500</td>
                                        </tr>
                                        <tr>
                                            <td>Paul Byrd</td>
                                            <td>Chief Financial Officer (CFO)</td>
                                            <td>New York</td>
                                            <td>64</td>
                                            <td>2010/06/09</td>
                                            <td>$725,000</td>
                                        </tr>
                                        <tr>
                                            <td>Gloria Little</td>
                                            <td>Systems Administrator</td>
                                            <td>New York</td>
                                            <td>59</td>
                                            <td>2009/04/10</td>
                                            <td>$237,500</td>
                                        </tr>
                                        <tr>
                                            <td>Bradley Greer</td>
                                            <td>Software Engineer</td>
                                            <td>London</td>
                                            <td>41</td>
                                            <td>2012/10/13</td>
                                            <td>$132,000</td>
                                        </tr>
                                        <tr>
                                            <td>Dai Rios</td>
                                            <td>Personnel Lead</td>
                                            <td>Edinburgh</td>
                                            <td>35</td>
                                            <td>2012/09/26</td>
                                            <td>$217,500</td>
                                        </tr>
                                        <tr>
                                            <td>Jenette Caldwell</td>
                                            <td>Development Lead</td>
                                            <td>New York</td>
                                            <td>30</td>
                                            <td>2011/09/03</td>
                                            <td>$345,000</td>
                                        </tr>
                                        <tr>
                                            <td>Yuri Berry</td>
                                            <td>Chief Marketing Officer (CMO)</td>
                                            <td>New York</td>
                                            <td>40</td>
                                            <td>2009/06/25</td>
                                            <td>$675,000</td>
                                        </tr>
                                        <tr>
                                            <td>Caesar Vance</td>
                                            <td>Pre-Sales Support</td>
                                            <td>New York</td>
                                            <td>21</td>
                                            <td>2011/12/12</td>
                                            <td>$106,450</td>
                                        </tr>
                                        <tr>
                                            <td>Doris Wilder</td>
                                            <td>Sales Assistant</td>
                                            <td>Sidney</td>
                                            <td>23</td>
                                            <td>2010/09/20</td>
                                            <td>$85,600</td>
                                        </tr>
                                        <tr>
                                            <td>Angelica Ramos</td>
                                            <td>Chief Executive Officer (CEO)</td>
                                            <td>London</td>
                                            <td>47</td>
                                            <td>2009/10/09</td>
                                            <td>$1,200,000</td>
                                        </tr>
                                        <tr>
                                            <td>Gavin Joyce</td>
                                            <td>Developer</td>
                                            <td>Edinburgh</td>
                                            <td>42</td>
                                            <td>2010/12/22</td>
                                            <td>$92,575</td>
                                        </tr>
                                        <tr>
                                            <td>Jennifer Chang</td>
                                            <td>Regional Director</td>
                                            <td>Singapore</td>
                                            <td>28</td>
                                            <td>2010/11/14</td>
                                            <td>$357,650</td>
                                        </tr>
                                        <tr>
                                            <td>Brenden Wagner</td>
                                            <td>Software Engineer</td>
                                            <td>San Francisco</td>
                                            <td>28</td>
                                            <td>2011/06/07</td>
                                            <td>$206,850</td>
                                        </tr>
                                        <tr>
                                            <td>Fiona Green</td>
                                            <td>Chief Operating Officer (COO)</td>
                                            <td>San Francisco</td>
                                            <td>48</td>
                                            <td>2010/03/11</td>
                                            <td>$850,000</td>
                                        </tr>
                                        <tr>
                                            <td>Shou Itou</td>
                                            <td>Regional Marketing</td>
                                            <td>Tokyo</td>
                                            <td>20</td>
                                            <td>2011/08/14</td>
                                            <td>$163,000</td>
                                        </tr>
                                        <tr>
                                            <td>Michelle House</td>
                                            <td>Integration Specialist</td>
                                            <td>Sidney</td>
                                            <td>37</td>
                                            <td>2011/06/02</td>
                                            <td>$95,400</td>
                                        </tr>
                                        <tr>
                                            <td>Suki Burks</td>
                                            <td>Developer</td>
                                            <td>London</td>
                                            <td>53</td>
                                            <td>2009/10/22</td>
                                            <td>$114,500</td>
                                        </tr>
                                        <tr>
                                            <td>Prescott Bartlett</td>
                                            <td>Technical Author</td>
                                            <td>London</td>
                                            <td>27</td>
                                            <td>2011/05/07</td>
                                            <td>$145,000</td>
                                        </tr>
                                        <tr>
                                            <td>Gavin Cortez</td>
                                            <td>Team Leader</td>
                                            <td>San Francisco</td>
                                            <td>22</td>
                                            <td>2008/10/26</td>
                                            <td>$235,500</td>
                                        </tr>
                                        <tr>
                                            <td>Martena Mccray</td>
                                            <td>Post-Sales support</td>
                                            <td>Edinburgh</td>
                                            <td>46</td>
                                            <td>2011/03/09</td>
                                            <td>$324,050</td>
                                        </tr>
                                        <tr>
                                            <td>Unity Butler</td>
                                            <td>Marketing Designer</td>
                                            <td>San Francisco</td>
                                            <td>47</td>
                                            <td>2009/12/09</td>
                                            <td>$85,675</td>
                                        </tr>
                                        <tr>
                                            <td>Howard Hatfield</td>
                                            <td>Office Manager</td>
                                            <td>San Francisco</td>
                                            <td>51</td>
                                            <td>2008/12/16</td>
                                            <td>$164,500</td>
                                        </tr>
                                        <tr>
                                            <td>Hope Fuentes</td>
                                            <td>Secretary</td>
                                            <td>San Francisco</td>
                                            <td>41</td>
                                            <td>2010/02/12</td>
                                            <td>$109,850</td>
                                        </tr>
                                        <tr>
                                            <td>Vivian Harrell</td>
                                            <td>Financial Controller</td>
                                            <td>San Francisco</td>
                                            <td>62</td>
                                            <td>2009/02/14</td>
                                            <td>$452,500</td>
                                        </tr>
                                        <tr>
                                            <td>Timothy Mooney</td>
                                            <td>Office Manager</td>
                                            <td>London</td>
                                            <td>37</td>
                                            <td>2008/12/11</td>
                                            <td>$136,200</td>
                                        </tr>
                                        <tr>
                                            <td>Jackson Bradshaw</td>
                                            <td>Director</td>
                                            <td>New York</td>
                                            <td>65</td>
                                            <td>2008/09/26</td>
                                            <td>$645,750</td>
                                        </tr>
                                        <tr>
                                            <td>Olivia Liang</td>
                                            <td>Support Engineer</td>
                                            <td>Singapore</td>
                                            <td>64</td>
                                            <td>2011/02/03</td>
                                            <td>$234,500</td>
                                        </tr>
                                        <tr>
                                            <td>Bruno Nash</td>
                                            <td>Software Engineer</td>
                                            <td>London</td>
                                            <td>38</td>
                                            <td>2011/05/03</td>
                                            <td>$163,500</td>
                                        </tr>
                                        <tr>
                                            <td>Sakura Yamamoto</td>
                                            <td>Support Engineer</td>
                                            <td>Tokyo</td>
                                            <td>37</td>
                                            <td>2009/08/19</td>
                                            <td>$139,575</td>
                                        </tr>
                                        <tr>
                                            <td>Thor Walton</td>
                                            <td>Developer</td>
                                            <td>New York</td>
                                            <td>61</td>
                                            <td>2013/08/11</td>
                                            <td>$98,540</td>
                                        </tr>
                                        <tr>
                                            <td>Finn Camacho</td>
                                            <td>Support Engineer</td>
                                            <td>San Francisco</td>
                                            <td>47</td>
                                            <td>2009/07/07</td>
                                            <td>$87,500</td>
                                        </tr>
                                        <tr>
                                            <td>Serge Baldwin</td>
                                            <td>Data Coordinator</td>
                                            <td>Singapore</td>
                                            <td>64</td>
                                            <td>2012/04/09</td>
                                            <td>$138,575</td>
                                        </tr>
                                        <tr>
                                            <td>Zenaida Frank</td>
                                            <td>Software Engineer</td>
                                            <td>New York</td>
                                            <td>63</td>
                                            <td>2010/01/04</td>
                                            <td>$125,250</td>
                                        </tr>
                                        <tr>
                                            <td>Zorita Serrano</td>
                                            <td>Software Engineer</td>
                                            <td>San Francisco</td>
                                            <td>56</td>
                                            <td>2012/06/01</td>
                                            <td>$115,000</td>
                                        </tr>
                                        <tr>
                                            <td>Jennifer Acosta</td>
                                            <td>Junior Javascript Developer</td>
                                            <td>Edinburgh</td>
                                            <td>43</td>
                                            <td>2013/02/01</td>
                                            <td>$75,650</td>
                                        </tr>
                                        <tr>
                                            <td>Cara Stevens</td>
                                            <td>Sales Assistant</td>
                                            <td>New York</td>
                                            <td>46</td>
                                            <td>2011/12/06</td>
                                            <td>$145,600</td>
                                        </tr>
                                        <tr>
                                            <td>Hermione Butler</td>
                                            <td>Regional Director</td>
                                            <td>London</td>
                                            <td>47</td>
                                            <td>2011/03/21</td>
                                            <td>$356,250</td>
                                        </tr>
                                        <tr>
                                            <td>Lael Greer</td>
                                            <td>Systems Administrator</td>
                                            <td>London</td>
                                            <td>21</td>
                                            <td>2009/02/27</td>
                                            <td>$103,500</td>
                                        </tr>
                                        <tr>
                                            <td>Jonas Alexander</td>
                                            <td>Developer</td>
                                            <td>San Francisco</td>
                                            <td>30</td>
                                            <td>2010/07/14</td>
                                            <td>$86,500</td>
                                        </tr>
                                        <tr>
                                            <td>Shad Decker</td>
                                            <td>Regional Director</td>
                                            <td>Edinburgh</td>
                                            <td>51</td>
                                            <td>2008/11/13</td>
                                            <td>$183,000</td>
                                        </tr>
                                        <tr>
                                            <td>Michael Bruce</td>
                                            <td>Javascript Developer</td>
                                            <td>Singapore</td>
                                            <td>29</td>
                                            <td>2011/06/27</td>
                                            <td>$183,000</td>
                                        </tr>
                                        <tr>
                                            <td>Donna Snider</td>
                                            <td>Customer Support</td>
                                            <td>New York</td>
                                            <td>27</td>
                                            <td>2011/01/25</td>
                                            <td>$112,000</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div> 
                    </div> 

                </div> 
            </div>
            

            
            <footer className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6">
                            <script>document.write(new Date().getFullYear())</script> © Skote.
                        </div>
                        <div className="col-sm-6">
                            <div className="text-sm-end d-none d-sm-block">
                                Design & Develop by Themesbrand
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
 

    </div>
   
    
    <div className="right-bar">
        <div data-simplebar className="h-100">
            <div className="rightbar-title d-flex align-items-center px-3 py-4">
        
                <h5 className="m-0 me-2">Settings</h5>

                <a href="javascript:void(0);" className="right-bar-toggle ms-auto">
                    <i className="mdi mdi-close noti-icon"></i>
                </a>
            </div>

          
            <hr className="mt-0" />
            <h6 className="text-center mb-0">Choose Layouts</h6>

            <div className="p-4">
                <div className="mb-2">
                    <img src="assets/images/layouts/layout-1.jpg" className="img-thumbnail" alt="layout images"/>
                </div>

                <div className="form-check form-switch mb-3">
                    <input className="form-check-input theme-choice" type="checkbox" id="light-mode-switch" checked/>
                    <label className="form-check-label" htmlFor="light-mode-switch">Light Mode</label>
                </div>

                <div className="mb-2">
                    <img src="assets/images/layouts/layout-2.jpg" className="img-thumbnail" alt="layout images"/>
                </div>
                <div className="form-check form-switch mb-3">
                    <input className="form-check-input theme-choice" type="checkbox" id="dark-mode-switch"/>
                    <label className="form-check-label" htmlFor="dark-mode-switch">Dark Mode</label>
                </div>

                <div className="mb-2">
                    <img src="assets/images/layouts/layout-3.jpg" className="img-thumbnail" alt="layout images"/>
                </div>
                <div className="form-check form-switch mb-3">
                    <input className="form-check-input theme-choice" type="checkbox" id="rtl-mode-switch"/>
                    <label className="form-check-label" htmlFor="rtl-mode-switch">RTL Mode</label>
                </div>

                <div className="mb-2">
                    <img src="assets/images/layouts/layout-4.jpg" className="img-thumbnail" alt="layout images"/>
                </div>
                <div className="form-check form-switch mb-5">
                    <input className="form-check-input theme-choice" type="checkbox" id="dark-rtl-mode-switch"/>
                    <label className="form-check-label" htmlFor="dark-rtl-mode-switch">Dark RTL Mode</label>
                </div>

        
            </div>

        </div> 
    </div>
  

  
    <div className="rightbar-overlay"></div>

   
    <script src="assets/libs/jquery/jquery.min.js"></script>
    <script src="assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="assets/libs/metismenu/metisMenu.min.js"></script>
    <script src="assets/libs/simplebar/simplebar.min.js"></script>
    <script src="assets/libs/node-waves/waves.min.js"></script>

    <script src="assets/libs/datatables.net/js/jquery.dataTables.min.js"></script>
    <script src="assets/libs/datatables.net-bs4/js/dataTables.bootstrap4.min.js"></script>
 
    <script src="assets/libs/datatables.net-buttons/js/dataTables.buttons.min.js"></script>
    <script src="assets/libs/datatables.net-buttons-bs4/js/buttons.bootstrap4.min.js"></script>
    <script src="assets/libs/jszip/jszip.min.js"></script>
    <script src="assets/libs/pdfmake/build/pdfmake.min.js"></script>
    <script src="assets/libs/pdfmake/build/vfs_fonts.js"></script>
    <script src="assets/libs/datatables.net-buttons/js/buttons.html5.min.js"></script>
    <script src="assets/libs/datatables.net-buttons/js/buttons.print.min.js"></script>
    <script src="assets/libs/datatables.net-buttons/js/buttons.colVis.min.js"></script>
    
  
    <script src="assets/libs/datatables.net-responsive/js/dataTables.responsive.min.js"></script>
    <script src="assets/libs/datatables.net-responsive-bs4/js/responsive.bootstrap4.min.js"></script>

   
    <script src="assets/js/pages/datatables.init.js"></script>    

    <script src="assets/js/app.js"></script>

</body>
   
    </div>
  )
  }


export default Datatable

