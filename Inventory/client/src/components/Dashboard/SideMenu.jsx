import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdCreate, MdOutlineCancel } from 'react-icons/md';
import { RiChatNewLine } from 'react-icons/ri';
import { RxDashboard } from 'react-icons/rx';
import { TbProgress } from 'react-icons/tb';
import { AiOutlineFileDone } from 'react-icons/ai';

const SideMenu = ({ show }) => {
  const path = useLocation().pathname;
  const [showDasboardSubMenu, setShowDashboardSubMenu] = useState(true);
  const [showCustomerSubMenu, setShowCustomerSubMenu] = useState(false);
  const [showSupplierSubMenu, setShowSupplierSubMenu] = useState(false);
  const [showExpenseSubMenu, setShowExpenseSubMenu] = useState(false);
  const [showProductSubMenu, setShowProductSubMenu] = useState(false);

  const handleProductClick = () => {
    setShowProductSubMenu(!showProductSubMenu)
    setShowCustomerSubMenu(false);
    setShowSupplierSubMenu(false);
    setShowExpenseSubMenu(false);
    setShowDashboardSubMenu(false)
  };

  const handleDashboardClick = () => {
    setShowDashboardSubMenu(!showDasboardSubMenu)
    setShowCustomerSubMenu(false);
    setShowSupplierSubMenu(false);
    setShowExpenseSubMenu(false);
    setShowProductSubMenu(false)
  };

  const handleCustomerClick = () => {
    setShowCustomerSubMenu(!showCustomerSubMenu);
    setShowSupplierSubMenu(false);
    setShowExpenseSubMenu(false);
    setShowDashboardSubMenu(false);
    setShowProductSubMenu(false)
  };

  const handleSupplierClick = () => {
    setShowSupplierSubMenu(!showSupplierSubMenu);
    setShowCustomerSubMenu(false);
    setShowExpenseSubMenu(false);
    setShowDashboardSubMenu(false);
    setShowProductSubMenu(false)
  };

  const handleExpenseClick = () => {
    setShowExpenseSubMenu(!showExpenseSubMenu);
    setShowCustomerSubMenu(false);
    setShowSupplierSubMenu(false);
    setShowDashboardSubMenu(false);
    setShowProductSubMenu(false)
  };

  const widthControl = show
    ? {
        minWidth: '220px',
        height: 'calc(100vh - 119px)',
      }
    : {
        width: '0px',
        height: 'calc(100vh - 119px)',
      };

  return (
    <>
      <div className="left-area overflow-auto mt-5 bg-body" style={widthControl}>
        <ul style={{ listStyle: 'none' }} className="p-0">
          <Link to={'/'} style={{ textDecoration: 'none' }}>
            <li
              className={`p-2 customHover mb-1 ${path === '/' ? 'active sidemenu' : 'Not_active_sidemenu'}`}
            >
              <span className="fs-6 pe-2 ">
                <RxDashboard />
              </span>
              <span onClick={handleDashboardClick}>DashBoard</span>
            </li>
          </Link>

          <Link to={'/Customer'} style={{ textDecoration: 'none' }}>
          <li
            className={`p-2 mb-1 customHover ${
              path === '/Customer' ? 'active sidemenu' : 'Not_active_sidemenu'
            }`}
          >
            <span className="fs-6 pe-2">
              <MdCreate />
            </span>
            <span onClick={handleCustomerClick}>Customer</span>
            {showCustomerSubMenu && (
              <ul>
                <li>
                  <Link to="/customer">New Customer</Link>
                </li>
                <li>
                  <Link to="/create">Customer List</Link>
                </li>
              </ul>
            )}
          </li>
          </Link>

          <Link to={'/new'} style={{ textDecoration: 'none' }}>
            <li
              className={`p-2 mb-1 customHover ${
                path === '/new' ? 'active sidemenu' : 'Not_active_sidemenu'
              }`}
            >
              <span className="fs-6 pe-2">
                <RiChatNewLine />
              </span>
              <span onClick={handleSupplierClick}>Supplier</span>
              {showSupplierSubMenu && (
                <ul>
                  <li>
                    <Link to="/supplier">New Supplier</Link>
                  </li>
                  <li>
                    <Link to="/new">Supplier List</Link>
                  </li>
                </ul>
              )}
            </li>
          </Link>

          <Link to={'/Expense'} style={{ textDecoration: 'none' }}>
            <li
              className={`p-2 mb-1 customHover ${
                path === '/Expense' ? 'active sidemenu' : 'Not_active_sidemenu'
              }`}
            >
              <span className="fs-6 pe-2">
                <TbProgress />
              </span>
              <span onClick={handleExpenseClick}>Expense</span>
              {showExpenseSubMenu && (
                <ul>
                  <li>
                    <Link to="/progress">New Expense Type</Link>
                  </li>
                  <li>
                    <Link to="/progress">Expense Type List</Link>
                  </li>
                  <li>
                    <Link to="/progress">New Expense</Link>
                  </li>
                  <li>
                    <Link to="/progress">Expense List</Link>
                  </li>
                </ul>
              )}
            </li>
          </Link>

          <Link to={'/product'} style={{ textDecoration: 'none' }}>
            <li
              className={`p-2 mb-1 customHover ${
                path === '/product' ? 'active sidemenu' : 'Not_active_sidemenu'
              }`}
            >
              <span className="fs-6 pe-2">
                <AiOutlineFileDone />
              </span>
              <span onClick={handleProductClick}>Product</span>
              {showProductSubMenu && (
                <ul>
                  <li>
                    <Link to="/Product">New Product</Link>
                  </li>
                  <li>
                    <Link to="/Product">Product List</Link>
                  </li>
                </ul>
              )}
            </li>
          </Link>

          <Link to={'/Purchases'} style={{ textDecoration: 'none' }}>
            <li
              className={`p-2 mb-1 customHover ${
                path === '/Purchases' ? 'active sidemenu' : 'Not_active_sidemenu'
              }`}
            >
              <span className="fs-6 pe-2">
                <MdOutlineCancel />
              </span>
              <span>Purchase</span>
            </li>
          </Link>

          <Link to={'/Sales'} style={{ textDecoration: 'none' }}>
            <li
              className={`p-2 mb-1 customHover ${
                path === '/Sales' ? 'active sidemenu' : 'Not_active_sidemenu'
              }`}
            >
              <span className="fs-6 pe-2">
                <MdOutlineCancel />
              </span>
              <span>Sale</span>
            </li>
          </Link>

          <Link to={'/Returns'} style={{ textDecoration: 'none' }}>
            <li
              className={`p-2 mb-1 customHover ${
                path === '/Returns' ? 'active sidemenu' : 'Not_active_sidemenu'
              }`}
            >
              <span className="fs-6 pe-2">
                <MdOutlineCancel />
              </span>
              <span>Return</span>
            </li>
          </Link>

          <Link to={'/Returns'} style={{ textDecoration: 'none' }}>
            <li
              className={`p-2 mb-1 customHover ${
                path === '/Returns' ? 'active sidemenu' : 'Not_active_sidemenu'
              }`}
            >
              <span className="fs-6 pe-2">
                <MdOutlineCancel />
              </span>
              <span>Report</span>
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default SideMenu;
