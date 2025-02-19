import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <>
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
                    <i className="bx bx-list-ul"></i>
                    <span key="t-tables">Tables</span>
                </a>
                <ul className="sub-menu" aria-expanded="false">
                    <li>
                   <NavLink  to="/Datatable" >Data Table</NavLink>
                    </li>
                   
                    <li>
                   <NavLink  to="/Table" >Basic Table</NavLink>
                    </li> <li>
                   <NavLink  to="/Datatable" >Responsive Table</NavLink>
                    </li> <li>
                   <NavLink  to="/Datatable" >Editable Table</NavLink>
                    </li>
{/*                    
                    <li><a href="tables-datatable.html" key="t-data-tables">Data Tables</a></li>
                    <li><a href="tables-responsive.html" key="t-responsive-table">Responsive Table</a></li>
                    <li><a href="tables-editable.html" key="t-editable-table">Editable Table</a></li> */}
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




<div className="main-content"/>

<div className="page-content">
    <div className="container-fluid">

        
        <div className="row">
            <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4 className="mb-sm-0 font-size-18">Dashboard</h4>

                    <div className="page-title-right">
                        <ol className="breadcrumb m-0">
                            <li className="breadcrumb-item"><a href="javascript: void(0);">Dashboards</a></li>
                            <li className="breadcrumb-item active">Dashboard</li>
                        </ol>
                    </div>

                </div>
            </div>
        </div>
        

        <div className="row">
            <div className="col-xl-4">
                <div className="card overflow-hidden">
                    <div className="bg-primary bg-soft">
                        <div className="row">
                            <div className="col-7">
                                <div className="text-primary p-3">
                                    <h5 className="text-primary">Welcome Back !</h5>
                                    <p>Skote Dashboard</p>
                                </div>
                            </div>
                            <div className="col-5 align-self-end">
                                <img src="assets/images/profile-img.png" alt="" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                    <div className="card-body pt-0">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="avatar-md profile-user-wid mb-4">
                                    <img src="assets/images/users/avatar-1.jpg" alt="" className="img-thumbnail rounded-circle"/>
                                </div>
                                <h5 className="font-size-15 text-truncate">Henry Price</h5>
                                <p className="text-muted mb-0 text-truncate">UI/UX Designer</p>
                            </div>

                            <div className="col-sm-8">
                                <div className="pt-4">

                                    <div className="row">
                                        <div className="col-6">
                                            <h5 className="font-size-15">125</h5>
                                            <p className="text-muted mb-0">Projects</p>
                                        </div>
                                        <div className="col-6">
                                            <h5 className="font-size-15">$1245</h5>
                                            <p className="text-muted mb-0">Revenue</p>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <a href="javascript: void(0);" className="btn btn-primary waves-effect waves-light btn-sm">View Profile <i className="mdi mdi-arrow-right ms-1"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title mb-4">Monthly Earning</h4>
                        <div className="row">
                            <div className="col-sm-6">
                                <p className="text-muted">This month</p>
                                <h3>$34,252</h3>
                                <p className="text-muted"><span className="text-success me-2"> 12% <i className="mdi mdi-arrow-up"></i> </span> From previous period</p>

                                <div className="mt-4">
                                    <a href="javascript: void(0);" className="btn btn-primary waves-effect waves-light btn-sm">View More <i className="mdi mdi-arrow-right ms-1"></i></a>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="mt-4 mt-sm-0">
                                    <div id="radialBar-chart" className="apex-charts"></div>
                                </div>
                            </div>
                        </div>
                        <p className="text-muted mb-0">We craft digital, graphic and dimensional thinking.</p>
                    </div>
                </div>
            </div>
            <div className="col-xl-8">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card mini-stats-wid">
                            <div className="card-body">
                                <div className="d-flex">
                                    <div className="flex-grow-1">
                                        <p className="text-muted fw-medium">Orders</p>
                                        <h4 className="mb-0">1,235</h4>
                                    </div>

                                    <div className="flex-shrink-0 align-self-center">
                                        <div className="mini-stat-icon avatar-sm rounded-circle bg-primary">
                                            <span className="avatar-title">
                                                <i className="bx bx-copy-alt font-size-24"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mini-stats-wid">
                            <div className="card-body">
                                <div className="d-flex">
                                    <div className="flex-grow-1">
                                        <p className="text-muted fw-medium">Revenue</p>
                                        <h4 className="mb-0">$35, 723</h4>
                                    </div>

                                    <div className="flex-shrink-0 align-self-center ">
                                        <div className="avatar-sm rounded-circle bg-primary mini-stat-icon">
                                            <span className="avatar-title rounded-circle bg-primary">
                                                <i className="bx bx-archive-in font-size-24"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mini-stats-wid">
                            <div className="card-body">
                                <div className="d-flex">
                                    <div className="flex-grow-1">
                                        <p className="text-muted fw-medium">Average Price</p>
                                        <h4 className="mb-0">$16.2</h4>
                                    </div>

                                    <div className="flex-shrink-0 align-self-center">
                                        <div className="avatar-sm rounded-circle bg-primary mini-stat-icon">
                                            <span className="avatar-title rounded-circle bg-primary">
                                                <i className="bx bx-purchase-tag-alt font-size-24"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="card">
                    <div className="card-body">
                        <div className="d-sm-flex flex-wrap">
                            <h4 className="card-title mb-4">Email Sent</h4>
                            <div className="ms-auto">
                                <ul className="nav nav-pills">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Week</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Month</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#">Year</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div id="stacked-column-chart" className="apex-charts" dir="ltr"></div>
                    </div>
                </div>
            </div>
        </div>
     

        <div className="row">
            <div className="col-xl-4">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title mb-4">Social Source</h4>
                        <div className="text-center">
                            <div className="avatar-sm mx-auto mb-4">
                                <span className="avatar-title rounded-circle bg-primary bg-soft font-size-24">
                                        <i className="mdi mdi-facebook text-primary"></i>
                                    </span>
                            </div>
                            <p className="font-16 text-muted mb-2"></p>
                            <h5><a href="javascript: void(0);" className="text-dark">Facebook - <span className="text-muted font-16">125 sales</span> </a></h5>
                            <p className="text-muted">Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus tincidunt.</p>
                            <a href="javascript: void(0);" className="text-primary font-16">Learn more <i className="mdi mdi-chevron-right"></i></a>
                        </div>
                        <div className="row mt-4">
                            <div className="col-4">
                                <div className="social-source text-center mt-3">
                                    <div className="avatar-xs mx-auto mb-3">
                                        <span className="avatar-title rounded-circle bg-primary font-size-16">
                                                <i className="mdi mdi-facebook text-white"></i>
                                            </span>
                                    </div>
                                    <h5 className="font-size-15">Facebook</h5>
                                    <p className="text-muted mb-0">125 sales</p>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="social-source text-center mt-3">
                                    <div className="avatar-xs mx-auto mb-3">
                                        <span className="avatar-title rounded-circle bg-info font-size-16">
                                                <i className="mdi mdi-twitter text-white"></i>
                                            </span>
                                    </div>
                                    <h5 className="font-size-15">Twitter</h5>
                                    <p className="text-muted mb-0">112 sales</p>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="social-source text-center mt-3">
                                    <div className="avatar-xs mx-auto mb-3">
                                        <span className="avatar-title rounded-circle bg-pink font-size-16">
                                                <i className="mdi mdi-instagram text-white"></i>
                                            </span>
                                    </div>
                                    <h5 className="font-size-15">Instagram</h5>
                                    <p className="text-muted mb-0">104 sales</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="col-xl-4">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title mb-5">Activity</h4>
                        <ul className="verti-timeline list-unstyled">
                            <li className="event-list">
                                <div className="event-timeline-dot">
                                    <i className="bx bx-right-arrow-circle font-size-18"></i>
                                </div>
                                <div className="d-flex">
                                    <div className="flex-shrink-0 me-3">
                                        <h5 className="font-size-14">22 Nov <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i></h5>
                                    </div>
                                    <div className="flex-grow-1">
                                        <div>
                                            Responded to need “Volunteer Activities
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="event-list">
                                <div className="event-timeline-dot">
                                    <i className="bx bx-right-arrow-circle font-size-18"></i>
                                </div>
                                <div className="d-flex">
                                    <div className="flex-shrink-0 me-3">
                                        <h5 className="font-size-14">17 Nov <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i></h5>
                                    </div>
                                    <div className="flex-grow-1">
                                        <div>
                                            Everyone realizes why a new common language would be desirable... <a href="javascript: void(0);">Read more</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="event-list active">
                                <div className="event-timeline-dot">
                                    <i className="bx bxs-right-arrow-circle font-size-18 bx-fade-right"></i>
                                </div>
                                <div className="d-flex">
                                    <div className="flex-shrink-0 me-3">
                                        <h5 className="font-size-14">15 Nov <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i></h5>
                                    </div>
                                    <div className="flex-grow-1">
                                        <div>
                                            Joined the group “Boardsmanship Forum”
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="event-list">
                                <div className="event-timeline-dot">
                                    <i className="bx bx-right-arrow-circle font-size-18"></i>
                                </div>
                                <div className="d-flex">
                                    <div className="flex-shrink-0 me-3">
                                        <h5 className="font-size-14">12 Nov <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i></h5>
                                    </div>
                                    <div className="flex-grow-1">
                                        <div>
                                            Responded to need “In-Kind Opportunity”
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="text-center mt-4"><a href="javascript: void(0);" className="btn btn-primary waves-effect waves-light btn-sm">View More <i className="mdi mdi-arrow-right ms-1"></i></a></div>
                    </div>
                </div>
            </div>

            <div className="col-xl-4">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title mb-4">Top Cities Selling Product</h4>

                        <div className="text-center">
                            <div className="mb-4">
                                <i className="bx bx-map-pin text-primary display-4"></i>
                            </div>
                            <h3>1,456</h3>
                            <p>San Francisco</p>
                        </div>

                        <div className="table-responsive mt-4">
                            <table className="table align-middle table-nowrap">
                                <tbody>
                                    <tr>
                                        <td className="width: 30%">
                                            <p className="mb-0">San Francisco</p>
                                        </td>
                                        <td className="width: 25%">
                                            <h5 className="mb-0">1,456</h5></td>
                                        <td>
                                            <div className="progress bg-transparent progress-sm">
                                                
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p className="mb-0">Los Angeles</p>
                                        </td>
                                        <td>
                                            <h5 className="mb-0">1,123</h5>
                                        </td>
                                        <td>
                                            <div className="progress bg-transparent progress-sm">
                                                </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p className="mb-0">San Diego</p>
                                        </td>
                                        <td>
                                            <h5 className="mb-0">1,026</h5>
                                        </td>
                                        <td>
                                            <div className="progress bg-transparent progress-sm">
                                               
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       

        <div className="row">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title mb-4">Latest Transaction</h4>
                        <div className="table-responsive">
                            <table className="table align-middle table-nowrap mb-0">
                                <thead className="table-light">
                                    <tr>
                                        <th className="wd-20">
                                            <div className="form-check font-size-16 align-middle">
                                                <input className="form-check-input" type="checkbox" id="transactionCheck01"/>
                                                <label className="form-check-label" htmlFor="transactionCheck01"></label>
                                            </div>
                                        </th>
                                        <th className="align-middle">Order ID</th>
                                        <th className="align-middle">Billing Name</th>
                                        <th className="align-middle">Date</th>
                                        <th className="align-middle">Total</th>
                                        <th className="align-middle">Payment Status</th>
                                        <th className="align-middle">Payment Method</th>
                                        <th className="align-middle">View Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="form-check font-size-16">
                                                <input className="form-check-input" type="checkbox" id="transactionCheck02"/>
                                                <label className="form-check-label" htmlFor="transactionCheck02"></label>
                                            </div>
                                        </td>
                                        <td><a href="javascript: void(0);" className="text-body fw-bold">#SK2540</a> </td>
                                        <td>Neal Matthews</td>
                                        <td>
                                            07 Oct, 2019
                                        </td>
                                        <td>
                                            $400
                                        </td>
                                        <td>
                                            <span className="badge badge-pill badge-soft-success font-size-11">Paid</span>
                                        </td>
                                        <td>
                                            <i className="fab fa-cc-mastercard me-1"></i> Mastercard
                                        </td>
                                        <td>
                                          
                                            <button type="button" className="btn btn-primary btn-sm btn-rounded waves-effect waves-light" data-bs-toggle="modal" data-bs-target=".transaction-detailModal">
                                                View Details
                                            </button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <div className="form-check font-size-16">
                                                <input className="form-check-input" type="checkbox" id="transactionCheck03"/>
                                                <label className="form-check-label" htmlFor="transactionCheck03"></label>
                                            </div>
                                        </td>
                                        <td><a href="javascript: void(0);" className="text-body fw-bold">#SK2541</a> </td>
                                        <td>Jamal Burnett</td>
                                        <td>
                                            07 Oct, 2019
                                        </td>
                                        <td>
                                            $380
                                        </td>
                                        <td>
                                            <span className="badge badge-pill badge-soft-danger font-size-11">Chargeback</span>
                                        </td>
                                        <td>
                                            <i className="fab fa-cc-visa me-1"></i> Visa
                                        </td>
                                        <td>
                                           
                                            <button type="button" className="btn btn-primary btn-sm btn-rounded waves-effect waves-light" data-bs-toggle="modal" data-bs-target=".transaction-detailModal">
                                                View Details
                                            </button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <div className="form-check font-size-16">
                                                <input className="form-check-input" type="checkbox" id="transactionCheck04"/>
                                                <label className="form-check-label" htmlFor="transactionCheck04"></label>
                                            </div>
                                        </td>
                                        <td><a href="javascript: void(0);" className="text-body fw-bold">#SK2542</a> </td>
                                        <td>Juan Mitchell</td>
                                        <td>
                                            06 Oct, 2019
                                        </td>
                                        <td>
                                            $384
                                        </td>
                                        <td>
                                            <span className="badge badge-pill badge-soft-success font-size-11">Paid</span>
                                        </td>
                                        <td>
                                            <i className="fab fa-cc-paypal me-1"></i> Paypal
                                        </td>
                                        <td>
                                           
                                            <button type="button" className="btn btn-primary btn-sm btn-rounded waves-effect waves-light" data-bs-toggle="modal" data-bs-target=".transaction-detailModal">
                                                View Details
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check font-size-16">
                                                <input className="form-check-input" type="checkbox" id="transactionCheck05"/>
                                                <label className="form-check-label" htmlFor="transactionCheck05"></label>
                                            </div>
                                        </td>
                                        <td><a href="javascript: void(0);" className="text-body fw-bold">#SK2543</a> </td>
                                        <td>Barry Dick</td>
                                        <td>
                                            05 Oct, 2019
                                        </td>
                                        <td>
                                            $412
                                        </td>
                                        <td>
                                            <span className="badge badge-pill badge-soft-success font-size-11">Paid</span>
                                        </td>
                                        <td>
                                            <i className="fab fa-cc-mastercard me-1"></i> Mastercard
                                        </td>
                                        <td>
                                         
                                            <button type="button" className="btn btn-primary btn-sm btn-rounded waves-effect waves-light" data-bs-toggle="modal" data-bs-target=".transaction-detailModal">
                                                View Details
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check font-size-16">
                                                <input className="form-check-input" type="checkbox" id="transactionCheck06"/>
                                                <label className="form-check-label" htmlFor="transactionCheck06"></label>
                                            </div>
                                        </td>
                                        <td><a href="javascript: void(0);" className="text-body fw-bold">#SK2544</a> </td>
                                        <td>Ronald Taylor</td>
                                        <td>
                                            04 Oct, 2019
                                        </td>
                                        <td>
                                            $404
                                        </td>
                                        <td>
                                            <span className="badge badge-pill badge-soft-warning font-size-11">Refund</span>
                                        </td>
                                        <td>
                                            <i className="fab fa-cc-visa me-1"></i> Visa
                                        </td>
                                        <td>
                                            
                                            <button type="button" className="btn btn-primary btn-sm btn-rounded waves-effect waves-light" data-bs-toggle="modal" data-bs-target=".transaction-detailModal">
                                                View Details
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check font-size-16">
                                                <input className="form-check-input" type="checkbox" id="transactionCheck07"/>
                                                <label className="form-check-label" htmlFor="transactionCheck07"></label>
                                            </div>
                                        </td>
                                        <td><a href="javascript: void(0);" className="text-body fw-bold">#SK2545</a> </td>
                                        <td>Jacob Hunter</td>
                                        <td>
                                            04 Oct, 2019
                                        </td>
                                        <td>
                                            $392
                                        </td>
                                        <td>
                                            <span className="badge badge-pill badge-soft-success font-size-11">Paid</span>
                                        </td>
                                        <td>
                                            <i className="fab fa-cc-paypal me-1"></i> Paypal
                                        </td>
                                        <td>
                                            
                                            <button type="button" className="btn btn-primary btn-sm btn-rounded waves-effect waves-light" data-bs-toggle="modal" data-bs-target=".transaction-detailModal">
                                                View Details
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
       
    </div>
  
</div>



<div className="modal fade transaction-detailModal"  role="dialog" aria-labelledby="transaction-detailModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="transaction-detailModalLabel">Order Details</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <p className="mb-2">Product id: <span className="text-primary">#SK2540</span></p>
                <p className="mb-4">Billing Name: <span className="text-primary">Neal Matthews</span></p>

                <div className="table-responsive">
                    <table className="table align-middle table-nowrap">
                        <thead>
                            <tr>
                                <th scope="col">Product</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">
                                    <div>
                                        <img src="assets/images/product/img-7.png" alt="" className="avatar-sm"/>
                                    </div>
                                </th>
                                <td>
                                    <div>
                                        <h5 className="text-truncate font-size-14">Wireless Headphone (Black)</h5>
                                        <p className="text-muted mb-0">$ 225 x 1</p>
                                    </div>
                                </td>
                                <td>$ 255</td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <div>
                                        <img src="assets/images/product/img-4.png" alt="" className="avatar-sm"/>
                                    </div>
                                </th>
                                <td>
                                    <div>
                                        <h5 className="text-truncate font-size-14">Phone patterned cases</h5>
                                        <p className="text-muted mb-0">$ 145 x 1</p>
                                    </div>
                                </td>
                                <td>$ 145</td>
                            </tr>
                            <tr>
                                <td >
                                    <h6 className="m-0 text-right">Sub Total:</h6>
                                </td>
                                <td>
                                    $ 400
                                </td>
                            </tr>
                            <tr>
                                <td >
                                    <h6 className="m-0 text-right">Shipping:</h6>
                                </td>
                                <td>
                                    Free
                                </td>
                            </tr>
                            <tr>
                                <td >
                                    <h6 className="m-0 text-right">Total:</h6>
                                </td>
                                <td>
                                    $ 400
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>



<div className="modal fade" id="subscribeModal"  aria-labelledby="subscribeModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header border-bottom-0">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div className="text-center mb-4">
                    <div className="avatar-md mx-auto mb-4">
                        <div className="avatar-title bg-light rounded-circle text-primary h1">
                            <i className="mdi mdi-email-open"></i>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-xl-10">
                            <h4 className="text-primary">Subscribe !</h4>
                            <p className="text-muted font-size-14 mb-4">Subscribe our newletter and get notification to stay update.</p>

                            <div className="input-group bg-light rounded">
                                <input type="email" className="form-control bg-transparent border-0" placeholder="Enter Email address" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                
                                <button className="btn btn-primary" type="button" id="button-addon2">
                                    <i className="bx bxs-paper-plane"></i>
                                </button>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        </>
    )
}

export default Home ;